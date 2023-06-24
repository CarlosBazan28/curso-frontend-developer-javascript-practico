const menuEmail = document.querySelector('.navbar-email'); //vincular elemento con una variable
const desktopMenu = document.querySelector('.desktop-menu'); //vincular elemento con una variable
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');

menuEmail.addEventListener('click', toggleDesktopMenu); //asignar el evento a ejecutar con la funcion a ejecutar
burgerMenuIcon.addEventListener('click', toggleMobileMenu); 

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //quitar o poner clase
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

