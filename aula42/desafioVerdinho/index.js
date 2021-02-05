/**
 * Desafios: Encontrar uma sequencia
 *
 * 1 - Sequência não descrescente = sequencia continua ou crescente
 * 2 - A soma da sequencia é um numero "dado"
 */
/**
 * ex.
 * t = 1
 * ni = 2
 * saida = 11 2
 */

const t = 2;
const ni = [1, 5];

function sequencia(t, ni) {
  for (let index = 0; index < t; index++) {
    const numero = ni[index];
    const result = processamento(numero);
    console.log(result);
  }
}

function processamento(numero) {
  if (numero > 3) {
  }
  //4 => 5c
  //5 => 7c
  //6 => 8c
  // numero de variante da coluna
  // n - 3
  // ex;
  // 4 => coluna = 4 + (4 - 3)
  // 5 => coluna = 5 + (5 - 3)
  // 6 => caluna = 6 + (6 - 3)
}

function possibilidadesPadroes(numero) {
  const limite = numero;
  const buffer = Array.from({ length: limite }, () => 1);
}

function possibilidadesExtras(numero) {}

//usados apenas apatir de 4
function totalDeColunas(numero) {
  const CONTROLE = 3;
  return numero + (numero - CONTROLE);
}
