let alunos = [
  {
    nome: "aaaaa",
    idade: 21,
  },
  {
    nome: "bbbbb",
    idade: 33,
  },
  {
    nome: "ccccc",
    idade: 42,
  },
  {
    nome: "ddddd",
    idade: 18,
  },
  {
    nome: "eeeee",
    idade: 26,
  },
  {
    nome: "fffff",
    idade: 27,
  },
  {
    nome: "ggggg",
    idade: 32,
  },
];

function calculaMediaDeIdadeDosAlunos(alunos) {
  const mediaDasIdades = alunos.reduce((acc, { idade }, _, list) => {
    const qtdDeElementos = list.length;
    const result = acc + idade / qtdDeElementos;
    return result;
  }, 0);

  return mediaDasIdades;
}
