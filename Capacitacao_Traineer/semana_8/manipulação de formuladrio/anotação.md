# 📝 Manipulação de Formulários no React

> Anotações completas sobre manipulação de formulários em React.

---

# 📚 O que é a manipulação de formulários?

Formulários são uma das partes mais importantes de uma aplicação web. Eles permitem que o usuário envie informações como:

- Login
- Cadastro
- Contato
- Pesquisa
- Comentários
- Compras
- Configurações

No React, os formulários são normalmente controlados pelo **estado do componente**, tornando a interface previsível e fácil de gerenciar.

---

# Formulários Controlados (Controlled Components)

Um formulário controlado é aquele em que o React controla o valor dos campos através do `useState`.

Fluxo:

```
Usuário digita

↓

Evento onChange

↓

Atualiza o estado

↓

React renderiza novamente

↓

Input recebe o novo valor
```

Exemplo:

```jsx
import { useState } from "react";

function Formulario() {
  const [nome, setNome] = useState("");

  return (
    <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
  );
}
```

Neste exemplo:

- `value` controla o conteúdo do input.
- `onChange` captura o que o usuário digita.
- `setNome` atualiza o estado.

---

# O evento onChange

O `onChange` é executado sempre que o valor do campo muda.

```jsx
<input onChange={(e) => console.log(e.target.value)} />
```

`e.target.value` representa o valor atual digitado.

---

# Capturando vários campos

Podemos criar um estado para cada campo.

```jsx
const [nome, setNome] = useState("");
const [email, setEmail] = useState("");
const [senha, setSenha] = useState("");
```

Ou utilizar um único objeto.

```jsx
const [form, setForm] = useState({
  nome: "",
  email: "",
  senha: "",
});
```

Atualizando:

```jsx
setForm({
  ...form,
  nome: e.target.value,
});
```

---

# Atualizando vários campos com uma única função

Uma abordagem muito utilizada é aproveitar o atributo `name`.

```jsx
const [form, setForm] = useState({
  nome: "",
  email: "",
  senha: "",
});

function handleChange(e) {
  const { name, value } = e.target;

  setForm({
    ...form,
    [name]: value,
  });
}
```

HTML:

```jsx
<input
    name="nome"
    value={form.nome}
    onChange={handleChange}
/>

<input
    name="email"
    value={form.email}
    onChange={handleChange}
/>

<input
    name="senha"
    value={form.senha}
    onChange={handleChange}
/>
```

Essa técnica evita criar várias funções diferentes.

---

# Enviando o formulário

O envio é realizado com o evento `onSubmit`.

```jsx
<form onSubmit={handleSubmit}>
```

Função:

```jsx
function handleSubmit(e) {
  e.preventDefault();

  console.log("Formulário enviado");
}
```

---

# preventDefault()

Por padrão, ao enviar um formulário, o navegador recarrega a página.

O método:

```jsx
e.preventDefault();
```

impede esse comportamento.

Fluxo padrão:

```
Enviar formulário

↓

Página recarrega
```

Com `preventDefault()`:

```
Enviar formulário

↓

Executa JavaScript

↓

Página permanece aberta
```

---

# Obtendo os dados

```jsx
function handleSubmit(e) {
  e.preventDefault();

  console.log(form);
}
```

Saída:

```javascript
{
    nome: "Jonny",
    email: "jonny@email.com",
    senha: "123456"
}
```

---

# Limpando o formulário

Após o envio:

```jsx
setForm({
  nome: "",
  email: "",
  senha: "",
});
```

Todos os campos voltam ao estado inicial.

---

# Trabalhando com Checkbox

```jsx
const [aceitou, setAceitou] = useState(false);
```

```jsx
<input
  type="checkbox"
  checked={aceitou}
  onChange={(e) => setAceitou(e.target.checked)}
/>
```

Para checkboxes, utiliza-se `checked` em vez de `value`.

---

# Trabalhando com Radio Button

```jsx
const [sexo, setSexo] = useState("");
```

