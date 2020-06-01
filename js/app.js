var menuIcon = document.querySelector(".menu-icon"),
    menu = document.querySelector(".menu"),
    links = document.querySelectorAll(".menu-link");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("menu-open");
});

links.forEach( link => {
    link.addEventListener('click', () => {
        menu.classList.remove('menu-open');
    });
});


window.addEventListener('scroll', () => {
    var menuBar = document.querySelector("#nav-bar");
    var lines = document.querySelectorAll(".line");
    menuBar.classList.toggle('sticky', window.scrollY > 0);
});


var acorBnt1 = document.querySelector("#btn1"),
    acorBnt2 = document.querySelector("#btn2");

acorBnt1.addEventListener('click', () => {
    var text1 = document.querySelector(".acordeon-text1");
    text1.classList.toggle('acordeon-open');
});

acorBnt2.addEventListener('click', () => {
    var text2 = document.querySelector(".acordeon-text2");
    text2.classList.toggle('acordeon-open');
});