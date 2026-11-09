function sortBy(items, ...criteria) {
  const copia = [...items];
  copia.sort((a, b) => {
    for (const criterio of criteria) {
      const campo = criterio[0];
      const direcao = criterio[1];
      const vala = a[campo];
      const valb = b[campo];

      if (vala == null && valb == null) continue;
      if (vala == null) return 1;
      if (valb == null) return -1;

      let comparacao = 0;

      if (typeof vala === "number" && typeof valb === "number") {
        comparacao = vala - valb;
      } else {
        comparacao = String(vala).localeCompare(String(valb));
      }
      if (direcao === "descendente") comparacao = -comparacao;
      if (comparacao !== 0) return comparacao;
    }
    return 0;
  });
  return copia;
}

module.exports = { sortBy };
