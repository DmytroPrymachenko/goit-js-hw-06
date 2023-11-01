const userNameElem = document.querySelector("#validation-input");

userNameElem.addEventListener("blur", onNameElemBlur);
userNameElem.addEventListener("focus", onNameElemFocus);

function onNameElemBlur() {
  const name = event.target.value;
  const expectedLength = +event.target.dataset.length;

  if (name.length > expectedLength) {
    event.target.classList.add("valid");
  } else {
    event.target.classList.add("invalid");
  }
}
function onNameElemFocus(event) {
  event.target.classList.remove("valid");
  event.target.classList.remove("invalid");
}
