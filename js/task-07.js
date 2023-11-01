const sizeElem = document.getElementById("font-size-control");
const textElem = document.getElementById("text");

sizeElem.addEventListener("input", onSizeElemChange);

function onSizeElemChange(event) {
  const size = event.target.value;
  textElem.style.fontSize = `${size}px`;
}
