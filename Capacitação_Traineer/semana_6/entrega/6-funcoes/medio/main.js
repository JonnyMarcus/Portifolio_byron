const { memo } = require("./atividade.js");

const soma = memo((a, b) => a + b);

console.log(soma(3, 4));
console.log(soma(3, 4));
console.log(soma(5, 6));
console.log(soma(5, 6));
