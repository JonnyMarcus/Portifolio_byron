function calc(a, b, op) {
  const A = Number(a);
  const B = Number(b);
  if (Number.isNaN(A) || Number.isNaN(B)) throw new TypeError("...");

  if (op === "/" && B === 0) return null;

  switch (op) {
    case "+":
      return A + B;

    case "-":
      return A - B;

    case "*":
      return A * B;

    case "/":
      return A / B;

    default:
      console.log("Error Operação invalida");
      return 0;
  }
}

module.exports = { calc };
