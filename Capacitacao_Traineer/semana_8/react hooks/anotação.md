# ⚛️ React Hooks

> Anotações completas sobre React Hooks para estudos.

---

# 📚 O que são Hooks?

Hooks são funções especiais do React que permitem utilizar recursos como **estado**, **ciclo de vida**, **contexto**, **referências** e muito mais em **Componentes Funcionais**, sem a necessidade de utilizar Classes.

Foram introduzidos no **React 16.8**.

Antes dos Hooks:

```jsx
class App extends React.Component {
  state = {
    count: 0,
  };
}
```

Depois dos Hooks:

```jsx
function App() {
  const [count, setCount] = useState(0);

  return <h1>{count}</h1>;
}
```

---

# Regras dos Hooks

Sempre siga estas regras:

✅ Chame Hooks apenas no nível superior do componente.

❌ Nunca utilize Hooks dentro de:

- if
- for
- while
- switch
- funções comuns
- callbacks

Errado:

```jsx
if (user) {
  const [name, setName] = useState("");
}
```

Correto:

```jsx
const [name, setName] = useState("");

if (user) {
  // lógica
}
```

Também utilize Hooks apenas em:

- Componentes React
- Custom Hooks

---

# Principais Hooks

React possui diversos Hooks.

Os principais são:

- useState
- useEffect
- useContext
- useRef
- useMemo
- useCallback
- useReducer
- useLayoutEffect
- useImperativeHandle
- useId
- useTransition
- useDeferredValue

---

# useState()

O Hook mais utilizado.

Serve para armazenar estados dentro do componente.

Importação:

```jsx
import { useState } from "react";
```

Sintaxe:

```jsx
const [valor, setValor] = useState(valorInicial);
```

Exemplo:

```jsx
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>Incrementar</button>
    </>
  );
}
```

---

## Atualizando estados

Sempre utilize o setter.

Errado:

```jsx
count = 10;
```

Correto:

```jsx
setCount(10);
```

Também é possível utilizar uma função:

```jsx
setCount((prev) => prev + 1);
```

Essa abordagem evita problemas com atualizações assíncronas.

---

## Estado com objetos

```jsx
const [user, setUser] = useState({
  name: "Jonny",
  age: 20,
});
```

Atualizando apenas um campo:

```jsx
setUser({
  ...user,
  age: 21,
});
```

---

## Estado com arrays

```jsx
const [tasks, setTasks] = useState([]);
```

Adicionar item:

```jsx
setTasks([...tasks, novaTask]);
```

Remover:

```jsx
setTasks(tasks.filter((task) => task.id !== id));
```

---

# useEffect()

Executa efeitos colaterais.

Exemplos:

- Buscar API
- Atualizar título da página
- Timer
- Eventos
- LocalStorage

Importação:

```jsx
import { useEffect } from "react";
```

Sintaxe:

```jsx
useEffect(() => {}, []);
```

---

## Executar apenas uma vez

```jsx
useEffect(() => {
  console.log("Componente carregado");
}, []);
```

O array vazio indica que executará apenas na montagem.

---

## Executar quando algo mudar

```jsx
useEffect(() => {
  console.log("Count mudou");
}, [count]);
```

Sempre que `count` mudar, o efeito será executado.

---

## Executar sempre

```jsx
useEffect(() => {
  console.log("Renderizou");
});
```

Sem array de dependências.

---

## Cleanup

Muito utilizado para remover eventos ou timers.

```jsx
useEffect(() => {
  const timer = setInterval(() => {
    console.log("Executando...");
  }, 1000);

  return () => {
    clearInterval(timer);
  };
}, []);
```

---

# useContext()

Evita o famoso **Prop Drilling**.

Sem Context:

```
App
 └── Layout
      └── Header
           └── User
```

Precisaria passar props por todos os componentes.

Com Context:

```
Context
      ↓
Qualquer componente
```

Exemplo:

```jsx
const ThemeContext = createContext();
```

Consumindo:

```jsx
const theme = useContext(ThemeContext);
```

---

# useRef()

Armazena valores sem causar renderização.

Também é utilizado para acessar elementos HTML.

```jsx
const inputRef = useRef(null);
```

Exemplo:

```jsx
<input ref={inputRef} />

<button
onClick={() => inputRef.current.focus()}>
    Focar
</button>
```

Também serve para armazenar valores persistentes.

```jsx
const contador = useRef(0);
```

---

# useMemo()

Memoriza valores calculados.

Evita cálculos pesados em toda renderização.

```jsx
const resultado = useMemo(() => {
  return calcularMuitoPesado(lista);
}, [lista]);
```

Sem useMemo:

```
Render
↓

Calcula novamente
```

Com useMemo:

```
Render
↓

Utiliza cache
```

---

# useCallback()

Memoriza funções.

