const btnElem = document.querySelector(".change-color");
// console.log(btnElem);
const colorFon = document.querySelector(".color");
// console.log(colorFon);
const body = document.body;
// console.log(body);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnElem.addEventListener("click", changeColor);

function changeColor() {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorFon.textContent = randomColor;
}
