function add(a) {
  const A = Number(a);
  if (Number.isNaN(A)) throw new TypeError("...");

  return function (b) {
    const B = Number(b);
    if (Number.isNaN(B)) throw new TypeError("...");
    return A + B;
  };
}

module.exports = { add };
