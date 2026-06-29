function validatePassword(pwd) {
  const reasons = [];

  if (typeof pwd !== "string") throw TypeError("tipo de variavel invalido");
  if (pwd.length < 8) reasons.push("min_length");
  if (!/[a-z]/.test(pwd)) reasons.push("missing_lowercase");
  if (!/[A-Z]/.test(pwd)) reasons.push("missing_uppercase");
  if (!/[0-9]/.test(pwd)) reasons.push("missing_digit");
  if (!/[!@#$%^&*()\-_+=\[\]{};:'",.<>/?\\|]/.test(pwd))
    reasons.push("missing_special");
  if (/\s/.test(pwd)) reasons.push("has_whitespace");

  return {
    valid: reasons.length === 0,
    reasons: reasons.length === 0 ? null : reasons,
  };
}

module.exports = { validatePassword };
