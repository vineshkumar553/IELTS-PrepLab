const urlparams = new URLSearchParams(window.location.search);
const selectedmode = urlparams.get("mode") === "quick" ? "quick" : "full";
const fulltest = selectedmode === "full";
const listeningdata = window.listeningdata;

const useranswers = {};
const allquestions = [];
const sessionstarttime = Date.now();

let recordings = [];
let currentaudioindex = 0;
let sessionfinished = false;
let audiofinished = false;
let timerinterval;

function randomrecording(items) {
    return items[Math.floor(Math.random() * items.length)];
}

if (fulltest) {
    for (let section = 1; section <= 4; section++) {
        recordings.push(randomrecording(listeningdata.full[`section${section}`]));
    }
} else {
    recordings.push(randomrecording(listeningdata.quick));
}

document.querySelector("#session-title").textContent = fulltest
    ? "Full Listening Test"
    : "Quick Listening Practice";

document.querySelector("#session-description").textContent = fulltest
    ? "Complete all four sections and 40 questions in a full listening test."
    : "Practise with one recording and answer the questions at your own pace.";

document.querySelector("#session-badge span").textContent = fulltest
    ? "FULL TEST"
    : "QUICK TEST";

document.querySelector("#test-overview").hidden = !fulltest;
document.querySelector(".session-progress").hidden = !fulltest;
document.querySelector("#progress-label").textContent = "Your progress";

function questiontext(question) {
    return question.question || question.prompt || question.text || question.title || question.label || "";
}

function questiontype(question) {
    if (question.type) return question.type.toLowerCase();
    if (Array.isArray(question.fields)) return "form";
    if (Array.isArray(question.items)) return "matching";
    if (Array.isArray(question.answers)) return "multiple";

    return "mcq";
}

recordings.forEach((recording, section) => {
    recording.questions.forEach((question) => {
        const type = questiontype(question);
        let parts = [question];

        if (type === "form") parts = question.fields || [];
        if (type === "matching") parts = question.items || [];

        parts.forEach((part) => {
            allquestions.push({
                index: allquestions.length,
                number: allquestions.length + 1,
                section,
                type,
                parent: question,
                part,
                prompt: (type === "form" ? part.label : "") || questiontext(part) || questiontext(question),
                context: part === question
                    ? question.instruction || question.instructions || ""
                    : questiontext(question)
            });
        });
    });
});

function escapehtml(value) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function getoptions(slot) {
    const options = slot.part.options ||
        slot.parent.options ||
        slot.part.choices ||
        slot.parent.choices ||
        [];

    return Array.isArray(options) ? options : Object.values(options);
}

function optiontext(option, index) {
    if (typeof option !== "object" || option === null) {
        return String(option);
    }

    return String(
        option.text ??
        option.label ??
        option.name ??
        option.title ??
        option.value ??
        option.letter ??
        `Option ${index + 1}`
    );
}

function expectedanswer(slot) {
    if (slot.type === "multiple") {
        return slot.parent.answers ?? slot.parent.answer ?? [];
    }

    return slot.part.answer ?? slot.parent.answer ?? "";
}

function renderoptions(slot) {
    const index = slot.index;
    const options = getoptions(slot);

    if (slot.type === "form") {
        return `
            <label class="question-answer-label" for="answer-${index}">Your answer</label>
            <input class="question-input" id="answer-${index}" type="text" data-answer-index="${index}" autocomplete="off">
        `;
    }

    if (slot.type === "matching") {
        return `
            <label class="question-answer-label" for="answer-${index}">Your answer</label>
            <select class="question-select" id="answer-${index}" data-answer-index="${index}">
                <option value="">Choose an answer</option>
                ${options.map((option, number) => `
                    <option value="${number}">${escapehtml(optiontext(option, number))}</option>
                `).join("")}
            </select>
        `;
    }

    const multiple = slot.type === "multiple";
    const answer = expectedanswer(slot);
    const amount = Array.isArray(answer) ? answer.length : 1;

    return `
        <div class="question-options${multiple ? " question-checkboxes" : ""}">
            ${options.map((option, number) => `
                <label class="question-option" for="answer-${index}-${number}">
                    <input type="${multiple ? "checkbox" : "radio"}" id="answer-${index}-${number}" name="answer-${index}" value="${number}" data-answer-index="${index}">
                    <span>${escapehtml(optiontext(option, number))}</span>
                </label>
            `).join("")}
        </div>
        ${multiple ? `<p class="question-hint">Choose ${amount} ${amount === 1 ? "answer" : "answers"}.</p>` : ""}
    `;
}

