const { compose } = require("./atividade.js");

const dobrar = (x) => x * 2;
const somar1 = (x) => x + 1;
const quadrado = (x) => x * x;

const fn = compose(dobrar, somar1, quadrado);
console.log(fn(3));

const identidade = compose();
console.log(identidade(42));
