console.log('test');

const titleEL = document.querySelector("#productName");
const catEL = document.querySelector("#category");
const priceEL = document.querySelector("#productPrice");

const postData =  () => {
    fetch ("http://192.168.1.220:4040/product",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body:JSON.stringify({
        title: titleEL.value,
        category: catEL.value,
        price: priceEL.value,
        imageURL:'123',
        isSpeacial: true,
        days:'Monday',
    })
});
};
