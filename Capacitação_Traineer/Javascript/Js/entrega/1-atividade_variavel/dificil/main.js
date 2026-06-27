const { normalizeUser } = require("./atividade.js");

const input = {
  name: "jonny",
  email: "jonny@email.com",
  age: 21,
};

console.log(normalizeUser(input));
