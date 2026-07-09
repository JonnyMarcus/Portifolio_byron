function flatten1(arr) {
  const resultado = [];

  for (const num of arr) {
    if (Array.isArray(num)) resultado.push(...num);
    else resultado.push(num);
  }

  return resultado;
}

module.exports = { flatten1 };
