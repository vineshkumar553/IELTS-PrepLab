const urlparams = new URLSearchParams(window.location.search);
const mode = urlparams.get("mode");

const sessionconfig = {
    quick: {
        questioncount: 10,
        timelimit: null
    },

    full: {
        questioncount: 40,
        timelimit: 3600
    },

    types: {
        questioncount: 0,
        timelimit: null
    }
};

const currentconfig = sessionconfig[mode];

let sessionpages = [];
let sessionquestions = [];
let currentquestion = 0;
let useranswers = {};
let selectedtype = null;
let timerid = null;
let remainingtime = currentconfig.timelimit;
let sessionstarttime = 0;
let sessionfinished = false;


if (mode === "quick") {

    const randomindex = Math.floor(
        Math.random() * readingdata.length
    );

    sessionpages = [
        readingdata[randomindex]
    ];

    const questions = [
        ...sessionpages[0].questions
    ]
        .sort(() => Math.random() - 0.5)
        .slice(
            0,
            currentconfig.questioncount
        );

    sessionquestions = questions.map(question => ({
        ...question,
        passage: sessionpages[0]
    }));

}


if (mode === "full") {

    sessionpages = readingdata;

    sessionquestions = sessionpages
        .flatMap(page =>
            page.questions.map(question => ({
                ...question,
                passage: page
            }))
        )
        .slice(
            0,
            currentconfig.questioncount
        );
}


const questioncontent = document.querySelector(
    ".question-content"
);

const questionnext = document.querySelector(
    ".question-next"
);

const questionprev = document.querySelector(
    ".question-prev"
);


function formattime(seconds) {

    const minutes = Math.floor(seconds / 60);
    const secondsleft = seconds % 60;

    return `${String(minutes).padStart(2, "0")}:${String(secondsleft).padStart(2, "0")}`;
}


function renderpassage() {

    const currentdata =
        sessionquestions[currentquestion];

    const currentpage =
        currentdata.passage;

    const pageindex =
        readingdata.findIndex(
            page => page.id === currentpage.id
        ) + 1;

    document.querySelector(
        ".passage-label"
    ).textContent =
        `PASSAGE ${String(pageindex).padStart(2, "0")}`;

    document.querySelector(
        ".passage-title"
    ).textContent =
        currentpage.title;

    document.querySelector(
        ".passage-topic"
    ).textContent =
        currentpage.topic;

    document.querySelector(
        ".passage-difficulty"
    ).textContent =
        currentpage.difficulty;

    document.querySelector(
        ".passage-content"
    ).innerHTML =
        currentpage.paragraphs.map(paragraph => `
            <p>
                <span class="paragraph-label">
                    ${paragraph.id}
                </span>
                ${paragraph.text}
            </p>
        `).join("");

    const papertop =
        document.querySelector(
            ".paper-top span:last-child"
        );

    const paperbottom =
        document.querySelector(
            ".paper-bottom span:last-child"
        );

    if (papertop) {
        papertop.textContent =
            String(pageindex).padStart(2, "0");
    }

    if (paperbottom) {
        paperbottom.textContent =
            `PASSAGE ${String(pageindex).padStart(2, "0")}`;
    }
}


