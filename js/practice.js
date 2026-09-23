const urlparams = new URLSearchParams(window.location.search);
const selectedpart = urlparams.get("part") || "part1";

const practicesession = document.querySelector(".practice-session");

const questiontext = document.querySelector(".question-text");
const progress = document.querySelector(".session-progress");
const questionnumber = document.querySelector(".question-number");
const progressbar = document.querySelector(".session-progress-bar span");

const questioncard = document.querySelector(".question-card");
const practicecomplete = document.querySelector(".practice-complete");

const nextquestion = document.querySelector(".next-question");
const practiceback = document.querySelector(".practice-back");
const practiceagain = document.querySelector(".practice-again");
const backtopreview = document.querySelector(".back-to-preview");

let sessionquestions = [];
let currentquestion = 0;

let practicehistory =
    JSON.parse(localStorage.getItem("practicehistory")) || [];

function createsession() {
    const topics = Object.keys(part1questions);

    const randomindex = Math.floor(Math.random() * topics.length);
    const randomtopic = topics[randomindex];

    const remainingtopics = topics.filter(topic => topic !== randomtopic);

    const secondrandomindex =
        Math.floor(Math.random() * remainingtopics.length);

    const secondrandomtopic =
        remainingtopics[secondrandomindex];

    const firsttopiccount = 3;
    const secondtopiccount = 2;

    const firsttopicquestions =
        part1questions[randomtopic];

    const firstquestion =
        firsttopicquestions.slice(0, firsttopiccount);

    const secondtopicquestions =
        part1questions[secondrandomtopic];

    const secondquestion =
        secondtopicquestions.slice(0, secondtopiccount);

    sessionquestions = [
        ...firstquestion,
        ...secondquestion
    ];

    currentquestion = 0;
}

function showquestion() {
    questiontext.textContent =
        sessionquestions[currentquestion];

    questionnumber.textContent =
        String(currentquestion + 1).padStart(2, "0");

    progress.textContent =
        `Question ${currentquestion + 1} of ${sessionquestions.length}`;

    const progresspercentage =
        (currentquestion / sessionquestions.length) * 100;

    progressbar.style.width =
        `${progresspercentage}%`;
}

function startsession() {
    createsession();
    showquestion();

    questioncard.style.display = "block";
    practicecomplete.style.display = "none";

    practicesession.style.display = "block";

    requestAnimationFrame(() => {
        practicesession.classList.add("active");
    });
}

function completepractice() {
    questioncard.style.display = "none";
    practicecomplete.style.display = "block";

    progressbar.style.width = "100%";

    const completedsession = {
        part: "part1",
        questions: sessionquestions.length,
        completed: true,
        date: new Date().toISOString()
    };

    practicehistory.push(completedsession);

    localStorage.setItem(
        "practicehistory",
        JSON.stringify(practicehistory)
    );
}

nextquestion.addEventListener("click", () => {

    if (currentquestion < sessionquestions.length - 1) {
        currentquestion++;
        showquestion();
    } else {
        completepractice();
    }

});

practiceagain.addEventListener("click", () => {

    practicesession.classList.remove("active");

    createsession();

    questioncard.style.display = "block";
    practicecomplete.style.display = "none";

    showquestion();

    requestAnimationFrame(() => {
        practicesession.classList.add("active");
    });

});

practiceback.addEventListener("click", () => {

    window.location.href = "speaking.html#part-selector";

});

backtopreview.addEventListener("click", () => {

    window.location.href = "speaking.html";

});

if (selectedpart === "part1") {
    startsession();
}

const part2session = document.querySelector(".part2-session");

let currentcuecard = null;
let part2timer = null;
let part2timeleft = 60;
let part2phase = "ready";
let lastcueindex = -1;

function createpart2session() {

    const cueintro = document.querySelector(".cue-intro");
    const cuenumber = document.querySelector(".cue-number");
    const cuetitle = document.querySelector(".cue-card-content h3");
    const cueprompts = document.querySelectorAll(".cue-prompts span");

    let randomindex;

    do {
        randomindex = Math.floor(Math.random() * part2questions.length);
    } while (
        part2questions.length > 1 &&
        randomindex === lastcueindex
    );

    lastcueindex = randomindex;
    currentcuecard = part2questions[randomindex];

    cueintro.textContent = currentcuecard.intro;
    cuenumber.textContent = String(randomindex + 1).padStart(2, "0");
    cuetitle.textContent = currentcuecard.title;

    cueprompts.forEach((prompt, index) => {
        prompt.innerHTML = `
            <i class="fa-solid fa-arrow-right"></i>
            ${currentcuecard.prompts[index]}
        `;
    });

    resetpart2state();
}

function updatepart2timer() {

    const timervalue = document.querySelector(".timer-value");
    const timerprogress = document.querySelector(".timer-progress span");

    const minutes = Math.floor(part2timeleft / 60);
    const seconds = part2timeleft % 60;

    timervalue.textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

    const totalduration = part2phase === "speaking" ? 120 : 60;
    const progresspercentage = (part2timeleft / totalduration) * 100;

    timerprogress.style.width = `${progresspercentage}%`;
}