function renderquestion(slot) {
    let context = "";

    if (slot.context && slot.context !== slot.prompt) {
        context = `<p class="question-context">${escapehtml(slot.context)}</p>`;
    }

    return `
        <article class="listening-question-card question-card" id="question-${slot.index}">
            <div class="question-card-heading">
                <span class="question-number">${slot.number}</span>
                <div class="question-card-content">
                    ${context}
                    <p class="question-prompt">${escapehtml(slot.prompt || `Question ${slot.number}`)}</p>
                </div>
            </div>
            <div class="question-answer-area">
                ${renderoptions(slot)}
            </div>
        </article>
    `;
}

const questiongroups = [...document.querySelectorAll(".listening-question-group")];

questiongroups.forEach((group, section) => {
    const questions = allquestions.filter((slot) => slot.section === section);
    const list = document.querySelector(`#question-list-${section + 1}`);

    group.hidden = questions.length === 0;
    list.innerHTML = questions.map(renderquestion).join("");

    if (!questions.length) return;

    group.querySelector(".section-label").textContent = fulltest
        ? `AUDIO ${section + 1}`
        : "QUICK PRACTICE";

    group.querySelector("h3").textContent =
        `Questions ${questions[0].number}–${questions[questions.length - 1].number}`;

    group.querySelector(".question-group-instruction").textContent = fulltest
        ? `Answer the questions based on Audio ${section + 1}.`
        : "Answer the questions based on this recording.";
});

document.querySelector("#question-counter").textContent = `${allquestions.length} Questions`;
document.querySelector("#question-summary").textContent = `1–${allquestions.length} of ${allquestions.length}`;

const mapbuttons = [...document.querySelectorAll(".question-map-item")];

mapbuttons.forEach((button, index) => {
    const slot = allquestions[index];

    button.hidden = !slot;
    button.classList.remove("answered", "current");

    if (!slot) return;

    button.textContent = slot.number;
    button.setAttribute("aria-label", `Go to question ${slot.number}`);

    button.addEventListener("click", () => {
        document.querySelector(`#question-${slot.index}`).scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        mapbuttons.forEach((item) => item.classList.remove("current"));
        button.classList.add("current");
    });
});

function hasanswer(index) {
    const answer = useranswers[index];

    if (Array.isArray(answer)) {
        return answer.length > 0;
    }

    return String(answer ?? "").trim() !== "";
}

const progresscount = document.querySelector("#progress-count");
const progressfill = document.querySelector("#progress-fill");
const answeredcount = document.querySelector("#answered-count");
const questionmain = document.querySelector("#question-main");

function updateprogress() {
    const answered = allquestions.filter((slot) => hasanswer(slot.index)).length;
    const total = allquestions.length;

    progresscount.textContent = `${answered} of ${total} questions`;
    answeredcount.textContent = `${answered} answered`;
    progressfill.style.width = `${total ? answered / total * 100 : 0}%`;

    allquestions.forEach((slot) => {
        mapbuttons[slot.index].classList.toggle("answered", hasanswer(slot.index));
    });

    questiongroups.forEach((group, section) => {
        const questions = allquestions.filter((slot) => slot.section === section);
        const answeredsection = questions.filter((slot) => hasanswer(slot.index)).length;
        const status = document.querySelector(`#section-status-${section + 1}`);

        status.textContent = `${answeredsection} of ${questions.length} answered`;
    });
}

function updateanswer(input) {
    if (sessionfinished) return;

    const index = Number(input.dataset.answerIndex);
    const slot = allquestions[index];

    if (!slot) return;

    if (slot.type === "multiple") {
        const boxes = [
            ...questionmain.querySelectorAll(`input[data-answer-index="${index}"]:checked`)
        ];

        const expected = expectedanswer(slot);
        const limit = Array.isArray(expected) ? expected.length : 1;

        if (boxes.length > limit) {
            input.checked = false;
        }

        useranswers[index] = [
            ...questionmain.querySelectorAll(`input[data-answer-index="${index}"]:checked`)
        ].map((box) => box.value);
    } else {
        useranswers[index] = input.value;
    }

    updateprogress();
}

questionmain.addEventListener("input", (event) => {
    if (event.target.matches('input[type="text"][data-answer-index]')) {
        updateanswer(event.target);
    }
});

