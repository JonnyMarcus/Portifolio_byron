const { merge } = require("./atividade.js");

const a = { x: 1, y: 2 };
const b = { y: 99, z: 3 };

console.log(merge(a, b));
console.log(a);
console.log(b);
