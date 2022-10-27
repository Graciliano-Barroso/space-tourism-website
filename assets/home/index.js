
let toggle = document.getElementById('toggle');
let buttonMenu = document.querySelector("#toggle");


toggle.onclick = function(){
    toggle.classList.toggle('active');
}

buttonMenu.addEventListener('click', ()=> {
    let sideMenu = document.querySelector(".side-menu");
    sideMenu.classList.toggle('side-menu-ativo');
});