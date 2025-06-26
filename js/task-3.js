const inputElem = document.querySelector("#name-input");
// console.log(inputElem);
const outputElem = document.querySelector("#name-output");
// console.log(outputElem);

function inputs(e) {
  outputElem.textContent = e.currentTarget.value.trim() || "Anonymous";
}

inputElem.addEventListener("input", inputs);
console.log(inputElem.value);

// Або можна передавати так як окрему колбек-функцію в прослуховувач як в lms,
// але краще функцію окремо і передати її в прослуховувач а то раптом потім захочу
// видалити цей прослуховувач і скористатися іншим. Так як на одному елементі може
// бути безліч прослуховувачів одночасно.

// (e) => {
//   outputElem.textContent = e.currentTarget.value.trim() || "Anonymous";
// };