function renderquestion() {

    const currentdata =
        sessionquestions[currentquestion];

    if (!currentdata) {
        return;
    }

    let optionshtml = "";

    if (currentdata.type !== "sentence-completion") {

        optionshtml = currentdata.options
            .map((option, index) => {

                let value = option;
                let label = option;

                if (currentdata.type === "mcq") {

                    value =
                        String.fromCharCode(65 + index);

                    label =
                        `${value}. ${option}`;
                }

                if (
                    currentdata.type ===
                    "matching-headings"
                ) {

                    const heading =
                        currentdata.passage.headings.find(
                            item => item.id === option
                        );

                    if (heading) {
                        label =
                            `${option}. ${heading.text}`;
                    }
                }

                return `
                    <div class="question-option">

                        <input
                            type="radio"
                            name="question"
                            id="option-${currentdata.id}-${index}"
                            value="${value}"
                        >

                        <label
                            for="option-${currentdata.id}-${index}"
                        >
                            ${label}
                        </label>

                    </div>
                `;
            })
            .join("");
    }

    let instructionhtml = "";

    if (currentdata.instruction) {

        instructionhtml = `
            <p class="question-instruction">
                ${currentdata.instruction}
            </p>
        `;
    }


    if (
        currentdata.type ===
        "sentence-completion"
    ) {

        questioncontent.innerHTML = `
            <span class="question-type">
                SENTENCE COMPLETION
            </span>

            ${instructionhtml}

            <p class="question-text">
                ${currentdata.question}
            </p>

            <input
                type="text"
                class="question-answer-input"
                placeholder="Type your answer"
                autocomplete="off"
            >
        `;

        const input =
            questioncontent.querySelector(
                ".question-answer-input"
            );

        if (useranswers[currentdata.id]) {

            input.value =
                useranswers[currentdata.id];
        }

        input.addEventListener(
            "input",
            () => {

                if (input.value.trim()) {

                    useranswers[currentdata.id] =
                        input.value.trim();

                } else {

                    delete useranswers[currentdata.id];
                }

                updatenavigator();
            }
        );

    } else {

        let typetext = currentdata.type;

        if (currentdata.type === "mcq") {
            typetext = "MULTIPLE CHOICE";
        }

        if (currentdata.type === "tfng") {
            typetext =
                "TRUE / FALSE / NOT GIVEN";
        }

        if (
            currentdata.type ===
            "matching-headings"
        ) {
            typetext = "MATCHING HEADINGS";
        }

        questioncontent.innerHTML = `
            <span class="question-type">
                ${typetext}
            </span>

            ${instructionhtml}

            <p class="question-text">
                ${currentdata.question}
            </p>

            <div class="question-options">
                ${optionshtml}
            </div>
        `;

        const savedanswer =
            useranswers[currentdata.id];

        questioncontent
            .querySelectorAll(
                'input[type="radio"]'
            )
            .forEach(input => {

                if (
                    input.value ===
                    savedanswer
                ) {
                    input.checked = true;
                }

                input.addEventListener(
                    "change",
                    () => {

                        useranswers[currentdata.id] =
                            input.value;

                        updatenavigator();
                    }
                );
            });
    }


    const questionnumber =
        currentquestion + 1;

    document.querySelector(
        ".question-heading-number"
    ).textContent =
        String(questionnumber).padStart(2, "0");

    document.querySelector(
        ".question-count"
    ).textContent =
        `${String(questionnumber).padStart(2, "0")} / ${String(sessionquestions.length).padStart(2, "0")}`;

    document.querySelector(
        ".session-progress"
    ).textContent =
        `${String(questionnumber).padStart(2, "0")} / ${String(sessionquestions.length).padStart(2, "0")}`;

    questionprev.disabled =
        currentquestion === 0;

    questionnext.disabled =
        currentquestion ===
        sessionquestions.length - 1;

    renderpassage();
    updatenavigator();
}


function rendernavigator() {

    const questionnumbers =
        document.querySelector(
            ".question-numbers"
        );

    questionnumbers.innerHTML =
        sessionquestions.map(
            (question, index) => `
                <button
                    type="button"
                    class="question-number"
                    data-question="${index}"
                >
                    ${String(index + 1).padStart(2, "0")}
                </button>
            `
        ).join("");

    questionnumbers
        .querySelectorAll(
            ".question-number"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    currentquestion =
                        Number(
                            button.dataset.question
                        );

                    renderquestion();
                }
            );
        });

    updatenavigator();
}


function updatenavigator() {

    const buttons =
        document.querySelectorAll(
            ".question-number"
        );

    buttons.forEach((button, index) => {

        const question =
            sessionquestions[index];

        button.classList.toggle(
            "active",
            index === currentquestion
        );

        button.classList.toggle(
            "answered",
            useranswers[question.id] !== undefined
        );
    });

    document.querySelector(
        ".navigator-status"
    ).textContent =
        `${Object.keys(useranswers).length} / ${sessionquestions.length} answered`;
}


function starttimer() {

    const timer =
        document.querySelector(".timer");

    clearInterval(timerid);

    if (
        currentconfig.timelimit ===
        null
    ) {

        timer.textContent =
            "No limit";

        return;
    }

    remainingtime =
        currentconfig.timelimit;

    timer.textContent =
        formattime(remainingtime);

    timerid =
        setInterval(() => {

            remainingtime--;

            timer.textContent =
                formattime(remainingtime);

            if (remainingtime <= 0) {

                clearInterval(timerid);

                submitsession();
            }

        }, 1000);
}


function startsession() {

    sessionstarttime =
        Date.now();

    starttimer();
    rendernavigator();
    renderquestion();
}


