const speakinghistory = JSON.parse(localStorage.getItem("practice-history")) || [];
const readinghistory = JSON.parse(localStorage.getItem("reading-history")) || [];
const listeninghistory = JSON.parse(localStorage.getItem("ielts-preplab-listening-history")) || [];
const writinghistory = JSON.parse(localStorage.getItem("writingreviewhistory")) || [];

const totalsessions =
    speakinghistory.length +
    readinghistory.length +
    listeninghistory.length +
    writinghistory.length;

const totalsessionelement = document.querySelector("#total-sessions");
totalsessionelement.textContent = totalsessions;

const practicetimeelement = document.querySelector("#total-practice-time");

const listeningtime = listeninghistory.reduce((total, session) => {
    return total + session.durationSeconds;
}, 0);

const writingtime = writinghistory.reduce((total, session) => {
    return total + (session.timetaken || 0);
}, 0);

const totalpracticetime = listeningtime + writingtime;
const totalminutes = Math.floor(totalpracticetime / 60);
const remainingseconds = totalpracticetime % 60;

practicetimeelement.textContent = `${totalminutes}m ${remainingseconds}s`;

const speakingquestions = speakinghistory.reduce((total, session) => {
    return total + session.questions;
}, 0);

const readingquestions = readinghistory.reduce((total, session) => {
    return total + session.questionsattempted;
}, 0);

const listeningquestions = listeninghistory.reduce((total, session) => {
    return total + session.correct + session.incorrect;
}, 0);

const writingquestions = writinghistory.length;

const totalquestions =
    speakingquestions +
    readingquestions +
    listeningquestions +
    writingquestions;

const totalquestionselement = document.querySelector("#total-questions");
totalquestionselement.textContent = totalquestions;

const speakingdates = speakinghistory.map(session => {
    return session.date;
});

const listeningdates = listeninghistory.map(session => {
    return session.completedAt;
});

const readingdates = readinghistory.map(session => {
    return session.date;
});

const writingdates = writinghistory.map(session => {
    return session.date;
});

const alldates = [...speakingdates, ...listeningdates, ...readingdates, ...writingdates];

const localdates = alldates.map(date => {
    return new Date(date).toLocaleDateString("en-CA", {
        timeZone: "Asia/Karachi"
    });
});

const uniquedates = [...new Set(localdates)].sort();

const today = new Date().toLocaleDateString("en-CA", {
    timeZone: "Asia/Karachi"
});

const yesterday = new Date();
yesterday.setDate(yesterday.getDate() - 1);

const yesterdaydate = yesterday.toLocaleDateString("en-CA", {
    timeZone: "Asia/Karachi"
});

let currentstreak = 0;
let checkdate = uniquedates.includes(today) ? today : yesterdaydate;

while (uniquedates.includes(checkdate)) {
    currentstreak++;

    const previousdate = new Date(`${checkdate}T12:00:00+05:00`);
    previousdate.setDate(previousdate.getDate() - 1);

    checkdate = previousdate.toLocaleDateString("en-CA", {
        timeZone: "Asia/Karachi"
    });
}

const currentstreakelement = document.querySelector("#current-streak");
currentstreakelement.textContent = currentstreak;

