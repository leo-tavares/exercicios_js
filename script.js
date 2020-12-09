function getNumericInputValue() {
  var numericInput = document.getElementById("input-number");
  var inputValue = numericInput.value;
  return inputValue;
}

function setNumeticInputValue(value) {
  document.getElementById("input-number").value = value;
}

var btnDobra = document.getElementById("btn-dobrar");
btnDobra.onclick = function () {
  var result = getNumericInputValue() * 2;
  setNumeticInputValue(result);
};