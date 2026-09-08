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