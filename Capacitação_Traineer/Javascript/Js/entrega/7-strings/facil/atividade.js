function reverse(s) {
  if (typeof s !== "string") throw new TypeError("...");
  return Array.from(s).reverse().join("");
}

module.exports = { reverse };
