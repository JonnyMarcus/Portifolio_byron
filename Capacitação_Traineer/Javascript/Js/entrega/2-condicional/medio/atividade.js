function energyBill(kwh) {
  kwh = Number(kwh);
  if (Number.isNaN(kwh))
    throw new TypeError("tipo invalido, so e permitido numero");
  else if (kwh < 0)
    throw new RangeError("valor invalido, so e permitido nuumeros positivos");

  if (kwh <= 100) {
    let total = kwh * 0.5;
    return Number(total.toFixed(2));
  } else if (kwh > 100 && kwh <= 200) {
    let total = 100 * 0.5;
    total += (kwh - 100) * 0.75;
    return Number(total.toFixed(2));
  } else if (kwh > 200) {
    let total = 100 * 0.5;
    total += 100 * 0.75;
    total += (kwh - 200) * 1.2;
    return Number(total.toFixed(2));
  }
}

module.exports = { energyBill };
