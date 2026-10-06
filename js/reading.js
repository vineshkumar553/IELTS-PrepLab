const modebuttons = document.querySelectorAll("[data-mode]");

modebuttons.forEach((button) => {

    button.addEventListener("click", () => {

        const mode = button.dataset.mode;

        const sessionurl = `reading-session.html?mode=${mode}`;
        window.location.href = sessionurl;

    });

});

