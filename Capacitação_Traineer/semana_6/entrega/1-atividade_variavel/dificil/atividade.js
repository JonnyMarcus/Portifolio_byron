function normalizeUser(input) {
  const safe = (v) => (v == null ? "" : String(v));

  const capitalizeWords = (s) =>
    s
      .trim()
      .split(/\s+/)
      .map((p) => p[0]?.toUpperCase() + p.slice(1).toLowerCase())
      .join(" ");
  const normaEmail = (x) => x.trim().toLowerCase();
  const toIntOrNull = (v) => {
    const n = Number(v);
    return Number.isInteger(n) ? n : null;
  };

  const rawname = safe(input.name);
  const normalizedName = capitalizeWords(rawname);

  const rawemail = safe(input.email);
  const capitaliEmail = normaEmail(rawemail);

  const normalizedAge = toIntOrNull(input.age);

  return {
    name: normalizedName === "" ? null : normalizedName,
    email: capitaliEmail === "" ? null : capitaliEmail,
    age: normalizedAge,
  };
}

module.exports = { normalizeUser };
