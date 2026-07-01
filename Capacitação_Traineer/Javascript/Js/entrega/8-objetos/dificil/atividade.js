function deepGet(obj, path) {
  if (typeof obj !== "object" || obj === null) throw new TypeError("...");
  if (path === "") return obj;
  const partes = path
    .replace(/\[(\d+)\]/g, ".$1")
    .split(".")
    .filter((p) => p !== "");
  let atual = obj;
  for (const passo of partes) {
    if (atual == null) return undefined;
    atual = atual[passo];
  }
  return atual;
}

module.exports = { deepGet };
