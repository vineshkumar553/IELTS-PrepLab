const menu = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".menu-close");
const sidebar = document.querySelector(".nav-sidebar");
const sidelinks = document.querySelector(".sidebar-nav");

menu.addEventListener("click", function () {
    sidebar.classList.add("active");
    menu.classList.add("hide");
    closeMenu.classList.add("active");
});

closeMenu.addEventListener("click", function () {
    sidebar.classList.remove("active");
    menu.classList.remove("hide");
    closeMenu.classList.remove("active");
});

sidelinks.addEventListener("click", function () {
    sidebar.classList.remove("active");
    menu.classList.remove("hide");
    closeMenu.classList.remove("active");
});

window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
        sidebar.classList.remove("active");
        menu.classList.remove("hide");
        closeMenu.classList.remove("active");
    }
});

const speakinghistory = JSON.parse(localStorage.getItem("practicehistory")) || [];
const readinghistory = JSON.parse(localStorage.getItem("readinghistory")) || [];
const listeninghistory = JSON.parse(localStorage.getItem("ielts-preplab-listening-history")) || [];
const writinghistory = JSON.parse(localStorage.getItem("writingreviewhistory")) || [];

const histories = [
    speakinghistory,
    readinghistory,
    listeninghistory,
    writinghistory
];

const totalsessions = histories.reduce((total, history) => {
    return total + history.length;
}, 0);

const skillstouched = histories.filter(history => {
    return history.length > 0;
}).length;

document.querySelector("[data-total-sessions]").textContent = totalsessions;
document.querySelector("[data-skills-touched]").textContent = skillstouched;
document.querySelector("[data-speaking-count]").textContent = `${speakinghistory.length} sessions`;
document.querySelector("[data-reading-count]").textContent = `${readinghistory.length} sessions`;
document.querySelector("[data-listening-count]").textContent = `${listeninghistory.length} sessions`;
document.querySelector("[data-writing-count]").textContent = `${writinghistory.length} sessions`;

const recordtitle = document.querySelector(".record-message-title");
const recorddescription = document.querySelector(".record-message p");

if (totalsessions === 0) {
    recordtitle.textContent = "Start your record";
    recorddescription.textContent = "Complete your first practice session to see your activity appear here.";
} else {
    recordtitle.textContent = "Keep building your progress";
    recorddescription.textContent = `You've completed ${totalsessions} practice sessions so far. Keep practising to strengthen your IELTS skills.`;
}