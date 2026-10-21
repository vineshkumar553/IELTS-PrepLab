const urlparams = new URLSearchParams(window.location.search);
const selectedpart = urlparams.get("part") || "part1";

let practicehistory = JSON.parse(localStorage.getItem("practicehistory")) || [];

function savepractice(part, questions) {
    practicehistory.push({
        part: part,
        questions: questions,
        completed: true,
        date: new Date().toISOString()
    });

    localStorage.setItem("practicehistory", JSON.stringify(practicehistory));
}

let sessionquestions = [];
let currentquestion = 0;

function showquestion() {
    const text = document.querySelector(".question-text");
    text.textContent = sessionquestions[currentquestion];

    const number = document.querySelector(".question-number");
    number.textContent = String(currentquestion + 1).padStart(2, "0");

    const progress = document.querySelector(".session-progress");
    progress.textContent = `Question ${currentquestion + 1} of ${sessionquestions.length}`;

    const bar = document.querySelector(".session-progress-bar span");
    bar.style.width = `${currentquestion / sessionquestions.length * 100}%`;
}

function startpart1() {
    const topics = Object.keys(part1questions);
    const firsttopic = topics[Math.floor(Math.random() * topics.length)];
    const othertopics = topics.filter(topic => topic !== firsttopic);
    const secondtopic = othertopics[Math.floor(Math.random() * othertopics.length)];

    sessionquestions = [
        ...part1questions[firsttopic].slice(0, 3),
        ...part1questions[secondtopic].slice(0, 2)
    ];

    currentquestion = 0;
    showquestion();

    const card = document.querySelector(".question-card");
    card.style.display = "block";

    const complete = document.querySelector(".practice-complete");
    complete.style.display = "none";

    const session = document.querySelector(".practice-session");
    session.style.display = "block";

    requestAnimationFrame(() => {
        session.classList.add("active");
    });
}

const nextquestion = document.querySelector(".next-question");
nextquestion.addEventListener("click", () => {
    if (currentquestion < sessionquestions.length - 1) {
        currentquestion++;
        showquestion();
    } else {
        const card = document.querySelector(".question-card");
        card.style.display = "none";

        const complete = document.querySelector(".practice-complete");
        complete.style.display = "block";

        const bar = document.querySelector(".session-progress-bar span");
        bar.style.width = "100%";

        savepractice("part1", sessionquestions.length);
    }
});

const practiceagain = document.querySelector(".practice-again");
practiceagain.addEventListener("click", () => {
    const session = document.querySelector(".practice-session");
    session.classList.remove("active");
    startpart1();
});

const practiceback = document.querySelector(".practice-back");
practiceback.addEventListener("click", () => {
    window.location.href = "speaking.html#part-selector";
});

const backtopreview = document.querySelector(".back-to-preview");
backtopreview.addEventListener("click", () => {
    window.location.href = "speaking.html";
});

if (selectedpart === "part1") {
    startpart1();
}

let part2timer = null;
let part2timeleft = 60;
let part2phase = "ready";
let lastcueindex = -1;

function updatepart2timer() {
    const minutes = String(Math.floor(part2timeleft / 60)).padStart(2, "0");
    const seconds = String(part2timeleft % 60).padStart(2, "0");

    const value = document.querySelector(".timer-value");
    value.textContent = `${minutes}:${seconds}`;

    const duration = part2phase === "speaking" ? 120 : 60;
    const bar = document.querySelector(".timer-progress span");
    bar.style.width = `${part2timeleft / duration * 100}%`;
}

function startpart2() {
    clearInterval(part2timer);
    part2timer = null;
    part2phase = "ready";
    part2timeleft = 60;

    let randomindex;

    do {
        randomindex = Math.floor(Math.random() * part2questions.length);
    } while (part2questions.length > 1 && randomindex === lastcueindex);

    lastcueindex = randomindex;
    const cuecard = part2questions[randomindex];

    const intro = document.querySelector(".cue-intro");
    intro.textContent = cuecard.intro;

    const number = document.querySelector(".cue-number");
    number.textContent = String(randomindex + 1).padStart(2, "0");

    const title = document.querySelector(".cue-card-content h3");
    title.textContent = cuecard.title;

    const prompts = document.querySelectorAll(".cue-prompts span");
    prompts.forEach((prompt, index) => {
        prompt.innerHTML = `
            <i class="fa-solid fa-arrow-right"></i>
            ${cuecard.prompts[index]}
        `;
    });

    const status = document.querySelector(".part2-status");
    status.textContent = "Preparation";

    const label = document.querySelector(".timer-phase-label");
    label.textContent = "Preparation";

    const description = document.querySelector(".timer-description");
    description.textContent = "You have one minute to prepare your answer.";

    const start = document.querySelector(".part2-start");
    start.disabled = false;
    start.innerHTML = `
        Start Preparation
        <i class="fa-solid fa-arrow-right"></i>
    `;

    updatepart2timer();

    const layout = document.querySelector(".part2-layout");
    layout.style.display = "grid";

    const actions = document.querySelector(".part2-actions");
    actions.style.display = "block";

    const complete = document.querySelector(".part2-complete");
    complete.style.display = "none";

    const session = document.querySelector(".part2-session");
    session.style.display = "block";

    requestAnimationFrame(() => {
        session.classList.add("active");
    });
}

