# 📚 Anotações - Make

## 📖 O que é o Make?

O Make é uma plataforma de automação **No-Code** que permite conectar diferentes aplicações e automatizar tarefas repetitivas através de fluxos visuais chamados **Scenarios**.

Seu principal objetivo é eliminar processos manuais, reduzir erros e aumentar a produtividade.

---

# 🚀 Conceitos Fundamentais

## Automação

Automação consiste em executar tarefas automaticamente quando um evento acontece.

Exemplo:

Cliente preenche um formulário

↓

Criar registro no Notion

↓

Gerar documento

↓

Salvar no Google Drive

↓

Enviar e-mail

Tudo isso ocorre sem intervenção humana.

---

## Scenario

Um **Scenario** é um fluxo de automação criado dentro do Make.

Ele é composto por diversos módulos conectados entre si.

Exemplo:

```text
Notion
      ↓
HTTP
      ↓
Google Drive
      ↓
Gmail
```

Cada cenário pode executar centenas ou milhares de operações automaticamente.

---

# 🧩 Módulos

Os módulos representam as ações executadas por cada aplicativo.

Exemplos:

- Notion
- Google Drive
- Gmail
- HTTP
- Discord
- Slack
- Google Sheets
- Airtable
- APIs

Cada módulo possui uma função específica.

Exemplos:

- Criar página
- Atualizar registro
- Baixar arquivo
- Fazer upload
- Enviar mensagem

---

# ⚡ Trigger

O Trigger é o evento responsável por iniciar a automação.

Exemplos:

- Novo formulário enviado;
- Novo arquivo criado;
- Novo cliente cadastrado;
- Atualização em uma tabela;
- Novo pedido realizado.

Sem um Trigger, o fluxo não inicia.

---

# ⚙️ Actions

As Actions são as tarefas executadas após o Trigger.

Exemplo:

```text
Novo Cliente

↓

Criar página no Notion

↓

Criar pasta no Drive

↓

Enviar e-mail
```

---

# 🔀 Router

O Router divide um fluxo em diferentes caminhos.

Permite executar ações diferentes dependendo das condições.

Exemplo:

```text
Novo Cliente

↓

Router

├── Cliente VIP
│      ↓
│  Enviar para vendedor A
│
└── Cliente Normal
       ↓
   Enviar para vendedor B
```

---

# 🛡️ Filters

Os filtros impedem que informações indesejadas avancem no fluxo.

Exemplo:

```text
Possui Arquivo?

Sim
↓

Continua

Não
↓

Interrompe
```

Os filtros ajudam a evitar erros durante a execução.

---

# 🗂️ Mapping

O Mapping consiste em utilizar dados de um módulo dentro de outro.

Exemplo:

Notion

↓

Nome

↓

Google Drive

↓

Nome do Arquivo

O dado é transportado automaticamente entre os módulos.

---

# 🌐 HTTP Module

O módulo HTTP permite integrar qualquer sistema que possua uma API.

Principais funções:

- GET
- POST
- PUT
- PATCH
- DELETE

Também permite:

- Download de arquivos;
- Upload de arquivos;
- Envio de requisições;
- Consumo de APIs REST.

---

# 📂 Integração com Notion

O Make possui integração nativa com o Notion.

Alguns módulos disponíveis:

- Watch Data Source Items
- Create Page
- Update Page
- Search Objects
- List Users
- Append Page Content

É possível automatizar praticamente qualquer processo dentro do Notion. :contentReference[oaicite:0]{index=0}

---

# ☁️ Integração com Google Drive

Algumas ações disponíveis:

- Upload File
- Download File
- Create Folder
- Delete File
- Move File
- Search Files

Muito utilizado para armazenamento automático de documentos.

---

# 🔄 Fluxo Desenvolvido na Capacitação

Durante a capacitação foi criado o seguinte cenário:

```text
Notion
Watch Data Source Items

↓

HTTP
Download a File

↓

Google Drive
Upload a File
```

Funcionamento:

1. O Notion identifica um novo registro.
2. O HTTP faz o download do arquivo.
3. O Google Drive salva o arquivo automaticamente.

---

# 📌 Melhorias Implementadas

## Processar Todos os Registros

Utilização da opção:

Choose Where To Start

↓

All

Assim todos os registros da tabela são processados.

---

## Filtro para Arquivos Vazios

Foi criado um filtro entre:

Notion

↓

HTTP

para impedir erros quando alguma linha não possuir anexos.

---

## Processar Múltiplos Arquivos

Algumas linhas possuem mais de um arquivo.

Foi utilizado um Iterator para que cada arquivo seja tratado individualmente, evitando que anexos sejam ignorados.

---

# 🛠️ Tratamento de Erros

O Make permite configurar:

- Repetição automática;
- Ignorar erro;
- Parar execução;
- Criar caminhos alternativos;
- Logs completos.

Esses recursos tornam as automações mais confiáveis.

---

# 📊 Vantagens do Make

- Plataforma No-Code;
- Interface visual;
- Fácil aprendizado;
- Grande quantidade de integrações;
- Conexão via APIs;
- Automatização de processos;
- Redução de erros;
- Economia de tempo;
- Escalabilidade.

---

# 🏢 Aplicações na byron

Algumas aplicações apresentadas durante a capacitação:

- Emissão automática de certificados;
- Termos de voluntariado;
- Termos de encerramento;
- Organização de documentos;
- Backup automático;
- Integração entre Notion e Google Drive;
- Automatização de processos internos.

---

# 💡 Boas Práticas

- Nomear corretamente os cenários;
- Utilizar filtros sempre que possível;
- Testar cada módulo individualmente;
- Organizar os fluxos visualmente;
- Tratar possíveis erros;
- Utilizar variáveis e mapeamentos corretamente;
- Monitorar o histórico de execução;
- Documentar cada automação criada.

---

# 📚 Resumo

O Make é uma das principais plataformas de automação do mercado, permitindo conectar diferentes aplicações através de fluxos visuais sem necessidade de programação. Durante a capacitação foi possível aprender a criar cenários, integrar o Notion ao Google Drive, utilizar filtros, manipular arquivos e construir automações mais robustas utilizando módulos, gatilhos, roteadores e tratamento de erros, tornando processos internos mais rápidos, organizados e eficientes.
