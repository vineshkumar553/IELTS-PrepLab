const urlparams = new URLSearchParams(window.location.search);
let mode = urlparams.get("mode");

if (!["quick", "full", "types"].includes(mode)) {
    mode = "quick";
}

const passages = readingdata.filter(page => {
    return Array.isArray(page.questions) && page.questions.length > 0;
});

function shuffle(items) {
    const shuffled = [...items];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const random = Math.floor(Math.random() * (i + 1));
        const item = shuffled[i];

        shuffled[i] = shuffled[random];
        shuffled[random] = item;
    }

    return shuffled;
}

function escapetext(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#39;");
}

function showmessage(message) {
    const content = document.querySelector(".question-content");
    content.textContent = message;

    const buttons = document.querySelectorAll(
        ".question-prev, .question-next, .passage-prev, .passage-next, .submit-session"
    );

    buttons.forEach(button => {
        button.disabled = true;
    });
}

let sessionpages = [];
let sessionquestions = [];

function addquestions(page, questions) {
    questions.forEach(question => {
        sessionquestions.push({ ...question, passage: page });
    });
}

function preparequick() {
    const available = passages.filter(page => {
        return page.questions.length >= 10;
    });

    if (available.length === 0) {
        showmessage("Quick practice needs a passage with at least 10 questions");
        return false;
    }

    const page = shuffle(available)[0];
    sessionpages = [page];
    sessionquestions = [];

    addquestions(page, shuffle(page.questions).slice(0, 10));
    return true;
}

function preparefull() {
    const available = passages.filter(page => {
        return page.questions.length >= 13;
    });

    const longerpages = available.filter(page => {
        return page.questions.length >= 14;
    });

    if (available.length < 3 || longerpages.length === 0) {
        showmessage("A full test needs two passages with 13 questions and one with 14");
        return false;
    }

    const longerpage = shuffle(longerpages)[0];
    const otherpages = available.filter(page => {
        return page !== longerpage;
    });

    sessionpages = shuffle([longerpage, ...shuffle(otherpages).slice(0, 2)]);
    sessionquestions = [];

    sessionpages.forEach(page => {
        const count = page === longerpage ? 14 : 13;
        addquestions(page, shuffle(page.questions).slice(0, count));
    });

    return true;
}

let currentpassage = 0;

