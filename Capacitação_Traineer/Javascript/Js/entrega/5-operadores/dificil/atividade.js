function evalExpr(expr) {
  function tokenize(s) {
    const tokens = [];
    let numA = "";
    for (let i = 0; i < s.length; i++) {
      if (/[0-9]/.test(s[i]) || s[i] === ".") numA += s[i];
      else if (/[*+/-]/.test(s[i])) {
        if (numA !== "") {
          tokens.push({ type: "num", value: numA });
          numA = "";
        }
        tokens.push({ type: "op", value: s[i] });
      } else if (s[i] === "(") {
        if (numA !== "") {
          tokens.push({ type: "num", value: numA });
          numA = "";
        }
        tokens.push({ type: "(", value: "(" });
      } else if (s[i] === ")") {
        if (numA !== "") {
          tokens.push({ type: "num", value: numA });
          numA = "";
        }
        tokens.push({ type: ")", value: ")" });
      } else throw new Error("caracter invalido" + s[i]);
    }
    if (numA !== "") tokens.push({ type: "num", value: numA });
    return tokens;
  }
  function toRPN(tokens) {
    const saida = [];
    const pilha = [];
    const prec = { "+": 1, "-": 1, "*": 2, "/": 2 };
    for (const token of tokens) {
      if (token.type === "num") {
        saida.push(token);
      } else if (token.type === "op") {
        while (
          pilha.length > 0 &&
          pilha[pilha.length - 1].type === "op" &&
          prec[pilha[pilha.length - 1].value] >= prec[token.value]
        ) {
          saida.push(pilha.pop());
        }
        pilha.push(token);
      } else if (token.type === "(") {
        pilha.push(token);
      } else if (token.type === ")") {
        while (pilha.length > 0 && pilha[pilha.length - 1].type !== "(") {
          saida.push(pilha.pop());
        }
        pilha.pop();
      }
    }
    while (pilha.length > 0) {
      saida.push(pilha.pop());
    }
    return saida;
  }
  function evalRPN(tokens) {
    const pilha = [];

    for (const token of tokens) {
      if (token.type === "num") {
        pilha.push(Number(token.value));
      } else if (token.type === "op") {
        const b = pilha.pop();
        const a = pilha.pop();

        if (token.value === "+") pilha.push(a + b);
        else if (token.value === "-") pilha.push(a - b);
        else if (token.value === "*") pilha.push(a * b);
        else if (token.value === "/") {
          if (b === 0) throw new Error("divisao por zero");
          pilha.push(a / b);
        }
      }
    }
    return pilha[0];
  }
  const tokens = tokenize(expr);
  const rpn = toRPN(tokens);
  return evalRPN(rpn);
}
module.exports = { evalExpr };
