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
    const productItem = ` <table class="table productList">
    <thead>
       
      <tr>
        <th scope="col">#</th>
        <th scope="col">Бүтээглэхүүний нэр</th>
        <th scope="col">Үнэ</th>
        <th scope="col">Ангилал</th>
        <th scope="col">Онцгой бараа эсэх</th>
        <th scope="col">Үйлдлүүд</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <td>-</td>
        <th scope="col"><button type="button" class="col btn btn-primary">Засварлах</button></th><th scope="col"><button type="button" class="col btn btn-danger">Устгах</button></th>
      </tr>
    </tbody>
  </table>`;
    productList.innerHTML += productItem;
  });
};

const getProducts = async () => {
  const response = await fetch("http://192.168.1.220:4040/product");
  const data = await response.json(); console.log(data)
  allProducts = data.product;
  displayProduct();
  displayCart();
};

getProducts();


