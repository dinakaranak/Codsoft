const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) =>{
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-3-line");
});

navLinks.addEventListener("click",(e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-3-line");
});

const scrollRevealOption = {
    distance: "50px",
    origin:"bottom",
    duration:1000,
};

//container
scrollRevealOption().reveal(".container_content h1",{
    ...scrollRevealOption,
});
scrollRevealOption().reveal(".container_content h2",{
    ...scrollRevealOption,
    delay:500,
});
scrollRevealOption().reveal(".container_content p",{
    ...scrollRevealOption,
    delay:1000,
});
scrollRevealOption().reveal(".socials",{
    ...scrollRevealOption,
    delay:1500,
});