const { energyBill } = require("./atividade.js");

let kwh = "201";

console.log(`o valor da conta de energia é R$${energyBill(kwh).toFixed(2)}`);
