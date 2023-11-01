const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const ingredientsList = document.querySelector("#ingredients");
const ingredientArr = [];
for (const ingredient of ingredients) {
  const listItem = document.createElement("li");

  listItem.textContent = ingredient;
  ingredientArr.push(listItem);
  listItem.classList.add("item");
}
ingredientsList.append(...ingredientArr);
