function extractEmails(text) {
  if (typeof text !== "string") throw new TypeError("");
  const matches = text.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
  if (!matches) return [];
  const limpos = matches.map((e) => e.replace(/[.,;:]$/, "").toLowerCase());
  return [...new Set(limpos)];
}

module.exports = { extractEmails };
