const { sortBy } = require("./atividade.js");

const pessoas = [
  { nome: "Carlos", idade: 30 },
  { nome: "Ana", idade: 25 },
  { nome: "Bruno", idade: 25 },
];

console.log(sortBy(pessoas, ["idade", "ascendente"], ["nome", "ascendente"]));