function resetpart2state() {

    clearInterval(part2timer);
    part2timer = null;

    const part2status = document.querySelector(".part2-status");
    const timerphaselabel = document.querySelector(".timer-phase-label");
    const timerdescription = document.querySelector(".timer-description");
    const part2start = document.querySelector(".part2-start");

    part2phase = "ready";
    part2timeleft = 60;

    part2status.textContent = "Preparation";
    timerphaselabel.textContent = "Preparation";
    timerdescription.textContent =
        "You have one minute to prepare your answer.";

    updatepart2timer();

    part2start.disabled = false;
    part2start.innerHTML = `
        Start Preparation
        <i class="fa-solid fa-arrow-right"></i>
    `;
}

function startpart2session() {

    const part2layout = document.querySelector(".part2-layout");
    const part2actions = document.querySelector(".part2-actions");
    const part2complete = document.querySelector(".part2-complete");

    part2layout.style.display = "grid";
    part2actions.style.display = "block";
    part2complete.style.display = "none";

    createpart2session();

    part2session.style.display = "block";

    requestAnimationFrame(() => {
        part2session.classList.add("active");
    });
}

function startpreparation() {

    const part2status = document.querySelector(".part2-status");
    const timerphaselabel = document.querySelector(".timer-phase-label");
    const timerdescription = document.querySelector(".timer-description");
    const part2start = document.querySelector(".part2-start");

    clearInterval(part2timer);

    part2phase = "preparation";
    part2timeleft = 60;

    part2status.textContent = "Preparation";
    timerphaselabel.textContent = "Preparation";
    timerdescription.textContent =
        "Use this time to organise your ideas before speaking.";

    part2start.innerHTML = `
        Skip Preparation
        <i class="fa-solid fa-forward"></i>
    `;

    updatepart2timer();

    part2timer = setInterval(() => {

        part2timeleft--;
        updatepart2timer();

        if (part2timeleft <= 0) {
            clearInterval(part2timer);
            part2timer = null;

            startspeaking();
        }

    }, 1000);
}

function skippreparation() {

    clearInterval(part2timer);
    part2timer = null;

    startspeaking();
}

function startspeaking() {

    const part2status = document.querySelector(".part2-status");
    const timerphaselabel = document.querySelector(".timer-phase-label");
    const timerdescription = document.querySelector(".timer-description");
    const part2start = document.querySelector(".part2-start");

    clearInterval(part2timer);

    part2phase = "speaking";
    part2timeleft = 120;

    part2status.textContent = "Speaking";
    timerphaselabel.textContent = "Speaking";
    timerdescription.textContent =
        "Speak naturally and develop your answer for up to two minutes.";

    part2start.disabled = false;
    part2start.innerHTML = `
        Next
        <i class="fa-solid fa-arrow-right"></i>
    `;

    updatepart2timer();

    part2timer = setInterval(() => {

        part2timeleft--;
        updatepart2timer();

        if (part2timeleft <= 0) {
            clearInterval(part2timer);
            part2timer = null;

            completepart2();
        }

    }, 1000);
}

function completepart2() {

    const part2layout = document.querySelector(".part2-layout");
    const part2actions = document.querySelector(".part2-actions");
    const part2complete = document.querySelector(".part2-complete");

    clearInterval(part2timer);
    part2timer = null;

    part2phase = "complete";
    part2timeleft = 0;

    updatepart2timer();

    part2layout.style.display = "none";
    part2actions.style.display = "none";
    part2complete.style.display = "block";

    const completedsession = {
        part: "part2",
        questions: 1,
        completed: true,
        date: new Date().toISOString()
    };

    practicehistory.push(completedsession);

    localStorage.setItem(
        "practicehistory",
        JSON.stringify(practicehistory)
    );
}

function resetpart2session() {

    const part2layout = document.querySelector(".part2-layout");
    const part2actions = document.querySelector(".part2-actions");
    const part2complete = document.querySelector(".part2-complete");

    clearInterval(part2timer);
    part2timer = null;

    part2layout.style.display = "grid";
    part2actions.style.display = "block";
    part2complete.style.display = "none";

    part2session.classList.remove("active");

    createpart2session();

    requestAnimationFrame(() => {
        part2session.classList.add("active");
    });
}

const part2start = document.querySelector(".part2-start");

part2start.addEventListener("click", () => {

    if (part2phase === "ready") {
        startpreparation();
    }

    else if (part2phase === "preparation") {
        skippreparation();
    }

    else if (part2phase === "speaking") {
        completepart2();
    }

});

document.querySelector(".part2-back").addEventListener("click", () => {

    clearInterval(part2timer);
    part2timer = null;

    window.location.href = "speaking.html#part-selector";

});

document.querySelector(".part2-again").addEventListener("click", () => {

    resetpart2session();

});

document.querySelector(".part2-back-parts").addEventListener("click", () => {

    clearInterval(part2timer);
    part2timer = null;

    window.location.href = "speaking.html#part-selector";

});

if (selectedpart === "part2") {
    startpart2session();
}