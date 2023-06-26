const menuEmail = document.querySelector('.navbar-email'); //vincular elemento con una variable
const desktopMenu = document.querySelector('.desktop-menu'); //vincular elemento con una variable
const burgerMenuIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carritoIcon = document.querySelector('.navbar-shopping-cart'); 
const productDetail = document.querySelector('.product-detail');
const cardsContainer = document.querySelector('.cards-container');
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

const productList = [];
productList.push({
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
});
productList.push({
    name: 'Laptop',
    price: 300,
    img: 'https://img.global.news.samsung.com/mx/wp-content/uploads/2019/01/Notebook-9-Pro-3.jpg'
});
productList.push({
    name: 'Iphone',
    price: 300,
    img: 'https://cdn.shopify.com/s/files/1/0568/4697/5035/products/IMG-7325616_823x.jpg?v=1663002961'
});

/*
<div class="product-card">
  <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
  <div class="product-info">
     <div>
       <p>$120,00</p>
       <p>Bike</p>
     </div>
     <figure>
       <img src="./icons/bt_add_to_cart.svg" alt="">
     </figure>
  </div>
</div>
*/

for (product of productList){ // for (nombre de cada posicion del array of array) in para saber el indice
  const productCard = document.createElement('div'); //Crear elemento html 
  productCard.classList.add('product-card'); //agregar una clase con su nombre
  
  const img = document.createElement('img');
  img.setAttribute('src', product.img);  //insercion del atributo src
 
  const productInfo = document.createElement('div'); 
  productInfo.classList.add('product-info'); 

  const productInfoDiv = document.createElement('div'); 
 
  const productPrice = document.createElement('p'); 
  productPrice.innerText = '$' + product.price;
  const productName = document.createElement('p'); 
  productName.innerText = product.name;

  const productInfoFigure = document.createElement('figure'); 
  const productImgCart = document.createElement('img'); 
  productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

  productInfoFigure.append(productImgCart); // meter a su padre
  productInfoDiv.append(productPrice, productName);

  productInfo.append(productInfoDiv, productInfoFigure);

  productCard.append(img, productInfo);
  
  cardsContainer.append(productCard);
}



