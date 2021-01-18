let umBeloArray = [
  { nome: "Gabriel", idade: 0 },
  { nome: "Lais", idade: 0 },
  { nome: "Vitrola", idade: 0 },
  { nome: "qual_das_anas", idade: 0 },
];
umBeloArray.forEach(function (pessoa, index, lista) {
  let elementoAnterior;
  if (index != 0) {
    elementoAnterior = lista[index - 1];
  }
  pessoa.idade = elementoAnterior.idade + 10;
});
console.log(umBeloArray);
