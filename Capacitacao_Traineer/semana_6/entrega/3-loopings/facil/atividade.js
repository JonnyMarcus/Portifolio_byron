function sumArray(nums) {
  let total = 0;
  for (const valor of nums) {
    const num = Number(valor);
    if (Number.isFinite(num)) total += num;
  }

  return Number(total);
}

module.exports = { sumArray };
