/**
 * @description by stackoverflow
 */
function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/**
 * @param {String} tag Html tag name
 * @param {String} id unique identifier
 */
function createElement(tag, id) {
  const element = document.createElement(tag);
  element.id = id;
  element.style.backgroundColor = getRandomColor();
  return element;
}
/**
 * @param {HTMLElement} parent
 * @param {HTMLElement} children
 */
function nestElements(parent, children) {
  parent.appendChild(children);
}

/**
 * @param {Number} numberOfElements
 * @param {String} tag
 */
function createNElements(numberOfElements, tag) {
  const aux = [];
  for (let index = 0; index < numberOfElements; index++) {
    aux.push(createElement("div", `${index}`));
  }
  return aux;
}

/**
 * @param {Function} action
 * @param {HTMLElement[]} elements
 */
function addOnclickToElements(action, elements) {
  elements.forEach((element) => (element.onclick = action));
}

/**
 * @description Essa função sera o callback dos elementos
 */
function logIdFromElement() {
  console.log(`Meu id é ${this.id}`);
}

const divs = createNElements(8, "div");
addOnclickToElements(logIdFromElement, divs);

for (let index = 0; index < divs.length - 1; index++) {
    const element = divs[index];
    const nextElement = divs[index + 1];
    nestElements(element, nextElement);
}

const outsideElement = divs[0];

document.body.appendChild(outsideElement);

