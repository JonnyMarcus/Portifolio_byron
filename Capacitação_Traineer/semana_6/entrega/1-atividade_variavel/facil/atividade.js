
function greet(nome, idade) {
  const idadeNum = Number(idade);
  if (Number.isNaN(idadeNum)) {
    throw new TypeError('idade inválida');
  }
  return `Olá, ${nome}! Você tem ${idadeNum} anos.`;
}

module.exports={greet};