/**
 * @param {string} textoPrincipal Texto principal do menu
 * @param {string[]} opcoes Lista de texto para ser usada como opções
 * @param {boolean} retornaInfo Caso seja verdadeiro, o prompt será usado no lugar do alert
 */
function exibeMenu(textoPrincipal, opcoes, retornaInfo) {
  var conteudoDoAlert = `${textoPrincipal}\n`;
  for (var index = 0; index < opcoes.length; index++) {
    var opcao = opcoes[index];
    var numeroDaOpcao = index + 1; // cuidado com  ++, pesquise sobre pré e pós incremento
    conteudoDoAlert += `${numeroDaOpcao} - ${opcao}\n`;
  }
  var action;

  if (retornaInfo) {
    action = prompt;
  } else {
    action = alert;
  }

  return action(conteudoDoAlert);
}

var textoPrincipal = "Esse é o texto principal do menu informativo";
var subMenu = [
  "Oi! Eu sou sua primeira opção",
  "Eu sou a segunda",
  "E eu sou a terceira opção",
];
exibeMenu(textoPrincipal, subMenu);

var respostaDoUsuario = exibeMenu(textoPrincipal, subMenu, true);

console.log(respostaDoUsuario);
