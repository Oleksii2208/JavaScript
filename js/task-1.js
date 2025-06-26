const category = document.querySelectorAll("h2");
const elem = document.querySelectorAll(".item");

const totalCategory = `Number of categories: ${category.length}`;
console.log(totalCategory);

elem.forEach((item) => {
  const title = item.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const elements = item.querySelectorAll("li").length;
  console.log(`Elements: ${elements}`);
});
