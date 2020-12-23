function criaBtn() {
  return document.createElement("button");
}

function criaBotoesComNomes(listaDeNomes) {
  var listaAuxilar = [];
  for (var i = 0; i < listaDeNomes.length; i++) {
    let nome = listaDeNomes[i];
    var btn = criaBtn();
    btn.textContent = nome;
    btn.onclick = function () {
      alert(nome);
    };
    listaAuxilar.push(btn);
  }
  return listaAuxilar;
}

function appendBtnNoBody(listaDeBotoes) {
  for (var index = 0; index < listaDeBotoes.length; index++) {
    var btn = listaDeBotoes[index];
    document.body.append(btn);
  }
}

var listaDeNomes = ["Léo", "Vitor", "Paulo", "Thales"];
var listaDeBotoes = criaBotoesComNomes(listaDeNomes);
appendBtnNoBody(listaDeBotoes);