function showpassage() {
    const page = sessionpages[currentpassage];
    const number = String(currentpassage + 1).padStart(2, "0");
    const total = String(sessionpages.length).padStart(2, "0");

    const label = document.querySelector(".passage-label");
    label.textContent = `PASSAGE ${number}`;

    if (sessionpages.length > 1) {
        label.textContent += ` OF ${total}`;
    }

    const title = document.querySelector(".passage-title");
    title.textContent = page.title;

    const topic = document.querySelector(".passage-topic");
    topic.textContent = page.topic;

    const difficulty = document.querySelector(".passage-difficulty");
    difficulty.textContent = page.difficulty;

    const bottomlabel = document.querySelector(".paper-bottom span:last-child");
    bottomlabel.textContent = `PASSAGE ${number}`;

    const content = document.querySelector(".passage-content");
    content.innerHTML = page.paragraphs.map(paragraph => `
        <p>
            <span class="paragraph-label">${escapetext(paragraph.id)}</span>
            ${escapetext(paragraph.text)}
        </p>
    `).join("");

    const previous = document.querySelector(".passage-prev");
    previous.disabled = currentpassage === 0;
    previous.style.display = sessionpages.length > 1 ? "" : "none";
    previous.innerHTML = '<i class="fa-solid fa-arrow-left"></i> Previous Passage';

    const next = document.querySelector(".passage-next");
    next.disabled = currentpassage === sessionpages.length - 1;
    next.style.display = sessionpages.length > 1 ? "" : "none";
    next.innerHTML = 'Next Passage <i class="fa-solid fa-arrow-right"></i>';
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
        const option = question.options[letter.charCodeAt(0) - 65];

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

function makequestion(question, index) {
    const number = String(index + 1).padStart(2, "0");
    const typename = typenames[question.type] || question.type;
    let instruction = "";

    if (question.instruction) {
        instruction = `<p class="question-instruction">${escapetext(question.instruction)}</p>`;
    }

    let answers = "";

    if (question.type === "sentence-completion") {
        answers = `
            <input type="text" class="question-answer-input"
                placeholder="Type your answer" aria-label="Answer to question ${number}"
                autocomplete="off">
        `;
    } else {
        const options = question.options.map((option, optionindex) => {
            let value = String(option);

            if (question.type === "mcq") {
                value = String.fromCharCode(65 + optionindex);
            }

            const id = `option-${index}-${optionindex}`;
            const label = getoptionlabel(question, value);

            return `
                <div class="question-option">
                    <input type="radio" name="question-${index}" id="${id}"
                        value="${escapetext(value)}">
                    <label for="${id}">${escapetext(label)}</label>
                </div>
            `;
        }).join("");

        answers = `<div class="question-options">${options}</div>`;
    }

    return `
        <div class="session-question" id="question-${index}" data-question="${index}">
            <span class="question-type">${number} · ${escapetext(typename.toUpperCase())}</span>
            ${instruction}
            <p class="question-text">${escapetext(question.question)}</p>
            ${answers}
        </div>
    `;
}

let currentquestion = 0;
let useranswers = {};
let sessionfinished = false;

function showquestions() {
    if (sessionfinished || sessionquestions.length === 0) {
        return;
    }

    const question = sessionquestions[currentquestion];
    currentpassage = sessionpages.indexOf(question.passage);

    let indexes = [currentquestion];

    if (mode === "full") {
        indexes = [];

        sessionquestions.forEach((item, index) => {
            if (item.passage === sessionpages[currentpassage]) {
                indexes.push(index);
            }
        });
    }

    const content = document.querySelector(".question-content");
    content.innerHTML = indexes.map(index => {
        return makequestion(sessionquestions[index], index);
    }).join("");

    content.querySelectorAll(".session-question").forEach(box => {
        const index = Number(box.dataset.question);

        if (mode === "full") {
            box.style.marginBottom = "28px";
        }

        box.querySelectorAll("input").forEach(input => {
            let event = "input";

            if (input.type === "radio") {
                input.checked = input.value === useranswers[index];
                event = "change";
            } else {
                input.value = useranswers[index] || "";
            }

            input.addEventListener(event, () => {
                if (sessionfinished) {
                    return;
                }

                const answer = input.value.trim();

                if (answer) {
                    useranswers[index] = answer;
                } else {
                    delete useranswers[index];
                }

                currentquestion = index;
                updatenavigator();
            });
        });
    });

    const first = String(indexes[0] + 1).padStart(2, "0");
    const last = String(indexes[indexes.length - 1] + 1).padStart(2, "0");
    const total = String(sessionquestions.length).padStart(2, "0");
    let numbers = first;

    if (mode === "full") {
        numbers = `${first}–${last}`;
    }

    const headingnumber = document.querySelector(".question-heading-number");
    headingnumber.textContent = numbers;

    const count = document.querySelector(".question-count");
    count.textContent = `${numbers} / ${total}`;

    const progresslabel = document.querySelector(".session-progress-info span");
    progresslabel.textContent = mode === "full" ? "PASSAGE" : "QUESTION";

    const progress = document.querySelector(".session-progress");
    progress.textContent = `${first} / ${total}`;

    if (mode === "full") {
        progress.textContent = `0${currentpassage + 1} / 0${sessionpages.length}`;
    }

    const previous = document.querySelector(".question-prev");
    previous.disabled = currentquestion === 0;
    previous.style.display = mode === "full" ? "none" : "";

    const next = document.querySelector(".question-next");
    next.disabled = currentquestion === sessionquestions.length - 1;
    next.style.display = mode === "full" ? "none" : "";

    showpassage();
    updatenavigator();
}

function updatenavigator() {
    const buttons = document.querySelectorAll(".question-number");

    buttons.forEach((button, index) => {
        button.classList.toggle("active", index === currentquestion);
        button.classList.toggle("answered", useranswers[index] !== undefined);
    });

    const status = document.querySelector(".navigator-status");
    status.textContent = `${Object.keys(useranswers).length} / ${sessionquestions.length} answered`;
}

function shownavigator() {
    const container = document.querySelector(".question-numbers");
    container.innerHTML = sessionquestions.map((question, index) => `
        <button type="button" class="question-number" data-question="${index}">
            ${String(index + 1).padStart(2, "0")}
        </button>
    `).join("");

    container.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", () => {
            if (sessionfinished) {
                return;
            }

            currentquestion = Number(button.dataset.question);
            showquestions();

            if (mode === "full") {
                const question = document.getElementById(`question-${currentquestion}`);
                question.scrollIntoView({ behavior: "smooth", block: "nearest" });
            }
        });
    });
}

