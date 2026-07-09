const { toCelsius, toFahrenheit } = require("./atividade.js");

let c = "22";
let f = "71.6";

console.log(
  `A conversao de celsius para fahrenheit é: ${toCelsius(c).toFixed(2)}`,
);
console.log(
  `A conversao de fahrenheit para celsius é : ${toFahrenheit(f).toFixed(2)}`,
);
