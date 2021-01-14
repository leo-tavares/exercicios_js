const chave = document.getElementById("chave");
const valor = document.getElementById("valor");

const btnSalvar = document.getElementById("salvar");

/**
 * @param {HTMLInputElement} input
 */
function getInputValue(input) {
  return input.value;
}

/**
 * @param {HTMLInputElement} input
 */
function clearInputValue(input) {
  input.value = "";
}

const dicionario = {};

btnSalvar.onclick = function () {
  dicionario[getInputValue(chave)] = getInputValue(valor);
  
  clearInputValue(chave);
  clearInputValue(valor);
  
  console.log(dicionario);
};
