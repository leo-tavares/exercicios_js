var btn = document.getElementById("btn");
var msg = "Meu botão querido!!!";
btn.innerText = msg;

btn.addEventListener("mouseover", function() {
  btn.innerText = "Mouse por cima";
});

btn.addEventListener("mouseout", function() {
  btn.innerText = msg;
});

btn.addEventListener("mousedown", function() {
  btn.style.backgroundColor = "black";
  btn.style.color = "yellow";
});

btn.addEventListener("mouseup", function() {
  btn.style.backgroundColor = "";
  btn.style.color = "";
});
