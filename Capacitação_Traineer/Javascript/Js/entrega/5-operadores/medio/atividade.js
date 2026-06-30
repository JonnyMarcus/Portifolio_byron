function compareSemver(a, b) {
  const partA = a.split(".");
  const partB = b.split(".");
  const tamanho = Math.max(partA.length, partB.length);

  for (let i = 0; i < tamanho; i++) {
    let numA = Number(partA[i] ?? 0);
    let numB = Number(partB[i] ?? 0);
    if (
      !Number.isInteger(numA) ||
      numA < 0 ||
      !Number.isInteger(numB) ||
      numB < 0
    )
      throw new TypeError("...");

    if (numA > numB) return 1;
    if (numA < numB) return -1;
  }
  return 0;
}

module.exports = { compareSemver };