questionmain.addEventListener("change", (event) => {
    if (event.target.matches('select[data-answer-index], input[type="radio"], input[type="checkbox"]')) {
        updateanswer(event.target);
    }
});

updateprogress();

function formattime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingseconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingseconds).padStart(2, "0")}`;
}

const listeningaudio = document.querySelector("#listening-audio");
const audioplay = document.querySelector("#audio-play");
const audioplaceholder = document.querySelector("#audio-placeholder");
const audiocontrols = document.querySelector("#audio-controls");
const audionote = document.querySelector("#audio-note-text");
const audiotrack = document.querySelector(".audio-track");
const audiotrackfill = document.querySelector("#audio-track-fill");
const audiocurrenttime = document.querySelector("#audio-current-time");
const audioduration = document.querySelector("#audio-duration");
const audioreplay = document.querySelector("#audio-replay");
const nextaudio = document.querySelector("#next-audio");

audionote.textContent = fulltest
    ? "Finish listening to the current recording to unlock the next audio."
    : "You can seek or replay this recording as you practise your answers.";

audiotrack.style.cursor = fulltest ? "default" : "pointer";
audiotrack.setAttribute("aria-disabled", String(fulltest));

function updateplaybutton() {
    const paused = listeningaudio.paused;

    audioplay.innerHTML = `<i class="fa-solid fa-${paused ? "play" : "pause"}"></i>`;
    audioplay.setAttribute("aria-label", paused ? "Play audio" : "Pause audio");
}

function playaudio() {
    if (sessionfinished || (fulltest && audiofinished)) return;

    listeningaudio.play().catch(() => {
        audionote.textContent = "The audio could not be played. Please check the recording file and path.";
    });
}

audioplay.addEventListener("click", () => {
    if (listeningaudio.paused) {
        playaudio();
    } else {
        listeningaudio.pause();
    }
});

listeningaudio.addEventListener("play", updateplaybutton);
listeningaudio.addEventListener("pause", updateplaybutton);

function updateaudioplayer() {
    const duration = listeningaudio.duration;
    const position = listeningaudio.currentTime;

    audiocurrenttime.textContent = formattime(position);
    audioduration.textContent = formattime(duration);

    const percentage = Number.isFinite(duration) && duration > 0
        ? position / duration * 100
        : 0;

    audiotrackfill.style.width = `${percentage}%`;
}

listeningaudio.addEventListener("timeupdate", updateaudioplayer);
listeningaudio.addEventListener("loadedmetadata", updateaudioplayer);
listeningaudio.addEventListener("durationchange", updateaudioplayer);

listeningaudio.addEventListener("canplay", () => {
    audioplaceholder.hidden = true;
    audiocontrols.hidden = false;
    updateaudioplayer();
});

listeningaudio.addEventListener("error", () => {
    audioplaceholder.hidden = false;
    audiocontrols.hidden = true;
    audionote.textContent = "The recording could not be loaded. Check the audio file name and path.";
});

audiotrack.addEventListener("click", (event) => {
    if (fulltest || sessionfinished || !Number.isFinite(listeningaudio.duration)) return;

    const track = audiotrack.getBoundingClientRect();
    if (!track.width) return;

    const position = Math.max(0, Math.min(1, (event.clientX - track.left) / track.width));

    listeningaudio.currentTime = position * listeningaudio.duration;
});

audioreplay.hidden = fulltest;
audioreplay.disabled = fulltest;

audioreplay.addEventListener("click", () => {
    if (fulltest || sessionfinished) return;

    listeningaudio.currentTime = 0;
    audiofinished = false;
    playaudio();
});

document.querySelector("#audio-session-count").hidden = !fulltest;
document.querySelector("#audio-navigation-status").hidden = !fulltest;
nextaudio.hidden = !fulltest;

function setaudio(index) {
    listeningaudio.pause();

    currentaudioindex = index;
    audiofinished = false;

    const recording = recordings[index];
    const questions = allquestions.filter((slot) => slot.section === index);

    listeningaudio.src = recording.audio;
    listeningaudio.load();

    document.querySelector("#audio-title").textContent = recording.title;

    document.querySelector("#audio-question-range").textContent =
        `Questions ${questions[0].number}–${questions[questions.length - 1].number}`;

    audioplaceholder.hidden = false;
    audiocontrols.hidden = true;
    audioplay.disabled = false;

    audiotrackfill.style.width = "0%";
    audiocurrenttime.textContent = "0:00";
    audioduration.textContent = "0:00";

    nextaudio.disabled = true;

    if (fulltest) {
        const label = `Audio ${index + 1} of ${recordings.length}`;

        document.querySelector("#current-section").textContent = label;
        document.querySelector("#audio-session-count").textContent = label.toUpperCase();
        document.querySelector("#audio-navigation-status").textContent = label;

        nextaudio.hidden = index === recordings.length - 1;
    }
}

listeningaudio.addEventListener("ended", () => {
    audiofinished = true;
    updateplaybutton();

    if (fulltest) {
        audioplay.disabled = true;
        nextaudio.disabled = currentaudioindex === recordings.length - 1;
    }
});

nextaudio.addEventListener("click", () => {
    if (!fulltest || !audiofinished || sessionfinished) return;
    if (currentaudioindex === recordings.length - 1) return;

    setaudio(currentaudioindex + 1);

    questiongroups[currentaudioindex].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

setaudio(0);

const sessiontimer = document.querySelector("#session-timer");

if (fulltest) {
    const endtime = sessionstarttime + 60 * 60 * 1000;

    sessiontimer.textContent = "60:00";

    timerinterval = setInterval(() => {
        const remaining = Math.max(0, Math.ceil((endtime - Date.now()) / 1000));

        sessiontimer.textContent = formattime(remaining);

        if (remaining === 0) {
            finishsession();
        }
    }, 1000);
}

function normalizetext(value) {
    return String(value ?? "")
        .trim()
        .toLowerCase()
        .replace(/[.,!?;:]/g, "")
        .replace(/\s+/g, " ");
}

function choicecorrect(index, expected, options) {
    if (expected === null || expected === undefined || expected === "") {
        return false;
    }

    if (typeof expected === "object") {
        expected = expected.value ??
            expected.id ??
            expected.letter ??
            expected.answer ??
            expected.text ??
            expected.label;
    }

    if (typeof expected === "number") {
        return index === expected;
    }

    const option = options[index];

    if (option === undefined) return false;

    const answer = normalizetext(expected);
    const text = normalizetext(optiontext(option, index));

    if (answer === String(index) || answer === text) {
        return true;
    }

    if (option && typeof option === "object") {
        const values = [option.value, option.id, option.letter, option.key, option.code];

        if (values.some((value) => value !== undefined && normalizetext(value) === answer)) {
            return true;
        }
    }

    return /^[a-z]$/.test(answer) && index === answer.charCodeAt(0) - 97;
}

function iscorrect(slot) {
    if (!hasanswer(slot.index)) return false;

    const answer = useranswers[slot.index];
    const expected = expectedanswer(slot);

    if (slot.type === "form") {
        const accepted = Array.isArray(expected) ? expected : [expected];

        return accepted.some((value) => {
            return normalizetext(value) === normalizetext(answer);
        });
    }

    const options = getoptions(slot);

    if (slot.type === "multiple") {
        const correct = Array.isArray(expected) ? expected : [expected];

        if (answer.length !== correct.length) return false;

        return correct.every((value) => {
            return answer.some((selected) => choicecorrect(Number(selected), value, options));
        });
    }

    return choicecorrect(Number(answer), expected, options);
}

function answertext(slot, answer) {
    if (
        answer === undefined ||
        answer === null ||
        answer === "" ||
        (Array.isArray(answer) && answer.length === 0)
    ) {
        return "Not answered";
    }

    if (slot.type === "form") {
        return String(answer);
    }

    const options = getoptions(slot);
    const answers = Array.isArray(answer) ? answer : [answer];

    return answers.map((value) => {
        const index = Number(value);

        return options[index] === undefined
            ? String(value)
            : optiontext(options[index], index);
    }).join("; ");
}

function correctanswertext(slot) {
    const expected = expectedanswer(slot);
    const answers = Array.isArray(expected) ? expected : [expected];

    if (!answers.length || expected === "") return "No answer provided";
    if (slot.type === "form") return answers.join(" / ");

    const options = getoptions(slot);

    return answers.map((answer) => {
        const index = options.findIndex((option, number) => {
            return choicecorrect(number, answer, options);
        });

        return index === -1 ? String(answer) : optiontext(options[index], index);
    }).join("; ");
}

function answerstatus(slot) {
    if (!hasanswer(slot.index)) return "unanswered";

    return iscorrect(slot) ? "correct" : "incorrect";
}

const answerreviewlist = document.querySelector("#answer-review-list");
const reviewtotal = document.querySelector("#review-total");

function renderreview(filter = "all") {
    const questions = allquestions.filter((slot) => {
        return filter === "all" || answerstatus(slot) === filter;
    });

    reviewtotal.textContent =
        `${questions.length} ${questions.length === 1 ? "answer" : "answers"} shown`;

    if (!questions.length) {
        answerreviewlist.innerHTML = '<p class="review-empty">There are no answers in this category.</p>';
        return;
    }

    answerreviewlist.innerHTML = questions.map((slot) => {
        const status = answerstatus(slot);

        return `
            <article class="answer-review-card ${status}">
                <div class="answer-review-card-heading">
                    <span class="question-number">${slot.number}</span>
                    <span class="answer-review-status">${status[0].toUpperCase() + status.slice(1)}</span>
                </div>
                <p class="answer-review-question">${escapehtml(slot.prompt || `Question ${slot.number}`)}</p>
                <div class="answer-review-detail">
                    <span>Your answer</span>
                    <strong>${escapehtml(answertext(slot, useranswers[slot.index]))}</strong>
                </div>
                ${status === "correct" ? "" : `
                    <div class="answer-review-detail">
                        <span>Correct answer</span>
                        <strong>${escapehtml(correctanswertext(slot))}</strong>
                    </div>
                `}
            </article>
        `;
    }).join("");
}

const historykey = "ielts-preplab-listening-history";

function savehistory(result) {
    try {
        let history = JSON.parse(localStorage.getItem(historykey) || "[]");

        if (!Array.isArray(history)) {
            history = [];
        }

        history.unshift(result);
        localStorage.setItem(historykey, JSON.stringify(history.slice(0, 50)));
    } catch (error) {
        console.warn("Listening history could not be saved in this browser.");
    }
}

function finishsession() {
    if (sessionfinished) return;

    sessionfinished = true;
    clearInterval(timerinterval);
    listeningaudio.pause();

    const total = allquestions.length;
    const correct = allquestions.filter((slot) => iscorrect(slot)).length;
    const answered = allquestions.filter((slot) => hasanswer(slot.index)).length;
    const incorrect = answered - correct;
    const accuracy = total ? Math.round(correct / total * 100) : 0;

    document.querySelector("#final-score").textContent = correct;
    document.querySelector("#total-score").textContent = `/ ${total}`;
    document.querySelector("#correct-count").textContent = correct;
    document.querySelector("#incorrect-count").textContent = incorrect;
    document.querySelector("#accuracy-score").textContent = `${accuracy}%`;

    const scoremessage = document.querySelector("#score-message");

    if (accuracy >= 80) {
        scoremessage.textContent = "Excellent work. Keep practising to make your progress consistent.";
    } else if (accuracy >= 60) {
        scoremessage.textContent = "Good effort. Review the answers you missed and keep practising.";
    } else {
        scoremessage.textContent = "Every session helps. Review the answers and try another practice set.";
    }

    document.querySelector("#results-title").textContent = fulltest
        ? "Listening Test Complete"
        : "Quick Practice Complete";

    document.querySelector("#results-description").textContent =
        `You answered ${correct} of ${total} questions correctly. Review your answers below.`;

    savehistory({
        id: Date.now(),
        mode: selectedmode,
        title: fulltest ? "Full Listening Test" : "Quick Listening Practice",
        completedAt: new Date().toISOString(),
        durationSeconds: Math.round((Date.now() - sessionstarttime) / 1000),
        score: correct,
        total,
        correct,
        incorrect,
        unanswered: total - answered,
        accuracy,
        answers: allquestions.map((slot) => ({
            number: slot.number,
            question: slot.prompt,
            yourAnswer: answertext(slot, useranswers[slot.index]),
            correctAnswer: correctanswertext(slot),
            status: answerstatus(slot)
        }))
    });

    document.querySelector("#practice-screen").hidden = true;
    document.querySelector("#results-screen").hidden = false;

    document.querySelectorAll(".review-filter-button").forEach((button) => {
        button.classList.toggle("active", button.dataset.filter === "all");
    });

    renderreview();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelector("#finish-session").addEventListener("click", finishsession);

const reviewbuttons = document.querySelectorAll(".review-filter-button");

reviewbuttons.forEach((button) => {
    button.addEventListener("click", () => {
        reviewbuttons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        renderreview(button.dataset.filter);
    });
});

document.querySelector("#try-again").addEventListener("click", () => {
    window.location.reload();
});