function countKeys(obj) {
  if (typeof obj !== "object" || obj === null) throw new TypeError("...");
  return Object.keys(obj).length;
}

module.exports = { countKeys };
