import "./style.css";

const burgerBtn = document.querySelector("#js-menu-btn");
burgerBtn.addEventListener("click", closeBurgerMenu);
const mobMenu = document.querySelector(".nav__burger-wrapper");
const wrapper = document.querySelector("#wrapper");

function closeBurgerMenu() {
    if(mobMenu.classList.contains("hidden")){
        mobMenu.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    } else if(!mobMenu.classList.contains("hidden")){
        mobMenu.classList.add('hidden'); 
        document.body.style.overflow = '';

    }
}

document.addEventListener("click", function(event) {
    var menuIcon = document.querySelector(".burger_icon");
    var clickedInsideMenu = mobMenu.contains(event.target); 
    var clickedOnMenuIcon = burgerBtn.contains(event.target); 

    if (!clickedInsideMenu && !clickedOnMenuIcon) {
        mobMenu.classList.add('hidden'); 
        document.body.style.overflow = '';
    }
});


