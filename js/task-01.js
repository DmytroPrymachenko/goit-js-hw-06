const categorialList = document.querySelector("#categories");
const categiriItem = categorialList.querySelectorAll(".item");
console.log(categiriItem);

function taskCategori(item) {
  console.log("Number of categories:", item.length);

  item.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li").length;

    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
  });
}
taskCategori(categiriItem);
