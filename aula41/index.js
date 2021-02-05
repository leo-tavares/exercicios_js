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

function filter(callback, list) {
  let aux = [];
  for (let key in list) {
    const value = list[key];
    if (callback(value, key, list)) {
      aux.push(value);
    }
  }
  return aux;
}

const alunosFiltrados = filter((aluno) => aluno.idade < 30, alunos);

console.log(alunosFiltrados);