function changepassage(direction) {
    if (sessionfinished) {
        return;
    }

    const page = sessionpages[currentpassage + direction];

    if (!page) {
        return;
    }

    currentquestion = sessionquestions.findIndex(question => {
        return question.passage === page;
    });

    showquestions();
}

let timerid = null;
let sessionstarttime = 0;

function formattime(seconds) {
    seconds = Math.max(0, Math.floor(seconds));

    const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
    const remaining = String(seconds % 60).padStart(2, "0");

    return `${minutes}:${remaining}`;
}

function gettimeused() {
    const seconds = Math.max(0, Math.floor((Date.now() - sessionstarttime) / 1000));
    return mode === "full" ? Math.min(seconds, 3600) : seconds;
}

function starttimer() {
    clearInterval(timerid);

    const timer = document.querySelector(".timer");
    timer.textContent = "No limit";

    if (mode !== "full") {
        return;
    }

    timer.textContent = "60:00";

    timerid = setInterval(() => {
        const remaining = 3600 - gettimeused();
        timer.textContent = formattime(remaining);

        if (remaining === 0) {
            submitsession();
        }
    }, 1000);
}

function startsession() {
    currentquestion = 0;
    currentpassage = 0;
    useranswers = {};
    sessionfinished = false;
    sessionstarttime = Date.now();

    const heading = document.querySelector(".passage-heading");
    heading.style.display = "";

    const paper = document.querySelector(".passage-paper");
    paper.style.display = "";

    const questions = document.querySelector(".question-section");
    questions.style.display = "";

    const title = document.querySelector(".question-heading h2");
    title.textContent = mode === "full" ? "Questions for this passage" : "Test your understanding";

    const navigator = document.querySelector(".question-navigator");
    navigator.style.display = "";

    const footer = document.querySelector(".session-footer");
    footer.style.display = "";

    const submit = document.querySelector(".submit-session");
    submit.disabled = false;

    shownavigator();
    showquestions();
    starttimer();
}

let selectedtype = null;

function preparetypesession(type) {
    const available = passages.filter(page => {
        return page.questions.some(question => question.type === type);
    });

    if (available.length < 2) {
        window.alert("This type needs questions in at least two passages");
        return;
    }

    selectedtype = type;
    sessionpages = shuffle(available).slice(0, 2);
    sessionquestions = [];

    sessionpages.forEach(page => {
        const questions = page.questions.filter(question => question.type === type);
        addquestions(page, shuffle(questions));
    });

    startsession();
}

function showtypechoices() {
    const hidden = document.querySelectorAll(
        ".passage-heading, .passage-paper, .question-navigator, .session-footer, .question-prev, .question-next, .passage-prev, .passage-next"
    );

    hidden.forEach(element => {
        element.style.display = "none";
    });

    const heading = document.querySelector(".question-heading h2");
    heading.textContent = "Choose a question type";

    const label = document.querySelector(".session-progress-info span");
    label.textContent = "PRACTICE";

    const progress = document.querySelector(".session-progress");
    progress.textContent = "";

    const timer = document.querySelector(".timer");
    timer.textContent = "No limit";

    const content = document.querySelector(".question-content");
    content.innerHTML = `
        <span class="question-type">READING PRACTICE</span>
        <p class="question-text">What would you like to practise?</p>
        <div class="question-options">
            ${Object.entries(typenames).map(([type, name]) => `
                <div class="question-option">
                    <input type="radio" name="questiontype" id="type-${type}" value="${type}">
                    <label for="type-${type}">${name}</label>
                </div>
            `).join("")}
        </div>
    `;

    content.querySelectorAll("input").forEach(input => {
        input.addEventListener("change", () => {
            preparetypesession(input.value);

            if (selectedtype === null) {
                input.checked = false;
            }
        });
    });
}

