const myMenu = document.querySelector(".myMenu");
const menu = document.querySelector(".dropMenu");
const modal = document.querySelector(".modal");

function haddleMenuDrop(){
    menu.classList.toggle("hidden");
}

function closeMenu(event){
    if(event.target !== modal){
        menu.classList.add("hidden");
    } 
}

myMenu.addEventListener("click", haddleMenuDrop);

window.addEventListener("click", closeMenu);

