function getCharCode(str) {
  var charCode = [];
  for (let index = 0; index < str.length; index++) {
    const code = str[index].charCodeAt();
    charCode.push(code);
  }
  return charCode;
}

function deslocaMenssagem(deslocamento, messagem) {
  var messagemDeslocada = [];
  for (let index = 0; index < messagem.length; index++) {
    const code = messagem[index];
    messagemDeslocada.push(code + deslocamento);
  }
  return messagemDeslocada;
}

function transformCharCodeInString(charCodeList) {
  var msg = "";
  for (let index = 0; index < charCodeList.length; index++) {
    const code = charCodeList[index];
    msg += String.fromCharCode(code);
  }
  return msg;
}

function cifraDeCesar(deslocamento, mensagem) {
  var charCodeOfMessage = getCharCode(mensagem);
  var charCodeDeslocado = deslocaMenssagem(deslocamento, charCodeOfMessage);
  var mensagemAlterada = transformCharCodeInString(charCodeDeslocado);
  return mensagemAlterada;
}

var userMsg = prompt("Informe a msg");
var userDeslocamento = parseInt(prompt("Infor o deslocamento"));

var msgCodificada = cifraDeCesar(userDeslocamento, userMsg);
var msgDecodificada = cifraDeCesar(-userDeslocamento, msgCodificada);

console.log(`${userMsg} codificado => ${msgCodificada}`);
console.log(`${msgCodificada} decodificada => ${msgDecodificada}`);
