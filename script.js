const menuBurgerBtn = document.querySelector(".fa-bars");
const sideMenu = document.querySelector(".side-menu");
const closerBtn = document.querySelector(".closer-btn");
menuBurgerBtn.addEventListener("click", handleClick);

function handleClick() {
    if (!sideMenu.classList.contains("active")) {
        sideMenu.classList.add("active");
    }
    else {
        sideMenu.classList.remove("active");
    }
}


closerBtn.addEventListener("click", handleClose);
function handleClose() {
    sideMenu.classList.remove("active");
}
