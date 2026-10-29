const urlparams = new URLSearchParams(window.location.search);
const selectedtask = urlparams.get("task");

const currenttask = writingtasks.find(task => task.id === selectedtask) || writingtasks.find(task => task.id === "task1-academic");

const draftkey = `writing-draft-${currenttask.id}`;
const saveddraft = JSON.parse(localStorage.getItem(draftkey));

const allquestions = currenttask.questions;

let selectedquestion;

if (saveddraft && saveddraft.questionid) {
    selectedquestion = allquestions.find(question => question.id === saveddraft.questionid);
}

if (!selectedquestion) {
    const randomindex = Math.floor(Math.random() * allquestions.length);
    selectedquestion = allquestions[randomindex];
}

const questiontitle = document.querySelector("#question-title");
const questiondescription = document.querySelector("#question-description");
const questionprompt = document.querySelector("#question-prompt");
const questiontype = document.querySelector("#question-type");
const questioncategory = document.querySelector("#question-number");
const questionvisual = document.querySelector("#question-visual");

function showquestion() {
    questiontitle.textContent = selectedquestion.title;
    questiondescription.textContent = selectedquestion.instructions;
    questionprompt.textContent = selectedquestion.prompt;
    questiontype.textContent = selectedquestion.task;
    questioncategory.textContent = selectedquestion.category;

    if (selectedquestion.visual && selectedquestion.visual.asset) {
        questionvisual.hidden = false;

        questionvisual.innerHTML = `
        <img src="${selectedquestion.visual.asset}" alt="${selectedquestion.visual.description}">
    `;
    } else {
        questionvisual.hidden = true;
        questionvisual.innerHTML = "";
    }
}
showquestion();

const timerdisplay = document.querySelector("#timer");
const timermessage = document.querySelector("#timer-message");

let timeremaining = selectedquestion.duration * 60;
let timerinterval;

