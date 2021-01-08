/**
 * @description Essa função recebe o nome de um elemento e retornar o elemento html
 * @param {String} elementName
 */
function createElement(elementName) {
  const element = document.createElement(elementName);
  return element;
}

function createElements(qtd, elementName) {
  const auxiliar = [];
  for (let index = 0; index < qtd; index++) {
    const element = createElement(elementName);
    auxiliar.push(element);
  }
  return auxiliar;
}

/**
 * @param {String} name 
 * @param {HTMLElement} button 
 */
function addTextToButton(name, button){
  button.textContent = name;
}

/**
 * @param {String[]} nameList
 * @param {HTMLElement[]} buttonList
 */
function addTextToButtons(nameList, buttonList) {
  buttonList.forEach(function (button, index) {
    const name = nameList[index];
    addTextToButton(name, button);
  });
}

/**
 * @param {HTMLElement} container
 * @param {HTMLElement[]} data
 */
function insertToHtmlElement(container, data) {
  data.forEach(function (value) {
    container.appendChild(value);
  });
}

function addOnClickToButton(callback, button){
  button.onclick = callback;
}

const container = document.getElementById("container");
const buttons = createElements(2, "button");

addTextToButtons(["Opção1", "Opção2"], buttons);
addOnClickToButton(function(){
  console.log("Olá, sou o callback do botão 1");
}, buttons[0]);

addOnClickToButton(function(){
  console.log("Eu sou o callback do botão2");
}, buttons[1])

insertToHtmlElement(container, buttons);