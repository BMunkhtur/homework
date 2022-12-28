console.log("ECOMMERCE");
// All variables and DOM
const productList = document.querySelector(".productList");
const cartList = document.querySelector(".cartList");
const productsEvent = document.querySelector(".productsEvent");
const cartCount = document.querySelector(".cartCount");
const catog = document.querySelector("catog")
const cartPrice = document.querySelector(".cartPrice")

let allProducts = [];
let cartProducts = [];
let allcatog = []

const displayProduct = () => {
  productList.innerHTML = "";
  allProducts.forEach((product, idx) => {
    const productItem = `<div class="col-3 mb-5">
    <div class="card baraa"   style= "width:100%;">
        <img 
            style= "width:100%; height:200px;"
            src="${product.thumbnail}" alt="zurag">
    <div class="card-body text-center">
        <i class="fa-solid fa-code text-white"></i>
        <h5 class="card-title">${product.title}</h5>
        <p class="sale  text-success d-flex flex-row-reverse">${product.discountPercentage}% OFF</p>
        <p class="price text-dark d-flex flex-row" >$${product.price}</p>
        <p class="text-secondary d-flex flex-row text-truncate" >${product.description}</p>
        <div class="row">
            <div class="col-8 row">
                <span class="bi bi-star-fill text-warning col-1"></span>
                <span class="bi bi-star-fill text-warning col-1"></span>
                <span class="bi bi-star-fill text-warning col-1"></span>
                <span class="bi bi-star-half text-warning col-1"></span>
                <p class="rating col-4">${product.rating}</p>
            </div>
            <button onclick="addCart(${idx})"  class="btn btn-primary text-white col-4 addCart" >Сагслах</button>
         
        </div>
    </div>
    </div>
</div>`;
    productList.innerHTML += productItem;
  });
};

const getProducts = async () => {
  const response = await fetch("https://dummyjson.com/products");
  const data = await response.json();
  allProducts = data.products;
  displayProduct();
  displayCart();
};

getProducts();

const addCart = (productId)=> {
  const findIndx = cartProducts.findIndex((item)=>item.id === productId)
  if(findIndx > -1){
cartProducts[findIndx].count += 1;

  }else {
      const findIndex = allProducts.findIndex((item)=>item.id === productId)

      const newBaraa = {count: 1, ...allProducts[findIndex]  }

      cartProducts.push(newBaraa);
    } 
  cartCount.innerText = cartProducts.length;
  displayCart();
};


const calculateCartPrice = () => {
  const sumPrice = 0;
  for(product of cartProducts){
    sumPrice = sumPrice + product.price * product.count;
  }
  return sumPrice; 
}

const displayCart = () => {
  cartList.innerHTML = "";
  for (product of cartProducts) {
    const cartItem = `
        <div class="d-flex align-items-center mb-5 border border-primary border-2">
            <div class="flex-shrink-0">
              <img
                src="${product.thumbnail}"
                class="img-fluid"
                style="width: 150px"
                alt="Generic placeholder image"
              />
            </div>
            <div class="flex-grow-1 ms-3">
              <button onclick="ust(this)" class="btn float-end text-black">
               <i class="fas fa-times"></i>
              </button>
              <h5 class="text-dark">${product.title}</h5>
              <h6 style="color: #9e9e9e">Brand:${product.brand}</h6>
              <div class="d-flex align-items-center">
                <p class="fw-bold mb-0 me-5 pe-3">$${product.price}</p>
                <div class="countnumber">
                  <div class='counter'>
                    <div class='down btn bg-dark text-white' onclick='decreaseCount(event,this, ${product.id})'>- </div>
                    <input type='text' class="bg-dark text-white zagwar btn" value="${product.count}">
                    <div class='up btn bg-dark text-white' onclick='increaseCount(event, this)'>+</div>
                  </div>
                </div>
              </div>
            </div>
        </div>`;
    cartList.innerHTML += cartItem;
  }
  const price = calculateCartPrice();
  cartPrice.innerText = `$${price}`;
};

const ust = (e,productId) => {
  let parent = e.parentNode.parentNode.parentNode;
  let child = e.parentNode.parentNode;
  parent.removeChild(child);

  const findIndx = cartProducts.findIndex((item)=>item.id === productId)
  cartCount.splice(findIndx,1);
  cartCount.innerText = cartProducts.length;

  displayCart();
};



function increaseCount(e, el) {
  var input = el.previousElementSibling;
  var value = parseInt(input.value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  input.value = value;
}
function decreaseCount(e, el) {
  var input = el.nextElementSibling;
  var value = parseInt(input.value, 10);
  if (value > 1) {
    value = isNaN(value) ? 0 : value;
    value--;
    input.value = value;
  }
}
