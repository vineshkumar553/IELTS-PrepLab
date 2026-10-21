const urlparams = new URLSearchParams(window.location.search);
let mode = urlparams.get("mode");

if (mode !== "quick") {
    mode = "full";
}

const fulltest = mode === "full";
const sessionstarttime = Date.now();

const listeningdata = window.listeningdata;
const recordings = [];

if (fulltest) {
    for (let section = 1; section <= 4; section++) {
        const choices = listeningdata.full[`section${section}`];
        const random = Math.floor(Math.random() * choices.length);
        recordings.push(choices[random]);
    }
} else {
    const choices = listeningdata.quick;
    const random = Math.floor(Math.random() * choices.length);
    recordings.push(choices[random]);
}

const title = document.querySelector("#session-title");
title.textContent = fulltest
    ? "Full Listening Test"
    : "Quick Listening Practice";

const description = document.querySelector("#session-description");
description.textContent = fulltest
    ? "Complete all four sections and 40 questions in a full listening test."
    : "Practise with one recording and answer the questions at your own pace.";

const badge = document.querySelector("#session-badge span");
badge.textContent = fulltest
    ? "FULL TEST"
    : "QUICK TEST";

const overview = document.querySelector("#test-overview");
overview.hidden = !fulltest;

const progress = document.querySelector(".session-progress");
progress.hidden = !fulltest;

const progresslabel = document.querySelector("#progress-label");
progresslabel.textContent = "Your progress";

const allquestions = [];

recordings.forEach((recording, section) => {
    recording.questions.forEach(question => {
        let type = "mcq";

        if (question.type) {
            type = question.type.toLowerCase();
        } else if (Array.isArray(question.fields)) {
            type = "form";
        } else if (Array.isArray(question.items)) {
            type = "matching";
        } else if (Array.isArray(question.answers)) {
            type = "multiple";
        }

        let parts = [question];

        if (type === "form") {
            parts = question.fields || [];
        } else if (type === "matching") {
            parts = question.items || [];
        }

        const questiontext = question.question || question.prompt || question.text ||
            question.title || question.label || "";

        parts.forEach(part => {
            let prompt = part.question || part.prompt || part.text || part.title ||
                part.label || questiontext;

            if (type === "form" && part.label) {
                prompt = part.label;
            }

            let context = question.instruction || question.instructions || "";

            if (part !== question) {
                context = questiontext;
            }

            let options = part.options || question.options || part.choices || question.choices || [];

            if (!Array.isArray(options)) {
                options = Object.values(options);
            }

            const labels = options.map((option, index) => {
                if (typeof option !== "object" || option === null) {
                    return String(option);
                }

                return String(option.text ?? option.label ?? option.name ?? option.title ??
                    option.value ?? option.letter ?? `Option ${index + 1}`);
            });

            let answer = part.answer ?? question.answer ?? "";

            if (type === "multiple") {
                answer = question.answers ?? question.answer ?? [];
            }

            allquestions.push({
                index: allquestions.length,
                number: allquestions.length + 1,
                section: section,
                type: type,
                prompt: prompt,
                context: context,
                options: options,
                labels: labels,
                answer: answer
            });
        });
    });
});

function escapehtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

const questiongroups = document.querySelectorAll(".listening-question-group");

