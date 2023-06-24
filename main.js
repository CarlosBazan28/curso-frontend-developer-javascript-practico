const menuEmail = document.querySelector('.navbar-email'); //vincular elemento con una variable
const desktopMenu = document.querySelector('.desktop-menu'); //vincular elemento con una variable
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart'); 
const productDetail = document.querySelector('.product-detail');

menuEmail.addEventListener('click', toggleDesktopMenu); //asignar el evento a ejecutar con la funcion a ejecutar
burgerMenuIcon.addEventListener('click', toggleMobileMenu); 
carritoIcon.addEventListener('click', toggleProductDetail);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive'); //quitar o poner clase
    productDetail.classList.add('inactive');
}

function toggleMobileMenu(){
   mobileMenu.classList.toggle('inactive');
   productDetail.classList.add('inactive');
 
}

function  toggleProductDetail(){
    productDetail.classList.toggle('inactive');
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}



