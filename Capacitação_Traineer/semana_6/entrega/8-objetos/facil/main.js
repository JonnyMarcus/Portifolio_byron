const { countKeys } = require("./atividade.js");

console.log(countKeys({ a: 1, b: 2, c: 3 }));
console.log(countKeys({}));
console.log(countKeys(null));
