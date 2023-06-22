const menuEmail = document.querySelector('.navbar-email'); //vincular elemento con una variable
const desktopMenu = document.querySelector('.desktop-menu'); //vincular elemento con una variable

menuEmail.addEventListener('click', toggleDesktopMenu); //asignar el evento a ejecutar con la funcion a ejecutar

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //quitar o poner clase
}