function preparetypesession(type) {

    selectedtype = type;

    sessionpages =
        readingdata.filter(page =>
            page.questions.some(
                question =>
                    question.type === type
            )
        );

    const questions =
        readingdata.flatMap(page =>
            page.questions
                .filter(
                    question =>
                        question.type === type
                )
                .map(question => ({
                    ...question,
                    passage: page
                }))
        );

    sessionquestions =
        [...questions]
            .sort(
                () => Math.random() - 0.5
            );

    currentquestion = 0;
    useranswers = {};
    sessionfinished = false;

    document.querySelector(
        ".passage-heading"
    ).style.display = "";

    document.querySelector(
        ".passage-paper"
    ).style.display = "";

    document.querySelector(
        ".question-navigator"
    ).style.display = "";

    document.querySelector(
        ".session-footer"
    ).style.display = "";

    questionprev.style.display = "";
    questionnext.style.display = "";

    document.querySelector(
        ".question-heading h2"
    ).textContent =
        "Test your understanding";

    startsession();
}


if (mode === "types") {

    document.querySelector(
        ".passage-heading"
    ).style.display = "none";

    document.querySelector(
        ".passage-paper"
    ).style.display = "none";

    document.querySelector(
        ".question-navigator"
    ).style.display = "none";

    document.querySelector(
        ".session-footer"
    ).style.display = "none";

    questionprev.style.display = "none";
    questionnext.style.display = "none";

    document.querySelector(
        ".question-heading h2"
    ).textContent =
        "Choose a question type";

    questioncontent.innerHTML = `

        <span class="question-type">
            READING PRACTICE
        </span>

        <p class="question-text">
            What would you like to practise?
        </p>

        <div class="question-options">

            <div class="question-option">
                <input
                    type="radio"
                    name="questiontype"
                    id="type-mcq"
                    value="mcq"
                >

                <label for="type-mcq">
                    Multiple Choice
                </label>
            </div>

            <div class="question-option">
                <input
                    type="radio"
                    name="questiontype"
                    id="type-tfng"
                    value="tfng"
                >

                <label for="type-tfng">
                    True / False / Not Given
                </label>
            </div>

            <div class="question-option">
                <input
                    type="radio"
                    name="questiontype"
                    id="type-headings"
                    value="matching-headings"
                >

                <label for="type-headings">
                    Matching Headings
                </label>
            </div>

            <div class="question-option">
                <input
                    type="radio"
                    name="questiontype"
                    id="type-completion"
                    value="sentence-completion"
                >

                <label for="type-completion">
                    Sentence Completion
                </label>
            </div>

        </div>
    `;

    questioncontent
        .querySelectorAll(
            'input[name="questiontype"]'
        )
        .forEach(input => {

            input.addEventListener(
                "change",
                () => {

                    preparetypesession(
                        input.value
                    );
                }
            );
        });

} else {

    startsession();
}


questionnext.addEventListener(
    "click",
    () => {

        if (
            currentquestion <
            sessionquestions.length - 1
        ) {

            currentquestion++;

            renderquestion();
        }
    }
);


questionprev.addEventListener(
    "click",
    () => {

        if (currentquestion > 0) {

            currentquestion--;

            renderquestion();
        }
    }
);


document.querySelector(
    ".submit-session"
).addEventListener(
    "click",
    submitsession
);


