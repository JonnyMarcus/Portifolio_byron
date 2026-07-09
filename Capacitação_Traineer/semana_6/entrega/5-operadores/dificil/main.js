const { evalExpr } = require("./atividade.js");

console.log(evalExpr("3+4*2"));
console.log(evalExpr("(3+4)*2"));
console.log(evalExpr("10/2+3"));
console.log(evalExpr("2*(3+4)*2"));
console.log(evalExpr("10/0"));
