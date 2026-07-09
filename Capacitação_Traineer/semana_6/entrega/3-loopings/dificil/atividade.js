function fizzbuzz(a, b) {
  const resultado = [];
  const A = Number(a);
  const B = Number(b);
  if (!Number.isInteger(A) || !Number.isInteger(B)) throw new TypeError("...");
  if (A > B) throw new RangeError("...");

  for (let i = A; i <= B; i++) {
    if (i % 15 === 0) {
      resultado.push("FizzBuzz");
    } else if (i % 5 === 0) {
      resultado.push("Buzz");
    } else if (i % 3 === 0) {
      resultado.push("Fizz");
    } else resultado.push(i);
  }
  return resultado;
}

module.exports = { fizzbuzz };
