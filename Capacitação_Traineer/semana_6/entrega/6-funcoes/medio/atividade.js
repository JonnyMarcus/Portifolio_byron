function memo(fn) {
  if (typeof fn !== "function") throw new TypeError("...");
  const cache = {};

  return function (...args) {
    let chave;
    try {
      chave = JSON.stringify(args);
    } catch {
      return fn.apply(this, args);
    }
    if (chave in cache) return cache[chave];

    const resultado = fn.apply(this, args);
    cache[chave] = resultado;
    return resultado;
  };
}

module.exports = { memo };
