let selectedpart = "part1";

const partcards = document.querySelectorAll(".part-card");
const partselector = document.querySelector(".part-selector");

const practiceeyebrow = document.querySelector(".practice-eyebrow");
const practicelabel = document.querySelector(".practice-label");
const practicetitle = document.querySelector(".practice-info h3");
const practicedescription = document.querySelector(".practice-info p");

const practicestatus = document.querySelector(".practice-status");
const practicenumber = document.querySelector(".practice-number");
const questiontimer = document.querySelector(".question-timer");
const practicedetails = document.querySelectorAll(".practice-details span");

function updatepractice() {
    const data = practicedata[selectedpart];

    practiceeyebrow.textContent = data.eyebrow;
    practicelabel.textContent = data.label;
    practicetitle.textContent = data.title;
    practicedescription.textContent = data.description;

    const carddata = practicecarddata[selectedpart];

    practicestatus.textContent = carddata.questions;
    practicenumber.textContent = carddata.number;

    practicedetails[0].textContent = carddata.questions;
    practicedetails[1].textContent = carddata.time;
    practicedetails[2].textContent = carddata.mode;

    if (selectedpart === "part1") {
        questiontimer.style.display = "none";
    } else {
        questiontimer.style.display = "flex";
    }
}

partcards.forEach(card => {
    card.addEventListener("click", () => {

        partcards.forEach(card => {
            card.classList.remove("active");
        });

        card.classList.add("active");

        selectedpart = card.dataset.part;

        updatepractice();

        speakingpractice.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

updatepractice();

const practicesession = document.querySelector(".practice-session");
const practicebtn = document.querySelector(".practice-start");
const speakingpractice = document.querySelector(".speaking-practice");
const practiceback = document.querySelector(".practice-back");

const questiontext = document.querySelector(".question-text");
const progress = document.querySelector(".session-progress");
const questionnumber = document.querySelector(".question-number");
const progressbar = document.querySelector(".session-progress-bar span");

const questioncard = document.querySelector(".question-card");
const practicecomplete = document.querySelector(".practice-complete");

const nextquestion = document.querySelector(".next-question");

let sessionquestions = [];
let currentquestion = 0;

function createsession() {
    const topics = Object.keys(part1questions);

    const randomindex = Math.floor(Math.random() * topics.length);
    const randomtopic = topics[randomindex];

    const remainingtopics = topics.filter(topic => topic !== randomtopic);

    const secondrandomindex = Math.floor(Math.random() * remainingtopics.length);
    const secondrandomtopic = remainingtopics[secondrandomindex];

    const firsttopiccount = 3;
    const secondtopiccount = 2;

    const firsttopicquestions = part1questions[randomtopic];
    const firstquestion = firsttopicquestions.slice(0, firsttopiccount);

    const secondtopicquestions = part1questions[secondrandomtopic];
    const secondquestion = secondtopicquestions.slice(0, secondtopiccount);

    sessionquestions = [...firstquestion, ...secondquestion];

    currentquestion = 0;
}

function showquestion() {
    questiontext.textContent = sessionquestions[currentquestion];

    questionnumber.textContent = String(currentquestion + 1).padStart(2, "0");

    progress.textContent = `Question ${currentquestion + 1} of ${sessionquestions.length}`;

    const progresspercentage = (currentquestion / sessionquestions.length) * 100;

    progressbar.style.width = `${progresspercentage}%`;
}

practicebtn.addEventListener("click", () => {
    createsession();
    showquestion();

    questioncard.style.display = "block";
    practicecomplete.style.display = "none";

    speakingpractice.style.display = "none";
    practicesession.style.display = "block";

    practicesession.classList.remove("active");

    requestAnimationFrame(() => {
        practicesession.classList.add("active");
    });
});

practiceback.addEventListener("click", () => {
    practicesession.style.display = "none";
    practicesession.classList.remove("active");

    speakingpractice.style.display = "block";

    currentquestion = 0;

    speakingpractice.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

nextquestion.addEventListener("click", () => {

    if (currentquestion < sessionquestions.length - 1) {
        currentquestion++;
        showquestion();
    } else {
        questioncard.style.display = "none";
        practicecomplete.style.display = "block";
        progressbar.style.width = "100%";

        const completedsession = {
            part: selectedpart,
            questions: sessionquestions.length,
            completed: true,
            date: new Date().toISOString()
        };

        practicehistory.push(completedsession);

        localStorage.setItem("practicehistory", JSON.stringify(practicehistory));
    }

});

const practiceagain = document.querySelector(".practice-again");

practiceagain.addEventListener("click", () => {

    createsession();

    questioncard.style.display = "block";
    practicecomplete.style.display = "none";

    showquestion();
});

const backtopreview = document.querySelector(".back-to-preview");

backtopreview.addEventListener("click", () => {

    practicesession.style.display = "none";
    practicesession.classList.remove("active");

    speakingpractice.style.display = "block";

    partselector.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

let practicehistory = JSON.parse(localStorage.getItem("practicehistory")) || [];