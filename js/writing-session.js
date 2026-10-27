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
questiontitle.textContent = selectedquestion.title;

const questiondescription = document.querySelector("#question-description");
questiondescription.textContent = selectedquestion.instructions;

const questionprompt = document.querySelector("#question-prompt");
questionprompt.textContent = selectedquestion.prompt;

const questiontype = document.querySelector("#question-type");
const questioncategory = document.querySelector("#question-number");

questiontype.textContent = selectedquestion.task;
questioncategory.textContent = selectedquestion.category;

const questionvisual = document.querySelector("#question-visual");

if (selectedquestion.visual && selectedquestion.visual.asset) {
    questionvisual.hidden = false;

    questionvisual.innerHTML = `
        <img src="${selectedquestion.visual.asset}" alt="${selectedquestion.visual.description}">
    `;
} else {
    questionvisual.hidden = true;
    questionvisual.innerHTML = "";
}

const timerdisplay = document.querySelector("#timer");
const timermessage = document.querySelector("#timer-message");

let timeremaining = selectedquestion.duration * 60;

function updatetimer() {
    const minutes = Math.floor(timeremaining / 60);
    const seconds = timeremaining % 60;

    timerdisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

updatetimer();

const timerinterval = setInterval(() => {
    if (timeremaining > 0) {
        timeremaining--;
        updatetimer();
    } else {
        clearInterval(timerinterval);
        timermessage.hidden = false;
    }
}, 1000);

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

