let counterValue = 0;
const counterSpan = document.querySelector("#value");
const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
increment.addEventListener("click", onInkrementClick);
decrement.addEventListener("click", onDecrementClick);

function onInkrementClick() {
  counterValue += 1;
  counterSpan.textContent = counterValue;
}
function onDecrementClick() {
  counterValue -= 1;
  counterSpan.textContent = counterValue;
}
