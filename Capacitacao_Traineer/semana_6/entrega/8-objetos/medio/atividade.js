function merge(a, b) {
  if (
    typeof a !== "object" ||
    a === null ||
    typeof b !== "object" ||
    b === null
  )
    throw new TypeError("...");
  return { ...a, ...b };
}

module.exports = { merge };