```jsx
<input
    type="radio"
    value="Masculino"
    checked={sexo === "Masculino"}
    onChange={(e) => setSexo(e.target.value)}
/>

<input
    type="radio"
    value="Feminino"
    checked={sexo === "Feminino"}
    onChange={(e) => setSexo(e.target.value)}
/>
```

---

# Trabalhando com Select

```jsx
const [cidade, setCidade] = useState("");
```

```jsx
<select value={cidade} onChange={(e) => setCidade(e.target.value)}>
  <option value="">Selecione</option>
  <option value="BH">Belo Horizonte</option>
  <option value="SP">São Paulo</option>
</select>
```

---

# Trabalhando com Textarea

```jsx
const [descricao, setDescricao] = useState("");
```

```jsx
<textarea value={descricao} onChange={(e) => setDescricao(e.target.value)} />
```

No React, a `textarea` funciona da mesma forma que um `input`.

---

# Validação de Formulários

Podemos validar antes do envio.

```jsx
function handleSubmit(e) {
  e.preventDefault();

  if (form.nome === "") {
    alert("Informe o nome.");
    return;
  }

  console.log(form);
}
```

Também é possível validar:

- E-mail
- Senha
- CPF
- Telefone
- Datas
- Campos obrigatórios

---

# Desabilitando o botão

```jsx
<button disabled={!form.nome || !form.email}>Enviar</button>
```

O botão só ficará habilitado quando os campos forem preenchidos.

---

# Formulários Não Controlados

Também existem os formulários **não controlados**, que utilizam `useRef`.

```jsx
const inputRef = useRef();
```

```jsx
<input ref={inputRef} />
```

Obtendo o valor:

```jsx
console.log(inputRef.current.value);
```

Esse método é menos comum e costuma ser usado quando não é necessário controlar o estado do campo durante a digitação.

---

# Enviando dados para uma API

Após validar o formulário, geralmente enviamos os dados para um servidor.

Exemplo usando `fetch`:

```jsx
async function handleSubmit(e) {
  e.preventDefault();

  await fetch("/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(form),
  });
}
```

Ou utilizando `axios`:

```jsx
await axios.post("/api/users", form);
```

---

# Exemplo Completo

```jsx
import { useState } from "react";

function Cadastro() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log(form);

    setForm({
      nome: "",
      email: "",
      senha: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
        placeholder="Nome"
      />

      <input
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="E-mail"
      />

      <input
        type="password"
        name="senha"
        value={form.senha}
        onChange={handleChange}
        placeholder="Senha"
      />

      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

# Fluxo de um Formulário no React

```
Usuário preenche os campos

↓

onChange captura os valores

↓

useState atualiza o estado

↓

React renderiza novamente

↓

Usuário envia o formulário

↓

onSubmit é executado

↓

preventDefault()

↓

Validação dos dados

↓

Envio para API

↓

Limpeza do formulário
```

---

# Boas Práticas

✅ Utilize componentes controlados (`useState`) na maioria dos casos.

✅ Utilize `preventDefault()` para impedir o recarregamento da página.

✅ Agrupe campos relacionados em um único objeto quando fizer sentido.

✅ Utilize uma função genérica (`handleChange`) para atualizar vários campos.

✅ Faça validações antes de enviar os dados.

✅ Limpe o formulário após um envio bem-sucedido, quando apropriado.

✅ Nunca altere o estado diretamente.

✅ Dê nomes claros aos campos usando o atributo `name`.

---

# Resumo

| Conceito           | Função                             |
| ------------------ | ---------------------------------- |
| `value`            | Controla o valor do campo          |
| `onChange`         | Captura alterações no campo        |
| `useState`         | Armazena os dados do formulário    |
| `onSubmit`         | Executa o envio do formulário      |
| `preventDefault()` | Evita o recarregamento da página   |
| `checked`          | Controla checkboxes e radios       |
| `useRef`           | Acessa formulários não controlados |
| `fetch` / `axios`  | Envia dados para APIs              |

---

> **Dica:** Para formulários simples, `useState` costuma ser suficiente. Em projetos maiores, bibliotecas como **React Hook Form** e **Formik** ajudam a reduzir código repetitivo, simplificar validações e melhorar a performance.
