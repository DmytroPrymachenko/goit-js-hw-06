const formElem = document.querySelector("#name-input");
const colorElem = document.querySelector("#name-output");

formElem.addEventListener("input", onformElemInput);

function onformElemInput() {
  const inputValue = formElem.value.trim();
  colorElem.textContent = inputValue || "Anonymous";
}
