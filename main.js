let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let social = document.querySelector(".social");

menu.addEventListener("click", function (){
    navbar.classList.toggle("active");
    social.classList.toggle("active");
});

window.onscroll = () => {
    navbar.classList.remove("active");
    social.classList.remove("active");
};