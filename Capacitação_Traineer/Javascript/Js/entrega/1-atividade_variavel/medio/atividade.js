function toCelsius(f) {
  let fahreNum = Number(f);
  if (Number.isNaN(fahreNum)) {
    throw new TypeError("valor inválido");
  }
  fahreNum = ((fahreNum - 32) * 5) / 9;
  fahreNum = fahreNum.toFixed(2);

  return Number(fahreNum);
}

function toFahrenheit(c) {
  let celsiusNum = Number(c);
  if (Number.isNaN(celsiusNum)) {
    throw new TypeError("valor inválido");
  }
  celsiusNum = (celsiusNum * 9) / 5 + 32;
  celsiusNum = celsiusNum.toFixed(2);
  return Number(celsiusNum);
}

module.exports = { toCelsius, toFahrenheit };
