const menuBurgerBtn = document.querySelector(".fa-bars");
const sideMenu = document.querySelector(".side-menu");
const closerBtn = document.querySelector(".closer-btn");

menuBurgerBtn.addEventListener("click", () => sideMenu.classList.toggle("active"));
closerBtn.addEventListener("click", () => sideMenu.classList.remove("active"));

