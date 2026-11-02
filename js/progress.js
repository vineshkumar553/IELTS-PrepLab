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

const allactivities = [
    ...speakinghistory.map(session => ({
        ...session,
        skill: "Speaking",
        activitydate: session.date
    })),

    ...readinghistory.map(session => ({
        ...session,
        skill: "Reading",
        activitydate: session.date
    })),

    ...listeninghistory.map(session => ({
        ...session,
        skill: "Listening",
        activitydate: session.completedAt
    })),

    ...writinghistory.map(session => ({
        ...session,
        skill: "Writing",
        activitydate: session.date
    }))
];

const sortedactivities = allactivities.sort((a, b) => {
    return new Date(b.activitydate) - new Date(a.activitydate);
});

const recentactivities = sortedactivities.slice(0, 5);

const activitylist = document.querySelector("#activity-list");

if (recentactivities.length === 0) {

    activitylist.innerHTML = `
        <div class="activity-empty">
            <div class="activity-empty-icon">
                <i class="fa-regular fa-folder-open"></i>
            </div>
            <h3>No activity yet</h3>
            <p>
                Your completed practice sessions will appear here.
                Start practising to build your learning history.
            </p>
        </div>
    `;

} else {

    const activityicons = {
        Speaking: "fa-microphone",
        Reading: "fa-book-open",
        Listening: "fa-headphones",
        Writing: "fa-pen-nib"
    };

    activitylist.innerHTML = recentactivities.map(session => {

        const date = new Date(session.activitydate).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
            timeZone: "Asia/Karachi"
        });

        return `
            <article class="activity-card">

                <div class="activity-icon">
                    <i class="fa-solid ${activityicons[session.skill]}"></i>
                </div>

                <div class="activity-details">
                    <h3>${session.skill} Practice</h3>
                    <p>${date}</p>
                </div>

                <span class="activity-status">Completed</span>

            </article>
        `;

    }).join("");

}
