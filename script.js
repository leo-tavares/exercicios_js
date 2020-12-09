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

var btnMetade = document.getElementById("btn-metade");
btnMetade.onclick = function () {
	var result = getNumericInputValue() / 2;
	setNumeticInputValue(result);
};

var btnPow = document.getElementById("btn-elevar-ao-quadrado");
btnPow.onclick = function () {
	var result = Math.pow(getNumericInputValue(), 2);
	setNumeticInputValue(result);
};

var btnSqrt = document.getElementById("btn-raiz-quadrada");
btnSqrt.onclick = function () {
	var result = Math.sqrt(getNumericInputValue(), 2);
	setNumeticInputValue(result);
};