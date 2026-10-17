const urlparams = new URLSearchParams(window.location.search);
const selectedmode = urlparams.get("mode");

const sessiontitle = document.querySelector("#session-title");
const sessiondescription = document.querySelector("#session-description");

if (selectedmode === "quick"){
    sessiontitle.textContent = "Quick Listening Test"
    sessiondescription.textContent = "Practise with a short listening recording and a set of questions"
}else{
    sessiontitle.textContent = "Full listening Test"
    sessiondescription.textContent = "Complete all four sections and 40 questions in a full listening test"
};

const testoverview = document.querySelector("#test-overview");
const listeningaudio = document.querySelector("#listening-audio");
const nextaudio = document.querySelector("#next-audio");
const sessionprogress = document.querySelector(".session-progress");

if (selectedmode === "quick"){
    testoverview.hidden = true;
    sessionprogress.hidden = true;
}else{
    testoverview.hidden= false;
    sessionprogress.hidden = false;
};

const randomindex = Math.floor(Math.random()*window.listeningdata.quick.length);
const selectedset = window.listeningdata.quick[randomindex];

const audiotitle = document.querySelector("#audio-title");
audiotitle.textContent = selectedset.title;
listeningaudio.src = selectedset.audio;
listeningaudio.load();
