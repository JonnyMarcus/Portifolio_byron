# 📌 Semana 7 - Make | Automação de Processos

## 📖 Descrição

Durante a sétima semana da capacitação da **byron**, foi apresentada a plataforma **Make**, uma ferramenta de automação *No-Code* que permite integrar diferentes aplicações e automatizar processos de forma visual. O objetivo foi compreender como criar fluxos de trabalho capazes de conectar serviços como **Notion** e **Google Drive**, reduzindo tarefas manuais, aumentando a produtividade e minimizando erros.

Ao longo da atividade, foi desenvolvido um cenário responsável por monitorar uma base de dados do Notion, baixar automaticamente os arquivos anexados e enviá-los para uma pasta específica no Google Drive.

---

# 🎯 Objetivos

- Compreender os conceitos de automação No-Code;
- Conhecer a plataforma Make;
- Aprender a criar cenários (Scenarios);
- Integrar o Notion ao Google Drive;
- Automatizar o envio de arquivos;
- Utilizar filtros condicionais;
- Tratar registros sem anexos;
- Processar registros com múltiplos arquivos.

---

# 🧠 O que é o Make?

O **Make** é uma plataforma de integração e automação que conecta diversos aplicativos por meio de fluxos de trabalho visuais. Em vez de realizar tarefas repetitivas manualmente, é possível criar automações que executam ações automaticamente sempre que um determinado evento ocorre.

Alguns exemplos de automação incluem:

- Receber dados de formulários;
- Criar documentos automaticamente;
- Salvar arquivos em serviços de armazenamento;
- Atualizar bancos de dados;
- Enviar notificações;
- Integrar APIs e sistemas externos.

---

# ⚙️ Principais Funcionalidades

## Editor Visual

Permite criar automações utilizando uma interface gráfica baseada em módulos conectados entre si.

Exemplo:

```text
Notion
   ↓
HTTP
   ↓
Google Drive
```

---

## Triggers (Gatilhos)

Os gatilhos iniciam automaticamente uma automação quando um evento ocorre.

Exemplos:

- Novo item criado no Notion;
- Novo formulário respondido;
- Novo arquivo enviado.

---

## Actions (Ações)

Após identificar um gatilho, o Make executa automaticamente uma sequência de ações.

Exemplos:

- Baixar arquivos;
- Criar documentos;
- Atualizar registros;
- Enviar e-mails;
- Fazer upload de arquivos.

---

## Filtros

Os filtros permitem definir condições para controlar o fluxo da automação.

Exemplo:

```text
Possui arquivo?
      │
Sim ───► Continua o fluxo

Não ───► Ignora o registro
```

---

## Manipulação de Dados

O Make oferece diversas funções para transformar informações durante a execução do fluxo, como:

- Formatação de textos;
- Conversão de datas;
- Operações matemáticas;
- Manipulação de listas;
- Conversão de fusos horários.

---

## Integrações

A plataforma possui integração com milhares de aplicativos, incluindo:

- Notion;
- Google Drive;
- Google Docs;
- Google Sheets;
- Gmail;
- Slack;
- Discord;
- GitHub;
- Trello;
- Dropbox;
- APIs REST.

---

## Histórico de Execução

Cada automação gera um histórico contendo:

- Tempo de execução;
- Dados processados;
- Logs completos;
- Erros encontrados.

Esses registros facilitam a identificação e correção de problemas.

---

# 🏢 Aplicações na byron

Durante a capacitação foi apresentado como o Make pode ser utilizado para automatizar diversos processos internos, como:

- Emissão de certificados;
- Termos de voluntariado;
- Termos de encerramento;
- Organização de documentos;
- Integração entre plataformas.

---

# 🛠️ Atividade Desenvolvida

Foi criado um cenário responsável por transferir automaticamente arquivos do Notion para o Google Drive.

Fluxo desenvolvido:

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

---

# 📂 Etapas do Processo

## 1. Notion - Watch Data Source Items

Monitoramento da base de dados para identificar novos registros contendo arquivos.

Informações utilizadas:

- Nome da semana;
- Arquivos anexados;
- URL do arquivo.

---

## 2. HTTP - Download a File

Realiza o download do arquivo utilizando a URL fornecida pelo Notion.

---

## 3. Google Drive - Upload a File

Envia automaticamente o arquivo para a pasta configurada no Google Drive.

Também foi configurado:

- Nome personalizado do arquivo;
- Pasta de destino;
- Organização automática dos documentos.

---

# 🚀 Melhorias Implementadas

## Filtro de Arquivos

Foi adicionado um filtro entre os módulos do Notion e HTTP para impedir que registros sem arquivos interrompessem a execução da automação.

```text
Possui arquivo?
      │
Sim ───► Continua

Não ───► Ignora
```

---

## Processamento Completo

A opção **Choose Where to Start → All** foi utilizada para processar todos os registros existentes na base de dados em uma única execução.

---

## Suporte para Múltiplos Arquivos

Foi implementado um módulo adicional para processar registros que possuem mais de um arquivo anexado, garantindo que todos os documentos sejam enviados corretamente ao Google Drive.

---

# 💻 Ferramentas Utilizadas

- Make;
- Notion;
- HTTP Module;
- Google Drive;
- APIs REST.

---

# 📚 Conhecimentos Adquiridos

Durante esta semana foram desenvolvidos conhecimentos sobre:

- Automação de processos;
- Integração entre aplicações;
- Conceitos de No-Code;
- Criação de cenários no Make;
- Gatilhos e ações;
- Configuração de módulos;
- Manipulação de arquivos;
- Filtros condicionais;
- Tratamento de erros;
- Processamento de múltiplos registros;
- Integração entre Notion e Google Drive.

---

# ✅ Conclusão

A atividade permitiu compreender como criar automações utilizando o Make para integrar diferentes plataformas de forma simples e eficiente. O cenário desenvolvido automatiza o monitoramento de uma base de dados do Notion, realiza o download dos arquivos anexados e os envia automaticamente para o Google Drive.

Além da automação básica, foram implementadas melhorias importantes, como filtros para evitar erros causados por registros sem anexos e suporte para múltiplos arquivos, tornando o fluxo mais robusto, confiável e preparado para aplicações reais.