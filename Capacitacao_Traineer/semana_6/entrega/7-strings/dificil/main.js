const { extractEmails } = require("./atividade.js");

const texto =
  "Contate joao@email.com ou MARIA@GMAIL.COM! Copie joao@email.com novamente.";

console.log(extractEmails(texto));