function submitsession() {

    if (sessionfinished) {
        return;
    }

    sessionfinished = true;

    clearInterval(timerid);

    let correct = 0;

    sessionquestions.forEach(
        question => {

            const answer =
                useranswers[question.id];

            if (!answer) {
                return;
            }

            if (
                question.type ===
                "sentence-completion"
            ) {

                const answers =
                    question.acceptedanswers ||
                    [question.answer];

                const match =
                    answers.some(
                        correctanswer =>
                            correctanswer
                                .trim()
                                .toLowerCase() ===
                            answer
                                .trim()
                                .toLowerCase()
                    );

                if (match) {
                    correct++;
                }

            } else {

                if (
                    question.answer
                        .toLowerCase() ===
                    answer.toLowerCase()
                ) {
                    correct++;
                }
            }
        }
    );

    let timeused =
        Math.floor(
            (Date.now() - sessionstarttime) /
            1000
        );

    if (
        currentconfig.timelimit !==
        null
    ) {

        timeused =
            currentconfig.timelimit -
            remainingtime;
    }

    const accuracy =
        Math.round(
            (correct /
                sessionquestions.length) *
            100
        );

    document.querySelector(
        ".result-correct"
    ).textContent =
        correct;

    document.querySelector(
        ".result-total"
    ).textContent =
        sessionquestions.length;

    document.querySelector(
        ".result-accuracy"
    ).textContent =
        `${accuracy}%`;

    document.querySelector(
        ".result-time"
    ).textContent =
        formattime(
            Math.max(0, timeused)
        );


    document.querySelector(
        ".result-questions"
    ).innerHTML =
        sessionquestions.map(
            question => {

                const answer =
                    useranswers[question.id];

                let correctanswer =
                    question.answer;

                let youranswer =
                    answer ||
                    "Not answered";

                if (
                    question.type === "mcq"
                ) {

                    if (answer) {

                        const index =
                            answer.charCodeAt(0) -
                            65;

                        youranswer =
                            question.options[index] ||
                            answer;
                    }

                    const correctindex =
                        question.answer
                            .charCodeAt(0) -
                        65;

                    correctanswer =
                        question.options[
                            correctindex
                        ] ||
                        question.answer;
                }


                if (
                    question.type ===
                    "matching-headings"
                ) {

                    const yourheading =
                        question.passage.headings.find(
                            item =>
                                item.id ===
                                answer
                        );

                    const correctheading =
                        question.passage.headings.find(
                            item =>
                                item.id ===
                                question.answer
                        );

                    if (yourheading) {
                        youranswer =
                            `${answer}. ${yourheading.text}`;
                    }

                    if (correctheading) {
                        correctanswer =
                            `${question.answer}. ${correctheading.text}`;
                    }
                }


                let iscorrect = false;

                if (answer) {

                    if (
                        question.type ===
                        "sentence-completion"
                    ) {

                        const answers =
                            question.acceptedanswers ||
                            [question.answer];

                        iscorrect =
                            answers.some(
                                correctanswer =>
                                    correctanswer
                                        .trim()
                                        .toLowerCase() ===
                                    answer
                                        .trim()
                                        .toLowerCase()
                            );

                    } else {

                        iscorrect =
                            question.answer
                                .toLowerCase() ===
                            answer.toLowerCase();
                    }
                }


                return `
                    <div class="result-question">

                        <div class="result-question-top">

                            <span class="result-question-number">
                                ${String(
                                    question.id
                                ).padStart(2, "0")}
                            </span>

                            <span
                                class="result-question-status ${
                                    iscorrect
                                        ? "correct"
                                        : "wrong"
                                }"
                            >
                                ${
                                    answer
                                        ? iscorrect
                                            ? "Correct"
                                            : "Incorrect"
                                        : "Not answered"
                                }
                            </span>

                        </div>

                        <p class="result-question-text">
                            ${question.question}
                        </p>

                        <div class="result-answer">

                            <div class="answer-box">

                                <span>
                                    YOUR ANSWER
                                </span>

                                <strong>
                                    ${youranswer}
                                </strong>

                            </div>

                            <div class="answer-box">

                                <span>
                                    CORRECT ANSWER
                                </span>

                                <strong>
                                    ${correctanswer}
                                </strong>

                            </div>

                        </div>

                        <div class="result-explanation">
                            ${question.explanation}
                        </div>

                    </div>
                `;
            }
        ).join("");


    const history =
        JSON.parse(
            localStorage.getItem(
                "readinghistory"
            ) || "[]"
        );

    history.push({
        date: new Date().toISOString(),
        mode: mode,
        type: selectedtype,
        score: correct,
        total: sessionquestions.length,
        accuracy: accuracy,
        questionsattempted:
            Object.keys(useranswers).length
    });

    localStorage.setItem(
        "readinghistory",
        JSON.stringify(history)
    );


    const progress =
        JSON.parse(
            localStorage.getItem(
                "readingprogress"
            ) || "null"
        ) || {
            questionsattempted: 0,
            totalcorrect: 0,
            accuracy: 0,
            bestscore: 0,
            besttotal: 0
        };

    progress.questionsattempted +=
        Object.keys(useranswers).length;

    progress.totalcorrect +=
        correct;

    progress.accuracy =
        Math.round(
            (
                progress.totalcorrect /
                progress.questionsattempted
            ) * 100
        );

    if (
        correct >
        progress.bestscore
    ) {

        progress.bestscore =
            correct;

        progress.besttotal =
            sessionquestions.length;
    }

    localStorage.setItem(
        "readingprogress",
        JSON.stringify(progress)
    );


    document.querySelector(
        ".reading-session"
    ).style.display =
        "none";

    document.querySelector(
        ".reading-result"
    ).style.display =
        "block";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


document.querySelector(
    ".practice-again"
).addEventListener(
    "click",
    () => {
        window.location.reload();
    }
);


document.querySelector(
    ".result-back"
).addEventListener(
    "click",
    () => {
        window.location.href =
            "reading.html";
    }
);