questiongroups.forEach((group, section) => {
    const questions = allquestions.filter(item => item.section === section);
    group.hidden = questions.length === 0;

    const list = document.querySelector(`#question-list-${section + 1}`);
    list.innerHTML = questions.map(item => {
        const index = item.index;
        let context = "";

        if (item.context && item.context !== item.prompt) {
            context = `<p class="question-context">${escapehtml(item.context)}</p>`;
        }

        let answers = "";

        if (item.type === "form") {
            answers = `
                <label class="question-answer-label" for="answer-${index}">Your answer</label>
                <input class="question-input" id="answer-${index}" type="text" data-answer-index="${index}" autocomplete="off">
            `;
        } else if (item.type === "matching") {
            answers = `
                <label class="question-answer-label" for="answer-${index}">Your answer</label>
                <select class="question-select" id="answer-${index}" data-answer-index="${index}">
                    <option value="">Choose an answer</option>
                    ${item.labels.map((label, number) => `
                        <option value="${number}">${escapehtml(label)}</option>
                    `).join("")}
                </select>
            `;
        } else {
            const multiple = item.type === "multiple";
            const amount = Array.isArray(item.answer) ? item.answer.length : 1;

            answers = `
                <div class="question-options${multiple ? " question-checkboxes" : ""}">
                    ${item.labels.map((label, number) => `
                        <label class="question-option" for="answer-${index}-${number}">
                            <input type="${multiple ? "checkbox" : "radio"}" id="answer-${index}-${number}" name="answer-${index}" value="${number}" data-answer-index="${index}">
                            <span>${escapehtml(label)}</span>
                        </label>
                    `).join("")}
                </div>
                ${multiple ? `<p class="question-hint">Choose ${amount} ${amount === 1 ? "answer" : "answers"}.</p>` : ""}
            `;
        }

        return `
            <article class="listening-question-card question-card" id="question-${index}">
                <div class="question-card-heading">
                    <span class="question-number">${item.number}</span>
                    <div class="question-card-content">
                        ${context}
                        <p class="question-prompt">${escapehtml(item.prompt || `Question ${item.number}`)}</p>
                    </div>
                </div>
                <div class="question-answer-area">${answers}</div>
            </article>
        `;
    }).join("");

    if (questions.length === 0) {
        return;
    }

    const label = group.querySelector(".section-label");
    label.textContent = fulltest ? `AUDIO ${section + 1}` : "QUICK PRACTICE";

    const heading = group.querySelector("h3");
    heading.textContent = `Questions ${questions[0].number}–${questions[questions.length - 1].number}`;

    const instruction = group.querySelector(".question-group-instruction");
    instruction.textContent = fulltest
        ? `Answer the questions based on Audio ${section + 1}.`
        : "Answer the questions based on this recording.";
});

const counter = document.querySelector("#question-counter");
counter.textContent = `${allquestions.length} Questions`;

const summary = document.querySelector("#question-summary");
summary.textContent = `1–${allquestions.length} of ${allquestions.length}`;

const mapbuttons = document.querySelectorAll(".question-map-item");

mapbuttons.forEach((button, index) => {
    const item = allquestions[index];

    button.hidden = !item;
    button.classList.remove("answered", "current");

    if (!item) {
        return;
    }

    button.textContent = item.number;
    button.setAttribute("aria-label", `Go to question ${item.number}`);

    button.addEventListener("click", () => {
        document.querySelector(`#question-${item.index}`).scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        mapbuttons.forEach(item => item.classList.remove("current"));
        button.classList.add("current");
    });
});

const useranswers = {};
let sessionfinished = false;

function updateprogress() {
    let answered = 0;

    allquestions.forEach(item => {
        const answer = useranswers[item.index];
        item.answered = Array.isArray(answer)
            ? answer.length > 0
            : String(answer ?? "").trim() !== "";

        if (item.answered) {
            answered++;
        }

        mapbuttons[item.index].classList.toggle("answered", item.answered);
    });

    const total = allquestions.length;
    const count = document.querySelector("#progress-count");
    count.textContent = `${answered} of ${total} questions`;

    const answeredlabel = document.querySelector("#answered-count");
    answeredlabel.textContent = `${answered} answered`;

    const fill = document.querySelector("#progress-fill");
    fill.style.width = `${total ? answered / total * 100 : 0}%`;

    questiongroups.forEach((group, section) => {
        const questions = allquestions.filter(item => item.section === section);
        const answeredsection = questions.filter(item => item.answered).length;

        const status = document.querySelector(`#section-status-${section + 1}`);
        status.textContent = `${answeredsection} of ${questions.length} answered`;
    });
}

const questionmain = document.querySelector("#question-main");
const answerinputs = questionmain.querySelectorAll("[data-answer-index]");

answerinputs.forEach(input => {
    const event = input.type === "text" ? "input" : "change";

    input.addEventListener(event, () => {
        if (sessionfinished) {
            return;
        }

        const index = Number(input.dataset.answerIndex);
        const item = allquestions[index];

        if (item.type === "multiple") {
            let checked = questionmain.querySelectorAll(`input[data-answer-index="${index}"]:checked`);
            const limit = Array.isArray(item.answer) ? item.answer.length : 1;

            if (checked.length > limit) {
                input.checked = false;
                checked = questionmain.querySelectorAll(`input[data-answer-index="${index}"]:checked`);
            }

            useranswers[index] = Array.from(checked, box => box.value);
        } else {
            useranswers[index] = input.value;
        }

        updateprogress();
    });
});

updateprogress();

