function compose(...fns) {
  for (const fn of fns) {
    if (typeof fn !== "function") throw new TypeError("...");
  }
  if (fns.length === 0) return (...args) => args[0];
  return function (...args) {
    const context = this;
    return fns.reduceRight((acc, fn, index) => {
      if (index === fns.length - 1) return fn.apply(context, args);
      return fn.call(context, acc);
    }, undefined);
  };
}

module.exports = { compose };
