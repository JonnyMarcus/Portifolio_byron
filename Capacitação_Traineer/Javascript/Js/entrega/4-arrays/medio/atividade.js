function groupBy(items, key) {
  const resultado = {};

  for (const obj of items) {
    const chave = String(obj[key]);
    if (!resultado[chave]) resultado[chave] = [];
    resultado[chave].push(obj);
  }
  return resultado;
}

module.exports = { groupBy };