function normalizeanswer(value) {
    return String(value ?? "").trim().toLowerCase().replace(/\s+/g, " ");
}

function checkanswer(question, answer) {
    const cleaned = normalizeanswer(answer);

    if (!cleaned) {
        return false;
    }

    let answers = [question.answer];

    if (question.type === "sentence-completion" && Array.isArray(question.acceptedanswers)) {
        answers = [...answers, ...question.acceptedanswers];
    }

    return answers.some(value => normalizeanswer(value) === cleaned);
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

    progress.questionsattempted = (Number(progress.questionsattempted) || 0) + attempted;
    progress.totalcorrect = (Number(progress.totalcorrect) || 0) + correct;
    progress.accuracy = 0;

    if (progress.questionsattempted > 0) {
        progress.accuracy = Math.round(progress.totalcorrect / progress.questionsattempted * 100);
    }

    progress.bestscore = Number(progress.bestscore) || 0;
    progress.besttotal = Number(progress.besttotal) || 0;

    const best = progress.besttotal > 0 ? progress.bestscore / progress.besttotal : -1;
    const current = correct / total;

    if (current > best || (current === best && total > progress.besttotal)) {
        progress.bestscore = correct;
        progress.besttotal = total;
    }

    try {
        localStorage.setItem("readinghistory", JSON.stringify(history));
        localStorage.setItem("readingprogress", JSON.stringify(progress));
    } catch {
        window.alert("Your result is ready, but your progress could not be saved");
    }
}

function submitsession() {
    if (sessionfinished || sessionquestions.length === 0 || !sessionstarttime) {
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
    const accuracy = Math.round(correct / total * 100);

    const resultcorrect = document.querySelector(".result-correct");
    resultcorrect.textContent = correct;

    const resulttotal = document.querySelector(".result-total");
    resulttotal.textContent = total;

    const resultaccuracy = document.querySelector(".result-accuracy");
    resultaccuracy.textContent = `${accuracy}%`;

    const resulttime = document.querySelector(".result-time");
    resulttime.textContent = formattime(gettimeused());

    const results = document.querySelector(".result-questions");
    results.innerHTML = sessionquestions.map((question, index) => {
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
                    <span class="result-question-number">${String(index + 1).padStart(2, "0")}</span>
                    <span class="result-question-status ${iscorrect ? "correct" : "wrong"}">${status}</span>
                </div>
                <p class="result-question-text">${escapetext(question.question)}</p>
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
                <div class="result-explanation">${escapetext(question.explanation)}</div>
            </div>
        `;
    }).join("");

    const session = document.querySelector(".reading-session");
    session.style.display = "none";

    const result = document.querySelector(".reading-result");
    result.style.display = "block";

    saveprogress(correct, accuracy);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const passagenext = document.querySelector(".passage-next");
passagenext.addEventListener("click", () => {
    changepassage(1);
});

const passageprev = document.querySelector(".passage-prev");
passageprev.addEventListener("click", () => {
    changepassage(-1);
});

const questionnext = document.querySelector(".question-next");
questionnext.addEventListener("click", () => {
    if (sessionfinished || mode === "full" || currentquestion >= sessionquestions.length - 1) {
        return;
    }

    currentquestion++;
    showquestions();
});

const questionprev = document.querySelector(".question-prev");
questionprev.addEventListener("click", () => {
    if (sessionfinished || mode === "full" || currentquestion === 0) {
        return;
    }

    currentquestion--;
    showquestions();
});

const submit = document.querySelector(".submit-session");
submit.addEventListener("click", submitsession);

const again = document.querySelector(".practice-again");
again.addEventListener("click", () => {
    window.location.reload();
});

const back = document.querySelector(".result-back");
back.addEventListener("click", () => {
    window.location.href = "reading.html";
});

if (mode === "types") {
    showtypechoices();
} else if (mode === "full") {
    if (preparefull()) {
        startsession();
    }
} else if (preparequick()) {
    startsession();
}