function updatetimer() {
    const minutes = Math.floor(timeremaining / 60);
    const seconds = timeremaining % 60;

    timerdisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

updatetimer();

function starttimer() {
    timerinterval = setInterval(() => {
        if (timeremaining > 0) {
            timeremaining--;
            updatetimer();
        } else {
            clearInterval(timerinterval);
            timermessage.hidden = false;
        }
    }, 1000);
}

starttimer();

const writingresponse = document.querySelector("#writing-response");

if (saveddraft && saveddraft.questionid === selectedquestion.id) {
    writingresponse.value = saveddraft.answer;
}

const wordcount = document.querySelector("#word-count");

function updatewordcount() {
    const responsewords = writingresponse.value.trim();
    const wordarray = responsewords.split(/\s+/);
    const totalwords = responsewords === "" ? 0 : wordarray.length;

    wordcount.textContent = totalwords;
}

function savedraft() {
    if (writingresponse.value.trim() === "") {
        localStorage.removeItem(draftkey);
    } else {
        const draftdata = {
            questionid: selectedquestion.id,
            answer: writingresponse.value
        };

        localStorage.setItem(draftkey, JSON.stringify(draftdata));
    }
}

writingresponse.addEventListener("input", () => {
    updatewordcount();
    savedraft();
});

updatewordcount();

const wordlimit = selectedquestion.wordlimit;
const wordguidance = document.querySelector("#word-guidance");

wordguidance.textContent = `Minimum ${wordlimit} words recommended`;

const savedraftbutton = document.querySelector("#save-draft");
const draftstatus = document.querySelector("#draft-status");

savedraftbutton.addEventListener("click", () => {
    if (writingresponse.value.trim() === "") {
        draftstatus.textContent = "Nothing to save";
        return;
    }

    savedraft();
    draftstatus.textContent = "Draft saved";
});

let timetaken = 0;
const finishsessionbutton = document.querySelector("#finish-session");
finishsessionbutton.addEventListener("click", () => {
    if (writingresponse.value.trim() === "") {
        const sessionmessage = document.querySelector("#session-message");
        sessionmessage.textContent = "Please write your answer before finishing the session.";
        return;
    }

    clearInterval(timerinterval);
    timetaken = (selectedquestion.duration * 60) - timeremaining;

    const reviewwordcount = document.querySelector("#review-word-count");
    const reviewanswer = document.querySelector("#review-answer");

    reviewwordcount.textContent = wordcount.textContent;
    reviewanswer.textContent = writingresponse.value;

    const reviewtask = document.querySelector("#review-task");
    const reviewtime = document.querySelector("#review-time");
    const reviewdate = document.querySelector("#review-date");
    const reviewquestion = document.querySelector("#review-question");

    reviewtask.textContent = currenttask.title;
    reviewquestion.textContent = selectedquestion.title;

    const minutes = Math.floor(timetaken / 60);
    const seconds = timetaken % 60;

    reviewtime.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    reviewdate.textContent = new Date().toLocaleDateString();

    const reviewwordstatus = document.querySelector("#review-word-status");

    if (Number(wordcount.textContent) >= wordlimit) {
        reviewwordstatus.textContent = "Recommended word count reached";
    } else {
        reviewwordstatus.textContent = `Below recommended word count (${wordlimit} words)`;
    }

    const sessionworkspace = document.querySelector("#session-workspace");
    const reviewsesction = document.querySelector("#review-section");

    sessionworkspace.hidden = true;
    reviewsesction.hidden = false;
});

const selfreviewform = document.querySelector("#self-review-form");
selfreviewform.addEventListener("submit", (event) => {

    event.preventDefault();
    const reviewdata = new FormData(selfreviewform);

    const answeredprompt = reviewdata.has("answered-prompt");
    const organisation = reviewdata.has("organisation");
    const vocabulary = reviewdata.has("vocabulary");
    const grammar = reviewdata.has("grammar");
    const taskrequirement = reviewdata.has("task-requirement");

    const review = {
        answeredprompt: answeredprompt,
        organisation: organisation,
        vocabulary: vocabulary,
        grammar: grammar,
        taskrequirement: taskrequirement
    };

    let reviewhistory = JSON.parse(localStorage.getItem("writingreviewhistory")) || [];

    reviewhistory.push({
        taskid: currenttask.id,
        questionid: selectedquestion.id,
        date: new Date().toISOString(),
        wordcount: Number(wordcount.textContent),
        timetaken: timetaken,
        review: review
    });
    localStorage.setItem("writingreviewhistory", JSON.stringify(reviewhistory));

    const reviewsavedmessage = document.querySelector("#review-saved-message");

    reviewsavedmessage.textContent = "Your self-review has been saved.";
    reviewsavedmessage.hidden = false;

    const savebutton = selfreviewform.querySelector(".save-review-button");
    savebutton.disabled = true;
});

const practiceanother = document.querySelector("#practice-another");

practiceanother.addEventListener("click", () => {
    const sessionworkspace = document.querySelector("#session-workspace");
    const reviewsection = document.querySelector("#review-section");

    let availablequestions = allquestions.filter(question => question.id !== selectedquestion.id);

    if (availablequestions.length === 0) {
        availablequestions = allquestions;
    }

    const randomindex = Math.floor(Math.random() * availablequestions.length);
    selectedquestion = availablequestions[randomindex];

    showquestion();

    writingresponse.value = "";

    selfreviewform.reset();

    const reviewsavedmessage = document.querySelector("#review-saved-message");
    reviewsavedmessage.hidden = true;

    const savebutton = selfreviewform.querySelector(".save-review-button");
    savebutton.disabled = false;

    draftstatus.textContent = "";
    document.querySelector("#session-message").textContent = "";

    updatewordcount();
    wordguidance.textContent = `Minimum ${selectedquestion.wordlimit} words recommended`;

    reviewsection.hidden = true;
    sessionworkspace.hidden = false;

    resettimer();
    starttimer();
});

function resettimer() {
    clearInterval(timerinterval);
    timeremaining = selectedquestion.duration * 60;
    timermessage.hidden = true;
    updatetimer();
}