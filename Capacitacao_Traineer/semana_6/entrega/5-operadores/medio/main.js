const { compareSemver } = require("./atividade.js");

console.log(compareSemver("1.2.3", "1.2.3")); // 0
console.log(compareSemver("1.10.2", "1.9.2")); // 1
console.log(compareSemver("1.2", "1.2.0")); // 0
console.log(compareSemver("1.2.3", "1.2.4"));
