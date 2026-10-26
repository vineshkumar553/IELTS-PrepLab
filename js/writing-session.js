const urlparams = new URLSearchParams(window.location.search);
const selectedtask = urlparams.get("task");

const currenttask = writingtasks.find(task => task.id === selectedtask) || writingtasks.find(task => task.id ==="task1-academic");
const allquestions = currenttask.questions;
const randomindex = Math.floor(Math.random()*allquestions.length);
const selectedquestion = allquestions[randomindex];

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