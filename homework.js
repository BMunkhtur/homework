const colors = ["red", "blue", "green"];
let colorIndex = 0;
const body = document.getElementsByTagName("body")[0];
const divs = document.getElementsByClassName("box");

const change = () => {
    for (let i = 0; i < divs.length; i++){
        let color = getColor();
        divs[i].style.backgroundColor = color;
    }
}
const getColor = () => {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}
myBtn.addEventListener("click", change);
myBtn1.addEventListener("click", change);
myBtn2.addEventListener("click", change);