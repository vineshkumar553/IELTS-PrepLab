const urlparams = new URLSearchParams(window.location.search);
let mode = urlparams.get("mode");

if (!["quick", "full", "types"].includes(mode)) {
    mode = "quick";
}

function shuffle(items) {
    const result = [...items];

    for (let i = result.length - 1; i > 0; i--) {
        const randomindex = Math.floor(Math.random() * (i + 1));
        const item = result[i];

        result[i] = result[randomindex];
        result[randomindex] = item;
    }

    return result;
}

function escapetext(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function setdisplay(selector, display) {
    document.querySelector(selector).style.display = display;
}

const questioncontent = document.querySelector(".question-content");

function showmessage(message) {
    questioncontent.textContent = message;

    document.querySelector(".question-prev").disabled = true;
    document.querySelector(".question-next").disabled = true;
    document.querySelector(".passage-prev").disabled = true;
    document.querySelector(".passage-next").disabled = true;
    document.querySelector(".submit-session").disabled = true;
}

const passages = readingdata.filter(page => {
    return Array.isArray(page.questions) && page.questions.length > 0;
});

let sessionpages = [];
let sessionquestions = [];

function addquestions(page, questions) {
    questions.forEach(question => {
        sessionquestions.push({
            ...question,
            passage: page
        });
    });
}

function preparequick() {
    const availablepages = passages.filter(page => {
        return page.questions.length >= 10;
    });

    if (availablepages.length === 0) {
        showmessage("Quick practice needs a passage with at least 10 questions.");
        return false;
    }

    const page = shuffle(availablepages)[0];

    sessionpages = [page];
    sessionquestions = [];

    addquestions(page, shuffle(page.questions).slice(0, 10));

    return true;
}

function preparefull() {
    const availablepages = passages.filter(page => {
        return page.questions.length >= 13;
    });

    const longerpages = availablepages.filter(page => {
        return page.questions.length >= 14;
    });

    if (availablepages.length < 3 || longerpages.length === 0) {
        showmessage(
            "A full test needs two passages with at least 13 questions and another with at least 14."
        );

        return false;
    }

    const longerpage = shuffle(longerpages)[0];

    const otherpages = availablepages.filter(page => {
        return page !== longerpage;
    });

    sessionpages = shuffle([
        longerpage,
        ...shuffle(otherpages).slice(0, 2)
    ]);

    sessionquestions = [];

    sessionpages.forEach(page => {
        const count = page === longerpage ? 14 : 13;
        const questions = shuffle(page.questions).slice(0, count);

        addquestions(page, questions);
    });

    return true;
}

let currentpassage = 0;
let fullreading = false;

const passageprev = document.querySelector(".passage-prev");
const passagenext = document.querySelector(".passage-next");

function renderpassage() {
    const page = sessionpages[currentpassage];

    if (!page) {
        return;
    }

    const number = String(currentpassage + 1).padStart(2, "0");
    const total = String(sessionpages.length).padStart(2, "0");

    let label = `PASSAGE ${number}`;

    if (sessionpages.length > 1) {
        label += ` OF ${total}`;
    }

    document.querySelector(".passage-label").textContent = label;
    document.querySelector(".passage-title").textContent = page.title;
    document.querySelector(".passage-topic").textContent = page.topic;
    document.querySelector(".passage-difficulty").textContent = page.difficulty;

    document.querySelector(".paper-bottom span:last-child").textContent =
        `PASSAGE ${number}`;

    document.querySelector(".passage-content").innerHTML =
        page.paragraphs.map(paragraph => `
            <p>
                <span class="paragraph-label">
                    ${escapetext(paragraph.id)}
                </span>
                ${escapetext(paragraph.text)}
            </p>
        `).join("");

    passageprev.disabled = currentpassage === 0;

    let buttontext = "Next Passage";

    if (fullreading) {
        document.querySelector(".session-progress").textContent =
            `${number} / ${total}`;

        document.querySelector(".session-progress-info span").textContent =
            "PASSAGE";

        passagenext.disabled = false;

        if (currentpassage === sessionpages.length - 1) {
            buttontext = "Start Questions";
        }
    } else {
        passagenext.disabled = currentpassage === sessionpages.length - 1;
    }

    passagenext.innerHTML = `
        ${buttontext}
        <i class="fa-solid fa-arrow-right"></i>
    `;
}

const typenames = {
    mcq: "Multiple Choice",
    tfng: "True / False / Not Given",
    "matching-headings": "Matching Headings",
    "sentence-completion": "Sentence Completion"
};

function getoptionlabel(question, value) {
    if (question.type === "mcq") {
        const letter = String(value).trim().toUpperCase();
        const index = letter.charCodeAt(0) - 65;
        const option = question.options[index];

        if (option !== undefined) {
            return `${letter}. ${option}`;
        }
    }

    if (question.type === "matching-headings") {
        const headings = question.passage.headings || [];

        const heading = headings.find(item => {
            return String(item.id) === String(value);
        });

        if (heading) {
            return `${value}. ${heading.text}`;
        }
    }

    return value;
}

let currentquestion = 0;
let useranswers = {};
let sessionfinished = false;

const questionprev = document.querySelector(".question-prev");
const questionnext = document.querySelector(".question-next");

function renderquestion() {
    const question = sessionquestions[currentquestion];

    if (!question || sessionfinished || fullreading) {
        return;
    }

    const questionindex = currentquestion;

    currentpassage = sessionpages.indexOf(question.passage);

    const typename = typenames[question.type] || question.type;

    let instruction = "";

    if (question.instruction) {
        instruction = `
            <p class="question-instruction">
                ${escapetext(question.instruction)}
            </p>
        `;
    }

    let answerhtml = "";

    if (question.type === "sentence-completion") {
        answerhtml = `
            <input
                type="text"
                class="question-answer-input"
                placeholder="Type your answer"
                aria-label="Your answer"
                autocomplete="off"
            >
        `;
    } else {
        const optionshtml = question.options.map((option, index) => {
            let value = String(option);

            if (question.type === "mcq") {
                value = String.fromCharCode(65 + index);
            }

            const label = getoptionlabel(question, value);
            const id = `option-${questionindex}-${index}`;

            return `
                <div class="question-option">
                    <input
                        type="radio"
                        name="question"
                        id="${id}"
                        value="${escapetext(value)}"
                    >
                    <label for="${id}">
                        ${escapetext(label)}
                    </label>
                </div>
            `;
        }).join("");

        answerhtml = `
            <div class="question-options">
                ${optionshtml}
            </div>
        `;
    }

    questioncontent.innerHTML = `
        <span class="question-type">
            ${escapetext(typename.toUpperCase())}
        </span>
        ${instruction}
        <p class="question-text">
            ${escapetext(question.question)}
        </p>
        ${answerhtml}
    `;

    const savedanswer = useranswers[questionindex];

    if (question.type === "sentence-completion") {
        const input = questioncontent.querySelector(".question-answer-input");

        input.value = savedanswer || "";

        input.addEventListener("input", () => {
            if (sessionfinished) {
                return;
            }

            const answer = input.value.trim();

            if (answer) {
                useranswers[questionindex] = answer;
            } else {
                delete useranswers[questionindex];
            }

            updatenavigator();
        });
    } else {
        const inputs = questioncontent.querySelectorAll('input[type="radio"]');

        inputs.forEach(input => {
            input.checked = input.value === savedanswer;

            input.addEventListener("change", () => {
                if (sessionfinished) {
                    return;
                }

                useranswers[questionindex] = input.value;
                updatenavigator();
            });
        });
    }

    const number = String(currentquestion + 1).padStart(2, "0");
    const total = String(sessionquestions.length).padStart(2, "0");

    document.querySelector(".session-progress").textContent =
        `${number} / ${total}`;

    document.querySelector(".session-progress-info span").textContent =
        "QUESTION";

    document.querySelector(".question-heading-number").textContent = number;

    document.querySelector(".question-count").textContent =
        `${number} / ${total}`;

    questionprev.disabled = currentquestion === 0;
    questionnext.disabled = currentquestion === sessionquestions.length - 1;

    renderpassage();
    updatenavigator();
}

function rendernavigator() {
    const container = document.querySelector(".question-numbers");

    container.innerHTML = sessionquestions.map((question, index) => `
        <button
            type="button"
            class="question-number"
            data-question="${index}"
        >
            ${String(index + 1).padStart(2, "0")}
        </button>
    `).join("");

    container.querySelectorAll(".question-number").forEach(button => {
        button.addEventListener("click", () => {
            if (sessionfinished || fullreading) {
                return;
            }

            currentquestion = Number(button.dataset.question);
            renderquestion();
        });
    });

    updatenavigator();
}

function updatenavigator() {
    document.querySelectorAll(".question-number").forEach((button, index) => {
        button.classList.toggle("active", index === currentquestion);
        button.classList.toggle("answered", useranswers[index] !== undefined);
    });

    const answered = Object.keys(useranswers).length;

    document.querySelector(".navigator-status").textContent =
        `${answered} / ${sessionquestions.length} answered`;
}

const timelimit = mode === "full" ? 3600 : null;

let timerid = null;
let sessionstarttime = 0;

function formattime(seconds) {
    seconds = Math.max(0, Math.floor(seconds));

    const minutes = Math.floor(seconds / 60);
    const secondsleft = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secondsleft).padStart(2, "0")}`;
}

function gettimeused() {
    if (!sessionstarttime) {
        return 0;
    }

    const elapsed = Math.max(
        0,
        Math.floor((Date.now() - sessionstarttime) / 1000)
    );

    if (timelimit !== null) {
        return Math.min(elapsed, timelimit);
    }

    return elapsed;
}

function starttimer() {
    clearInterval(timerid);

    const timer = document.querySelector(".timer");

    if (timelimit === null) {
        timer.textContent = "No limit";
        return;
    }

    function updatetimer() {
        const remaining = timelimit - gettimeused();

        timer.textContent = formattime(remaining);

        if (remaining === 0) {
            submitsession();
        }
    }

    timerid = setInterval(updatetimer, 1000);
    updatetimer();
}

const submitbutton = document.querySelector(".submit-session");

function showquestions() {
    fullreading = false;

    setdisplay(".question-section", "");
    setdisplay(".question-navigator", "");
    setdisplay(".session-footer", "");

    questionprev.style.display = "";
    questionnext.style.display = "";

    const display = sessionpages.length > 1 ? "" : "none";

    passageprev.style.display = display;
    passagenext.style.display = display;

    document.querySelector(".question-heading h2").textContent =
        "Test your understanding";

    submitbutton.disabled = false;

    rendernavigator();
    renderquestion();
}

function startsession() {
    currentquestion = 0;
    currentpassage = 0;
    useranswers = {};
    sessionfinished = false;
    sessionstarttime = Date.now();

    showquestions();
    starttimer();
}

function startfullreading() {
    fullreading = true;
    currentpassage = 0;
    sessionstarttime = Date.now();

    setdisplay(".question-section", "none");
    setdisplay(".question-navigator", "none");
    setdisplay(".session-footer", "none");

    questionprev.style.display = "none";
    questionnext.style.display = "none";
    passageprev.style.display = "";
    passagenext.style.display = "";

    renderpassage();
    starttimer();
}

let selectedtype = null;

function preparetypesession(type) {
    const matchingpages = passages.filter(page => {
        return page.questions.some(question => {
            return question.type === type;
        });
    });

    if (matchingpages.length < 2) {
        window.alert(
            "This question type needs questions in at least two passages."
        );

        return;
    }

    selectedtype = type;
    sessionpages = shuffle(matchingpages).slice(0, 2);
    sessionquestions = [];

    sessionpages.forEach(page => {
        const questions = page.questions.filter(question => {
            return question.type === type;
        });

        addquestions(page, shuffle(questions));
    });

    setdisplay(".passage-heading", "");
    setdisplay(".passage-paper", "");

    startsession();
}

function showtypechoices() {
    setdisplay(".passage-heading", "none");
    setdisplay(".passage-paper", "none");
    setdisplay(".question-navigator", "none");
    setdisplay(".session-footer", "none");

    questionprev.style.display = "none";
    questionnext.style.display = "none";
    passageprev.style.display = "none";
    passagenext.style.display = "none";

    document.querySelector(".question-heading h2").textContent =
        "Choose a question type";

    document.querySelector(".session-progress-info span").textContent =
        "PRACTICE";

    document.querySelector(".session-progress").textContent = "";
    document.querySelector(".timer").textContent = "No limit";

    questioncontent.innerHTML = `
        <span class="question-type">READING PRACTICE</span>
        <p class="question-text">What would you like to practise?</p>
        <div class="question-options">
            ${Object.entries(typenames).map(([type, label]) => `
                <div class="question-option">
                    <input
                        type="radio"
                        name="questiontype"
                        id="type-${type}"
                        value="${type}"
                    >
                    <label for="type-${type}">
                        ${label}
                    </label>
                </div>
            `).join("")}
        </div>
    `;

    const inputs = questioncontent.querySelectorAll('input[name="questiontype"]');

    inputs.forEach(input => {
        input.addEventListener("change", () => {
            preparetypesession(input.value);

            if (selectedtype === null) {
                input.checked = false;
            }
        });
    });
}

function changepassage(direction) {
    if (sessionfinished || sessionpages.length === 0) {
        return;
    }

    const nextindex = currentpassage + direction;

    if (fullreading) {
        if (nextindex === sessionpages.length) {
            currentquestion = 0;
            showquestions();
        } else if (nextindex >= 0 && nextindex < sessionpages.length) {
            currentpassage = nextindex;
            renderpassage();
        }

        return;
    }

    const page = sessionpages[nextindex];

    if (!page) {
        return;
    }

    const questionindex = sessionquestions.findIndex(question => {
        return question.passage === page;
    });

    if (questionindex !== -1) {
        currentquestion = questionindex;
        renderquestion();
    }
}

function normalizeanswer(value) {
    return String(value ?? "")
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ");
}

function checkanswer(question, answer) {
    const cleanedanswer = normalizeanswer(answer);

    if (!cleanedanswer) {
        return false;
    }

    let correctanswers = [question.answer];

    if (
        question.type === "sentence-completion" &&
        Array.isArray(question.acceptedanswers)
    ) {
        correctanswers = [
            ...correctanswers,
            ...question.acceptedanswers
        ];
    }

    return correctanswers.some(correctanswer => {
        return normalizeanswer(correctanswer) === cleanedanswer;
    });
}

function readstorage(key, fallback) {
    try {
        const saved = localStorage.getItem(key);

        return saved ? JSON.parse(saved) : fallback;
    } catch {
        return fallback;
    }
}

function saveprogress(correct, accuracy) {
    const attempted = Object.keys(useranswers).length;
    const total = sessionquestions.length;

    let history = readstorage("readinghistory", []);

    if (!Array.isArray(history)) {
        history = [];
    }

    history.push({
        date: new Date().toISOString(),
        mode: mode,
        type: selectedtype,
        score: correct,
        total: total,
        accuracy: accuracy,
        questionsattempted: attempted
    });

    let progress = readstorage("readingprogress", {});

    if (!progress || typeof progress !== "object" || Array.isArray(progress)) {
        progress = {};
    }

    progress.questionsattempted =
        (Number(progress.questionsattempted) || 0) + attempted;

    progress.totalcorrect =
        (Number(progress.totalcorrect) || 0) + correct;

    progress.accuracy = 0;

    if (progress.questionsattempted > 0) {
        progress.accuracy = Math.round(
            (progress.totalcorrect / progress.questionsattempted) * 100
        );
    }

    progress.bestscore = Number(progress.bestscore) || 0;
    progress.besttotal = Number(progress.besttotal) || 0;

    const bestaccuracy = progress.besttotal > 0
        ? progress.bestscore / progress.besttotal
        : -1;

    const currentaccuracy = correct / total;

    if (
        currentaccuracy > bestaccuracy ||
        (currentaccuracy === bestaccuracy && total > progress.besttotal)
    ) {
        progress.bestscore = correct;
        progress.besttotal = total;
    }

    try {
        localStorage.setItem("readinghistory", JSON.stringify(history));
        localStorage.setItem("readingprogress", JSON.stringify(progress));
    } catch {
        window.alert("Your result is ready, but your progress could not be saved.");
    }
}

function submitsession() {
    if (
        sessionfinished ||
        sessionquestions.length === 0 ||
        !sessionstarttime
    ) {
        return;
    }

    sessionfinished = true;
    clearInterval(timerid);

    let correct = 0;

    sessionquestions.forEach((question, index) => {
        if (checkanswer(question, useranswers[index])) {
            correct++;
        }
    });

    const total = sessionquestions.length;
    const accuracy = Math.round((correct / total) * 100);

    document.querySelector(".result-correct").textContent = correct;
    document.querySelector(".result-total").textContent = total;
    document.querySelector(".result-accuracy").textContent = `${accuracy}%`;
    document.querySelector(".result-time").textContent = formattime(gettimeused());

    document.querySelector(".result-questions").innerHTML =
        sessionquestions.map((question, index) => {
            const answer = useranswers[index];
            const iscorrect = checkanswer(question, answer);

            let status = "Not answered";
            let youranswer = "Not answered";

            if (answer !== undefined) {
                status = iscorrect ? "Correct" : "Incorrect";
                youranswer = getoptionlabel(question, answer);
            }

            const correctanswer = getoptionlabel(question, question.answer);

            return `
                <div class="result-question">
                    <div class="result-question-top">
                        <span class="result-question-number">
                            ${String(index + 1).padStart(2, "0")}
                        </span>
                        <span class="result-question-status ${iscorrect ? "correct" : "wrong"}">
                            ${status}
                        </span>
                    </div>

                    <p class="result-question-text">
                        ${escapetext(question.question)}
                    </p>

                    <div class="result-answer">
                        <div class="answer-box">
                            <span>YOUR ANSWER</span>
                            <strong>${escapetext(youranswer)}</strong>
                        </div>
                        <div class="answer-box">
                            <span>CORRECT ANSWER</span>
                            <strong>${escapetext(correctanswer)}</strong>
                        </div>
                    </div>

                    <div class="result-explanation">
                        ${escapetext(question.explanation)}
                    </div>
                </div>
            `;
        }).join("");

    setdisplay(".reading-session", "none");
    setdisplay(".reading-result", "block");

    saveprogress(correct, accuracy);

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

passagenext.addEventListener("click", () => {
    changepassage(1);
});

passageprev.addEventListener("click", () => {
    changepassage(-1);
});

questionnext.addEventListener("click", () => {
    if (
        sessionfinished ||
        fullreading ||
        currentquestion >= sessionquestions.length - 1
    ) {
        return;
    }

    currentquestion++;
    renderquestion();
});

questionprev.addEventListener("click", () => {
    if (sessionfinished || fullreading || currentquestion === 0) {
        return;
    }

    currentquestion--;
    renderquestion();
});

submitbutton.addEventListener("click", submitsession);

document.querySelector(".practice-again").addEventListener("click", () => {
    window.location.reload();
});

document.querySelector(".result-back").addEventListener("click", () => {
    window.location.href = "reading.html";
});

if (mode === "types") {
    showtypechoices();
} else if (mode === "quick") {
    if (preparequick()) {
        startsession();
    }
} else {
    if (preparefull()) {
        startfullreading();
    }
}