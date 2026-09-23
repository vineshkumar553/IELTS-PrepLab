let selectedpart = "part1";

const partcards = document.querySelectorAll(".part-card");
const speakingpractice = document.querySelector(".speaking-practice");
const practicebtn = document.querySelector(".practice-start");

const practiceeyebrow = document.querySelector(".practice-eyebrow");
const practicelabel = document.querySelector(".practice-label");
const practicetitle = document.querySelector(".practice-info h3");
const practicedescription = document.querySelector(".practice-info p");

const practicestatus = document.querySelector(".practice-status");
const practicenumber = document.querySelector(".practice-number");
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

practicebtn.addEventListener("click", () => {
    window.location.href = "practice.html?part=" + selectedpart;
});