function formattime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return "0:00";
    }

    const minutes = Math.floor(seconds / 60);
    const remainingseconds = Math.floor(seconds % 60);

    return `${minutes}:${String(remainingseconds).padStart(2, "0")}`;
}

const listeningaudio = document.querySelector("#listening-audio");
let currentaudioindex = 0;
let audiofinished = false;

const audionote = document.querySelector("#audio-note-text");
audionote.textContent = fulltest
    ? "Finish listening to the current recording to unlock the next audio."
    : "You can seek or replay this recording as you practise your answers.";

function updateplaybutton() {
    const paused = listeningaudio.paused;
    const button = document.querySelector("#audio-play");

    button.innerHTML = `<i class="fa-solid fa-${paused ? "play" : "pause"}"></i>`;
    button.setAttribute("aria-label", paused ? "Play audio" : "Pause audio");
}

function playaudio() {
    if (sessionfinished || (fulltest && audiofinished)) {
        return;
    }

    listeningaudio.play().catch(() => {
        const note = document.querySelector("#audio-note-text");
        note.textContent = "The audio could not be played. Please check the recording file and path.";
    });
}

const playbutton = document.querySelector("#audio-play");
playbutton.addEventListener("click", () => {
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

    const currenttime = document.querySelector("#audio-current-time");
    currenttime.textContent = formattime(position);

    const totaltime = document.querySelector("#audio-duration");
    totaltime.textContent = formattime(duration);

    let percentage = 0;

    if (Number.isFinite(duration) && duration > 0) {
        percentage = position / duration * 100;
    }

    const fill = document.querySelector("#audio-track-fill");
    fill.style.width = `${percentage}%`;
}

listeningaudio.addEventListener("timeupdate", updateaudioplayer);
listeningaudio.addEventListener("loadedmetadata", updateaudioplayer);
listeningaudio.addEventListener("durationchange", updateaudioplayer);

listeningaudio.addEventListener("canplay", () => {
    const placeholder = document.querySelector("#audio-placeholder");
    placeholder.hidden = true;

    const controls = document.querySelector("#audio-controls");
    controls.hidden = false;

    updateaudioplayer();
});

listeningaudio.addEventListener("error", () => {
    const placeholder = document.querySelector("#audio-placeholder");
    placeholder.hidden = false;

    const controls = document.querySelector("#audio-controls");
    controls.hidden = true;

    const note = document.querySelector("#audio-note-text");
    note.textContent = "The recording could not be loaded. Check the audio file name and path.";
});

const audiotrack = document.querySelector(".audio-track");
audiotrack.style.cursor = fulltest ? "default" : "pointer";
audiotrack.setAttribute("aria-disabled", String(fulltest));

audiotrack.addEventListener("click", event => {
    if (fulltest || sessionfinished || !Number.isFinite(listeningaudio.duration)) {
        return;
    }

    const track = audiotrack.getBoundingClientRect();

    if (!track.width) {
        return;
    }

    const position = Math.max(0, Math.min(1, (event.clientX - track.left) / track.width));
    listeningaudio.currentTime = position * listeningaudio.duration;
});

const replay = document.querySelector("#audio-replay");
replay.hidden = fulltest;
replay.disabled = fulltest;

replay.addEventListener("click", () => {
    if (fulltest || sessionfinished) {
        return;
    }

    listeningaudio.currentTime = 0;
    audiofinished = false;
    playaudio();
});

const audiocount = document.querySelector("#audio-session-count");
audiocount.hidden = !fulltest;

const audiostatus = document.querySelector("#audio-navigation-status");
audiostatus.hidden = !fulltest;

const nextaudio = document.querySelector("#next-audio");
nextaudio.hidden = !fulltest;

function setaudio(index) {
    listeningaudio.pause();
    currentaudioindex = index;
    audiofinished = false;

    const recording = recordings[index];
    listeningaudio.src = recording.audio;
    listeningaudio.load();

    const title = document.querySelector("#audio-title");
    title.textContent = recording.title;

    const questions = allquestions.filter(item => item.section === index);
    const range = document.querySelector("#audio-question-range");
    range.textContent = `Questions ${questions[0].number}–${questions[questions.length - 1].number}`;

    const placeholder = document.querySelector("#audio-placeholder");
    placeholder.hidden = false;

    const controls = document.querySelector("#audio-controls");
    controls.hidden = true;

    const playbutton = document.querySelector("#audio-play");
    playbutton.disabled = false;

    const fill = document.querySelector("#audio-track-fill");
    fill.style.width = "0%";

    const currenttime = document.querySelector("#audio-current-time");
    currenttime.textContent = "0:00";

    const duration = document.querySelector("#audio-duration");
    duration.textContent = "0:00";

    nextaudio.disabled = true;

    if (fulltest) {
        const label = `Audio ${index + 1} of ${recordings.length}`;

        const section = document.querySelector("#current-section");
        section.textContent = label;

        const count = document.querySelector("#audio-session-count");
        count.textContent = label.toUpperCase();

        const status = document.querySelector("#audio-navigation-status");
        status.textContent = label;

        nextaudio.hidden = index === recordings.length - 1;
    }
}

listeningaudio.addEventListener("ended", () => {
    audiofinished = true;
    updateplaybutton();

    if (fulltest) {
        const playbutton = document.querySelector("#audio-play");
        playbutton.disabled = true;
        nextaudio.disabled = currentaudioindex === recordings.length - 1;
    }
});

nextaudio.addEventListener("click", () => {
    if (!fulltest || !audiofinished || sessionfinished) {
        return;
    }

    if (currentaudioindex === recordings.length - 1) {
        return;
    }

    setaudio(currentaudioindex + 1);
    questiongroups[currentaudioindex].scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

setaudio(0);

let timerinterval;
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

function choicecorrect(index, expected, item) {
    if (expected === null || expected === undefined || expected === "") {
        return false;
    }

    if (typeof expected === "object") {
        expected = expected.value ?? expected.id ?? expected.letter ??
            expected.answer ?? expected.text ?? expected.label;
    }

    if (typeof expected === "number") {
        return index === expected;
    }

    const option = item.options[index];

    if (option === undefined) {
        return false;
    }

    const answer = normalizetext(expected);
    const text = normalizetext(item.labels[index]);

    if (answer === String(index) || answer === text) {
        return true;
    }

    if (option && typeof option === "object") {
        const values = [option.value, option.id, option.letter, option.key, option.code];

        if (values.some(value => value !== undefined && normalizetext(value) === answer)) {
            return true;
        }
    }

    return /^[a-z]$/.test(answer) && index === answer.charCodeAt(0) - 97;
}

let reviewanswers = [];

function renderreview(filter = "all") {
    const answers = reviewanswers.filter(item => {
        return filter === "all" || item.status === filter;
    });

    const total = document.querySelector("#review-total");
    total.textContent = `${answers.length} ${answers.length === 1 ? "answer" : "answers"} shown`;

    const list = document.querySelector("#answer-review-list");

    if (answers.length === 0) {
        list.innerHTML = '<p class="review-empty">There are no answers in this category.</p>';
        return;
    }

    list.innerHTML = answers.map(item => `
        <article class="answer-review-card ${item.status}">
            <div class="answer-review-card-heading">
                <span class="question-number">${item.number}</span>
                <span class="answer-review-status">${item.status[0].toUpperCase() + item.status.slice(1)}</span>
            </div>
            <p class="answer-review-question">${escapehtml(item.question || `Question ${item.number}`)}</p>
            <div class="answer-review-detail">
                <span>Your answer</span>
                <strong>${escapehtml(item.yourAnswer)}</strong>
            </div>
            ${item.status === "correct" ? "" : `
                <div class="answer-review-detail">
                    <span>Correct answer</span>
                    <strong>${escapehtml(item.correctAnswer)}</strong>
                </div>
            `}
        </article>
    `).join("");
}

function finishsession() {
    if (sessionfinished) {
        return;
    }

    sessionfinished = true;
    clearInterval(timerinterval);
    listeningaudio.pause();

    const total = allquestions.length;
    let correct = 0;
    let answered = 0;
    reviewanswers = [];

    allquestions.forEach(item => {
        const answer = useranswers[item.index];
        const expected = item.answer;
        const expectedanswers = Array.isArray(expected) ? expected : [expected];
        const hasanswer = Array.isArray(answer)
            ? answer.length > 0
            : String(answer ?? "").trim() !== "";

        let iscorrect = false;

        if (hasanswer) {
            answered++;

            if (item.type === "form") {
                iscorrect = expectedanswers.some(value => {
                    return normalizetext(value) === normalizetext(answer);
                });
            } else if (item.type === "multiple") {
                iscorrect = answer.length === expectedanswers.length && expectedanswers.every(value => {
                    return answer.some(selected => choicecorrect(Number(selected), value, item));
                });
            } else {
                iscorrect = choicecorrect(Number(answer), expected, item);
            }
        }

        if (iscorrect) {
            correct++;
        }

        let status = "unanswered";

        if (hasanswer) {
            status = iscorrect ? "correct" : "incorrect";
        }

        let youranswer = "Not answered";

        if (answer !== undefined && answer !== null && answer !== "" &&
            (!Array.isArray(answer) || answer.length > 0)) {
            if (item.type === "form") {
                youranswer = String(answer);
            } else {
                const selected = Array.isArray(answer) ? answer : [answer];
                youranswer = selected.map(value => {
                    const index = Number(value);
                    return item.options[index] === undefined ? String(value) : item.labels[index];
                }).join("; ");
            }
        }

        let correctanswer = "No answer provided";

        if (expectedanswers.length > 0 && expected !== "") {
            if (item.type === "form") {
                correctanswer = expectedanswers.join(" / ");
            } else {
                correctanswer = expectedanswers.map(value => {
                    const index = item.options.findIndex((option, number) => {
                        return choicecorrect(number, value, item);
                    });

                    return index === -1 ? String(value) : item.labels[index];
                }).join("; ");
            }
        }

        reviewanswers.push({
            number: item.number,
            question: item.prompt,
            yourAnswer: youranswer,
            correctAnswer: correctanswer,
            status: status
        });
    });

    const incorrect = answered - correct;
    const accuracy = total ? Math.round(correct / total * 100) : 0;

    const score = document.querySelector("#final-score");
    score.textContent = correct;

    const totalscore = document.querySelector("#total-score");
    totalscore.textContent = `/ ${total}`;

    const correctcount = document.querySelector("#correct-count");
    correctcount.textContent = correct;

    const incorrectcount = document.querySelector("#incorrect-count");
    incorrectcount.textContent = incorrect;

    const accuracyscore = document.querySelector("#accuracy-score");
    accuracyscore.textContent = `${accuracy}%`;

    const scoremessage = document.querySelector("#score-message");

    if (accuracy >= 80) {
        scoremessage.textContent = "Excellent work. Keep practising to make your progress consistent.";
    } else if (accuracy >= 60) {
        scoremessage.textContent = "Good effort. Review the answers you missed and keep practising.";
    } else {
        scoremessage.textContent = "Every session helps. Review the answers and try another practice set.";
    }

    const title = document.querySelector("#results-title");
    title.textContent = fulltest
        ? "Listening Test Complete"
        : "Quick Practice Complete";

    const description = document.querySelector("#results-description");
    description.textContent = `You answered ${correct} of ${total} questions correctly. Review your answers below.`;

    const result = {
        id: Date.now(),
        mode: mode,
        title: fulltest ? "Full Listening Test" : "Quick Listening Practice",
        completedAt: new Date().toISOString(),
        durationSeconds: Math.round((Date.now() - sessionstarttime) / 1000),
        score: correct,
        total: total,
        correct: correct,
        incorrect: incorrect,
        unanswered: total - answered,
        accuracy: accuracy,
        answers: reviewanswers
    };

    try {
        const key = "ielts-preplab-listening-history";
        let history = JSON.parse(localStorage.getItem(key) || "[]");

        if (!Array.isArray(history)) {
            history = [];
        }

        history.unshift(result);
        localStorage.setItem(key, JSON.stringify(history.slice(0, 50)));
    } catch {
        console.warn("Listening history could not be saved in this browser.");
    }

    const practice = document.querySelector("#practice-screen");
    practice.hidden = true;

    const results = document.querySelector("#results-screen");
    results.hidden = false;

    document.querySelectorAll(".review-filter-button").forEach(button => {
        button.classList.toggle("active", button.dataset.filter === "all");
    });

    renderreview();

    window.scrollTo({ top: 0, behavior: "smooth" });
}

const finish = document.querySelector("#finish-session");
finish.addEventListener("click", finishsession);

const reviewbuttons = document.querySelectorAll(".review-filter-button");

reviewbuttons.forEach(button => {
    button.addEventListener("click", () => {
        reviewbuttons.forEach(item => item.classList.remove("active"));
        button.classList.add("active");

        renderreview(button.dataset.filter);
    });
});

const again = document.querySelector("#try-again");
again.addEventListener("click", () => {
    window.location.reload();
});