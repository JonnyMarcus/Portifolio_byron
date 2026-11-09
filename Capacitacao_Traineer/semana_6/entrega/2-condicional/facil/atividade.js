function classifyAge(n) {
  const num = Number(n);
  if (Number.isNaN(num)) throw new TypeError("erro Invalido, Nao e um numero");
  else if (num < 0) throw new RangeError("erro, não existe idade negativa");

  if (num <= 12) return "criança";
  else if (num >= 13 && num <= 17) return "adolescente";
  else if (num >= 18 && num <= 59) return "adulto";
  else return "idoso";
}

module.exports = { classifyAge };
