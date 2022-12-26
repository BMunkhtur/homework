console.log("Ecommerce");

//all variables
const productList = document.querySelector(".productList")

let allProducts = []
const getProducts = async () => {
    const response = await fetch ("https://dummyjson.com/products")
    const data = await response.json();
    allProducts = data.products;
    displayProduct()
    console.log("Data:", data)
};
getProducts();

const displayProduct = () => {
    allProducts.forEach((product) => {
    const item =  `<div class="col-3">
        <div class="card"  style= "width:80%; m-1">
            <img 
                style= "width:100%; height:200px;"
                src="${product.thumbnail}" alt="zurag">
        <div class="card-body text-center">
            <i class="fa-solid fa-code text-white"></i>
            <h5 class="card-title">${product.title}</h5>
            <p class="sale  text-success d-flex flex-row-reverse">12.96% OFF</p>
            <p class="price text-dark d-flex flex-row" >$549.00</p>
            <p class="text-secondary d-flex flex-row" >${product.description}</p>
            <div class="row">
                <div class="col-8 row">
                    <span class="fa col-1 fa-star"></span>
                    <span class="fa col-1 fa-star"></span>
                    <span class="fa col-1 fa-star"></span>
                    <span class="fa col-1 fa-star"></span>
                    <span class="fa col-1 fa-star"></span>
                    <p class="rating col-4">4.69</p>
                </div>
                <a href="#" class="btn bg-dark text-white col-4"> Watch</a>
            </div>
        </div>
        </div>
    </div>`
    productList.innerHTML += item;
   });

}
// const arr = [1, 2 ,3 ,4];
// const newArr = arr.map((a) => {
//     return a * 3
// })
// console.log(newArr)
displayProduct();

