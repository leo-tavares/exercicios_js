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

var btnSaudacao = document.getElementById("btn-saudacao");
var userName = "";
btnSaudacao.onclick = function () {
	if (btnSaudacao.innerText === "Enviar") {
		var inputName = document.getElementById("input-name");
		if (!inputName.value) return;
		userName = inputName.value;
		var salutation = `Olá ${userName}! Bem vindo a bordo \u{1F6A2}`;

		var salutationElement = document.createElement("span");
		salutationElement.id = "user-name";
		salutationElement.style.marginRight = "0.25rem";
		salutationElement.innerText = salutation;

		inputName.remove();

		var parent = btnSaudacao.parentNode;
		parent.insertBefore(salutationElement, btnSaudacao);
		btnSaudacao.innerText = "Editar";
	} else if (btnSaudacao.innerText === "Editar") {
		var inputName = document.createElement("input");
		inputName.id = "input-name";
		inputName.type = "text";
		inputName.placeholder = "Qual é o seu nome?";
		inputName.style.marginRight = "0.25rem";
		inputName.value = userName;

		var userNameElement = document.getElementById("user-name");
		userNameElement.remove();

		var parent = btnSaudacao.parentNode;
		parent.insertBefore(inputName, btnSaudacao);
		btnSaudacao.innerText = "Enviar";
	}
};