function changepart2phase(phase) {
    clearInterval(part2timer);
    part2timer = null;
    part2phase = phase;

    if (phase === "complete") {
        part2timeleft = 0;
        updatepart2timer();

        const layout = document.querySelector(".part2-layout");
        layout.style.display = "none";

        const actions = document.querySelector(".part2-actions");
        actions.style.display = "none";

        const complete = document.querySelector(".part2-complete");
        complete.style.display = "block";

        savepractice("part2", 1);
        return;
    }

    const speaking = phase === "speaking";
    part2timeleft = speaking ? 120 : 60;

    const status = document.querySelector(".part2-status");
    status.textContent = speaking ? "Speaking" : "Preparation";

    const label = document.querySelector(".timer-phase-label");
    label.textContent = speaking ? "Speaking" : "Preparation";

    const description = document.querySelector(".timer-description");
    description.textContent = speaking
        ? "Speak naturally and develop your answer for up to two minutes."
        : "Use this time to organise your ideas before speaking.";

    const start = document.querySelector(".part2-start");
    start.disabled = false;

    if (speaking) {
        start.innerHTML = `
            Next
            <i class="fa-solid fa-arrow-right"></i>
        `;
    } else {
        start.innerHTML = `
            Skip Preparation
            <i class="fa-solid fa-forward"></i>
        `;
    }

    updatepart2timer();

    part2timer = setInterval(() => {
        part2timeleft--;
        updatepart2timer();

        if (part2timeleft <= 0) {
            if (part2phase === "preparation") {
                changepart2phase("speaking");
            } else {
                changepart2phase("complete");
            }
        }
    }, 1000);
}

const part2start = document.querySelector(".part2-start");
part2start.addEventListener("click", () => {
    if (part2phase === "ready") {
        changepart2phase("preparation");
    } else if (part2phase === "preparation") {
        changepart2phase("speaking");
    } else if (part2phase === "speaking") {
        changepart2phase("complete");
    }
});

const part2again = document.querySelector(".part2-again");
part2again.addEventListener("click", () => {
    const session = document.querySelector(".part2-session");
    session.classList.remove("active");
    startpart2();
});

const part2back = document.querySelector(".part2-back");
part2back.addEventListener("click", () => {
    clearInterval(part2timer);
    part2timer = null;
    window.location.href = "speaking.html#part-selector";
});

const part2backparts = document.querySelector(".part2-back-parts");
part2backparts.addEventListener("click", () => {
    clearInterval(part2timer);
    part2timer = null;
    window.location.href = "speaking.html#part-selector";
});

if (selectedpart === "part2") {
    startpart2();
}

let currentpart3topic = null;
let currentpart3question = 0;
let lastpart3index = -1;

function showpart3question() {
    const category = document.querySelector(".topic-category");
    category.textContent = currentpart3topic.category;

    const title = document.querySelector(".topic-title");
    title.textContent = currentpart3topic.topic;

    const number = String(currentpart3question + 1).padStart(2, "0");
    const progress = document.querySelector(".part3-progress");
    progress.textContent = `Question ${number} of 05`;

    const papernumber = document.querySelector(".paper-number");
    papernumber.textContent = number;

    const text = document.querySelector(".part3-question-text");
    text.textContent = currentpart3topic.questions[currentpart3question];
}

function startpart3() {
    let randomindex;

    do {
        randomindex = Math.floor(Math.random() * part3questions.length);
    } while (part3questions.length > 1 && randomindex === lastpart3index);

    lastpart3index = randomindex;
    currentpart3topic = part3questions[randomindex];
    currentpart3question = 0;
    showpart3question();

    const session = document.querySelector(".part3-session");
    session.style.display = "block";

    requestAnimationFrame(() => {
        session.classList.add("active");
    });
}

const part3next = document.querySelector(".part3-next");
part3next.addEventListener("click", () => {
    if (currentpart3question < 4) {
        currentpart3question++;
        showpart3question();
    } else {
        const paper = document.querySelector(".part3-paper");
        paper.style.display = "none";

        const complete = document.querySelector(".part3-complete");
        complete.style.display = "block";

        savepractice("part3", 5);
    }
});

const part3again = document.querySelector(".part3-again");
part3again.addEventListener("click", () => {
    const paper = document.querySelector(".part3-paper");
    paper.style.display = "block";

    const complete = document.querySelector(".part3-complete");
    complete.style.display = "none";

    const session = document.querySelector(".part3-session");
    session.classList.remove("active");
    startpart3();
});

const part3back = document.querySelector(".part3-back");
part3back.addEventListener("click", () => {
    window.location.href = "speaking.html#part-selector";
});

const part3backparts = document.querySelector(".part3-back-parts");
part3backparts.addEventListener("click", () => {
    window.location.href = "speaking.html#part-selector";
});

if (selectedpart === "part3") {
    startpart3();
}