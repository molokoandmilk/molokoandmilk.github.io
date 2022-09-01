const productsBtn = document.querySelectorAll('.product_btn');
const cartProductList = document.querySelector('.cart-content_list');
const cart = document.querySelector('.cart');
const cartQuantity = document.querySelector('.cart_quantity');
const fullPrice = document.querySelector('.fullprice');
let price = 0;
const randomId = () =>{
    return Math.random().toString(36).substring(2,15) + Math.random().toString(36).substring(2,15);
};
const priceWithoutSpaces = (str) =>{
    return str.replace(/\s/g, '');
};
const normalPrice = (str) =>{
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1');
};
const plusFullPrice =(currentPrice)=>{
    return price+=currentPrice;
};
const minusFullPrice =(currentPrice)=>{
    return price-=currentPrice;
};
const  printQuantity =()=>{
    let length = cartProductList.querySelector('.cart-content_item').children.length;
    cartQuantity.textContent = length;
    length > 0 ? cart.classList.add('active') :  cart.classList.remove('active')
}
const printFullPrice =()=>{
    fullPrice.textContent = `${normalPrice(price)}p`;
};
const generateCartproduct = (img, title, price, id) =>{
    return`

     <li class="cart-content_item">
      <div class="cart-content-product cart-product" data-guid="${id}">
        <img src="${img}" alt="флаг" class="cart-product_img">
        <div class="cart-product-text">
          <h3 class="cart-product_title">${title}</h3>
          <span class="cart-product-price">${price}p</span>
        </div> 
        <button class="cart-product-delete">
         <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
     </li>
    `;
}
const deleteProducts = (productParent)=>{
    let id = productParent.querySelector('.cart-product').dataset.guid;
    document.querySelector(`.product[data-guid="${id}"]`).querySelector('.product_btn').disabled = false;
    let currentPrice = parseInt(priceWithoutSpaces(productParent.querySelector('.cart-product-price').textContent));
    minusFullPrice(currentPrice);
    printFullPrice();
    productParent.remove();
    printQuantity();

}
productsBtn.forEach(el =>{
    el.closest('.product').setAttribute('data-guid', randomId());
    el.addEventListener('click', (e)=>{
        let self = e.currentTarget;
        let parent = self.closest('.product');
        let id = parent.dataset.guid;
        let img = parent.querySelector('img').getAttribute('src');
        let title = parent.querySelector('.product_title'). textContent;
        let priceNumber = parseInt(priceWithoutSpaces(parent.querySelector('.product-price_current').textContent));
        plusFullPrice(priceNumber)
        cartProductList.querySelector('.cart-content_item').insertAdjacentHTML('afterbegin', generateCartproduct(img, title, priceNumber, id));
        printFullPrice();
        printQuantity()
        self.disabled = true;
    });
});
cartProductList.addEventListener('click', (e)=>{
    if(e.target.classList.contains('cart-product-delete')){
        deleteProducts(e.target.closest('.cart-content_item'));
    }
})