Muito utilizado quando componentes filhos recebem funções como props.

```jsx
const handleClick = useCallback(() => {
  console.log("Clique");
}, []);
```

Sem useCallback:

```
Render

↓

Nova função criada
```

Com useCallback:

```
Render

↓

Mesma referência da função
```

---

# useReducer()

Alternativa ao useState para estados complexos.

Fluxo:

```
Action
↓

Reducer

↓

Novo Estado
```

Exemplo:

```jsx
const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return {
        count: state.count + 1,
      };

    default:
      return state;
  }
};
```

Uso:

```jsx
const [state, dispatch] = useReducer(reducer, {
  count: 0,
});
```

Atualizando:

```jsx
dispatch({
  type: "increment",
});
```

---

# useLayoutEffect()

Muito parecido com o useEffect.

Diferença:

- useEffect → executa após a pintura da tela.
- useLayoutEffect → executa antes da pintura.

Fluxo:

```
Render

↓

DOM atualizado

↓

useLayoutEffect

↓

Pintura da tela

↓

useEffect
```

Ideal para:

- Medir elementos
- Ajustar layouts
- Evitar flickering

---

# useImperativeHandle()

Permite personalizar o que será exposto através de um `ref`.

Normalmente usado junto com `forwardRef`.

```jsx
useImperativeHandle(ref, () => ({
  focus() {
    inputRef.current.focus();
  },
}));
```

---

# useId()

Gera IDs únicos.

Muito útil para formulários.

```jsx
const id = useId();
```

Exemplo:

```jsx
<label htmlFor={id}>Nome</label>

<input id={id} />
```

---

# useTransition()

Permite marcar atualizações como menos prioritárias, mantendo a interface responsiva.

```jsx
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setLista(listaGrande);
});
```

Ideal para:

- Pesquisas
- Filtros
- Grandes listas
- Atualizações demoradas

---

# useDeferredValue()

Adia a atualização de um valor.

Muito útil para buscas.

```jsx
const deferredSearch = useDeferredValue(search);
```

Fluxo:

```
Usuário digita

↓

Input atualiza imediatamente

↓

Busca pesada espera um pouco
```

---

# Custom Hooks

Você também pode criar seus próprios Hooks.

Exemplo:

```jsx
function useCounter(initial = 0) {
  const [count, setCount] = useState(initial);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return {
    count,
    increment,
    decrement,
  };
}
```

Uso:

```jsx
const { count, increment, decrement } = useCounter();
```

---

# Quando utilizar cada Hook?

| Hook                | Utilização                        |
| ------------------- | --------------------------------- |
| useState            | Estados simples                   |
| useEffect           | Efeitos colaterais                |
| useContext          | Compartilhar dados                |
| useRef              | Referência e persistência         |
| useMemo             | Memorizar valores                 |
| useCallback         | Memorizar funções                 |
| useReducer          | Estados complexos                 |
| useLayoutEffect     | Manipular layout antes da pintura |
| useImperativeHandle | Expor métodos via ref             |
| useId               | IDs únicos                        |
| useTransition       | Atualizações não prioritárias     |
| useDeferredValue    | Adiar atualizações                |

---

# Fluxo de Renderização

```
Render

↓

Estados (useState)

↓

Renderização do JSX

↓

Atualização do DOM

↓

useLayoutEffect

↓

Pintura da tela

↓

useEffect
```

---

# Boas Práticas

✅ Utilize `useState` para estados simples.

✅ Utilize `useReducer` quando houver muitas regras de atualização.

✅ Utilize `useMemo` apenas para cálculos pesados.

✅ Utilize `useCallback` apenas quando necessário para evitar recriações de funções.

✅ Sempre limpe timers e listeners dentro do retorno do `useEffect`.

✅ Crie Custom Hooks para reutilizar lógica.

✅ Nunca altere estados diretamente.

✅ Mantenha os Hooks no topo do componente.

---

# Resumo

| Hook                | Função                           |
| ------------------- | -------------------------------- |
| useState            | Estado                           |
| useEffect           | Efeitos colaterais               |
| useContext          | Contexto Global                  |
| useRef              | Referências                      |
| useMemo             | Cache de valores                 |
| useCallback         | Cache de funções                 |
| useReducer          | Estados complexos                |
| useLayoutEffect     | Efeito antes da pintura          |
| useImperativeHandle | Controle de refs                 |
| useId               | IDs únicos                       |
| useTransition       | Atualizações de baixa prioridade |
| useDeferredValue    | Valores adiados                  |
| Custom Hook         | Reutilização de lógica           |

---

> **Dica:** Antes de usar Hooks de otimização (`useMemo`, `useCallback`, `useDeferredValue` e `useTransition`), meça o desempenho da aplicação. Em muitos casos, `useState` e `useEffect` são suficientes e mantêm o código mais simples.
