const { deepGet } = require("./atividade.js");

const obj = { a: { b: [{ c: 42 }] } };

console.log(deepGet(obj, "a.b[0].c"));
console.log(deepGet(obj, "a.b[1].c"));
console.log(deepGet(obj, "a.b"));
console.log(deepGet(obj, ""));
