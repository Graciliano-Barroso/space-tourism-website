
let toggle = document.getElementById('toggle');
let buttonMenu = document.querySelector(".menu-hamburger");
let sideMenu = document.querySelector(".side-menu");


toggle.onclick = function(){
    toggle.classList.toggle('active');
}

buttonMenu.addEventListener('click', ()=> {
    sideMenu.classList.toggle('side-menu-ativo');
});