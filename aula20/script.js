function getCharCodeListFromMessage(message) {
  var charCodeList = [];
  for (var index = 0; index < message.length; index++) {
    var charCode = message[index].charCodeAt();
    charCodeList.push(charCode);
  }
  return charCodeList;
}

function getShiftedMessage(shift, charCodeList) {
  var shiftedMessage = [];
  for (var index = 0; index < charCodeList.length; index++) {
    var charCode = charCodeList[index];
    shiftedMessage.push(charCode + shift);
  }
  return shiftedMessage;
}

function transformCharCodeListIntoString(charCodeList) {
  var msg = "";
  for (var index = 0; index < charCodeList.length; index++) {
    var charCode = charCodeList[index];
    msg += String.fromCharCode(charCode);
  }
  return msg;
}

function caesarCipher(shift, message) {
  var charCodeList = getCharCodeListFromMessage(message);
  var shiftedMessage = getShiftedMessage(shift, charCodeList);
  var encryptedMessage = transformCharCodeListIntoString(shiftedMessage);
  return encryptedMessage;
}

var userMsg = prompt("Informe a menssagem para encriptar");
var userShift = parseInt(prompt("Infor o deslocamento"));

var encryptedMessage = caesarCipher(userShift, userMsg);
var decryptedMessage = caesarCipher(-userShift, encryptedMessage);

console.log(`${userMsg} codificado => ${encryptedMessage}`);
console.log(`${encryptedMessage} decodificada => ${decryptedMessage}`);
