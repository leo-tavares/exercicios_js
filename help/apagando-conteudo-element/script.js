/**
 * @param {String} elementName
 */
function createElement(elementName) {
  return document.createElement(elementName);
}
/**
 * @param {HTMLElement} element
 */
function clearContentOfElement(element) {
  element.innerHTML = "";
}

var container = createElement("div");
container.style = {
    ...container.style
}


var button1 = createElement("button");
var button2 = createElement("button");
var clearButton = createElement("button");

button1.textContent = "Btn-1";
button2.textContent = "Btn-2";
clearButton.textContent = "Clear content"

clearButton.onclick = function(){
    //Pq funcriona com os dois?
    container.innerHTML = ""
    // container.innerText = ""
}


container.append(button1);
container.append(button2);




document.body.append(container);
document.body.append(clearButton);

