// Todos os alunos
var alunosMatriculados = ["a", "b", "c", "d", "e"];
var totalDeAlunosMatriculados = alunosMatriculados.length;
// Presença diária
var presencaSegunda = ["b", "d", "e"];
var presencaTerca = ["a", "b", "c"];
var presencaQuarta = ["a", "b", "e"];
var presencaQuinta = ["a", "b", "c", "d"];
var presencaSexta = ["a", "b", "c", "d", "e"];

var presencaSemana = [
  presencaSegunda,
  presencaTerca,
  presencaQuarta,
  presencaQuinta,
  presencaSexta,
];

function calculaMediaGeral(presencaSemana, totalDeAlunosMatriculados) {
  var total = [];
  for (var index = 0; index < presencaSemana.length; index++) {
    var presencaDiaria = presencaSemana[index];
    var mediaDiaria = calculaMediaDiaria(
      presencaDiaria.length,
      totalDeAlunosMatriculados
    );
    total.push(mediaDiaria);
  }
  return calculaMedia(total);
}

function calculaMediaDiaria(totalDeAlunosNoDia, totalDeAlunosMatriculados) {
  return calculaPorcentagem(totalDeAlunosNoDia, totalDeAlunosMatriculados);
}

function calculaPorcentagem(comparador, referencia) {
  return (comparador / referencia) * 100;
}

function calculaMedia(listaDeMedia) {
  var acc = 0;
  for (var index = 0; index < listaDeMedia.length; index++) {
    var media = listaDeMedia[index];
    acc += media;
  }
  var media = acc / listaDeMedia.length;
  return media;
}
