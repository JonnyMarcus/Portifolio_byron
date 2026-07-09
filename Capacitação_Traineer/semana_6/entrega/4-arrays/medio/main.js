const { groupBy } = require("./atividade.js");
const dados = [
  { nome: "Jonny", hobbies: ["código", "música"], curso: "CCO" },
  { nome: "Maria", hobbies: ["leitura"], curso: "ECO" },
  { nome: "João", hobbies: ["jogos", "código"], curso: "CCO" },
];
console.log(groupBy(dados, "curso"));
