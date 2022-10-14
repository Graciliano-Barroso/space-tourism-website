let toggle = document.getElementById('toggle');
let botaoMenu = document.querySelector(".menu-hamburger");
let menuLateral = document.querySelector(".side-menu");

toggle.onclick = function(){
    toggle.classList.toggle('active');
}

botaoMenu.addEventListener('click', ()=> {
    menuLateral.classList.toggle('side-menu-ativo');
});