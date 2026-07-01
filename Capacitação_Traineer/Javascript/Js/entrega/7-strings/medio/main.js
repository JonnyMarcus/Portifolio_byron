const { slugify } = require("./atividade.js");

console.log(slugify("Olá Mundo!"));
console.log(slugify("Café & Música"));
console.log(slugify("  Hello   World  "));
console.log(slugify("Como vai você?"));
