function onlyEvens(nums) {
  const resultado = [];
  for (const num of nums) {
    if (Number.isInteger(num) && num % 2 === 0) resultado.push(num);
  }
  return resultado;
}

module.exports = { onlyEvens };
