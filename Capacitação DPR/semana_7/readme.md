# ⚙️ Semana 7 — Make | Automação de Processos

**Capacitação DPR • byron.solutions**

## 📖 Sobre

Na sétima semana foi apresentada a plataforma **Make**, uma ferramenta de automação *no-code* que integra diferentes aplicações e automatiza processos de forma visual. O objetivo foi compreender como criar fluxos de trabalho capazes de conectar serviços como **Notion** e **Google Drive**, reduzindo tarefas manuais, aumentando a produtividade e minimizando erros.

Como atividade prática, foi desenvolvido um cenário que monitora uma base de dados do Notion, baixa automaticamente os arquivos anexados e os envia para uma pasta específica no Google Drive.

## 🎯 Objetivos

- Compreender os conceitos de automação no-code
- Conhecer a plataforma Make e seus cenários (scenarios)
- Integrar o Notion ao Google Drive
- Automatizar o envio de arquivos
- Utilizar filtros condicionais
- Tratar registros sem anexos e registros com múltiplos arquivos

## 🧠 O que é o Make?

Uma plataforma de integração que conecta aplicativos por meio de fluxos de trabalho visuais, executando ações automaticamente sempre que um evento definido ocorre — como receber dados de um formulário, salvar arquivos em um serviço de armazenamento ou atualizar um banco de dados.

## ⚙️ Conceitos centrais da plataforma

| Conceito | O que é |
|---|---|
| **Editor visual** | Interface gráfica baseada em módulos conectados entre si |
| **Triggers (gatilhos)** | Iniciam a automação quando um evento ocorre (ex: novo item criado no Notion) |
| **Actions (ações)** | Executadas após o gatilho (ex: baixar arquivo, atualizar registro, enviar e-mail) |
| **Filtros** | Definem condições para controlar o fluxo (ex: "possui arquivo? sim → continua / não → ignora") |
| **Manipulação de dados** | Formatação de textos, conversão de datas, operações matemáticas, manipulação de listas |
| **Integrações** | Milhares de apps conectáveis: Notion, Google Drive/Docs/Sheets, Gmail, Slack, Discord, GitHub, Trello, Dropbox, APIs REST |
| **Histórico de execução** | Tempo de execução, dados processados, logs e erros de cada rodada |

## 🛠️ Atividade desenvolvida

Cenário para transferir automaticamente arquivos do Notion para o Google Drive:

```text
Notion (Watch Data Source Items)
        ↓
HTTP (Download a File)
        ↓
Google Drive (Upload a File)
```

**1. Notion — Watch Data Source Items:** monitora a base de dados para identificar novos registros com arquivos (nome da semana, arquivos anexados, URL do arquivo).

**2. HTTP — Download a File:** baixa o arquivo usando a URL fornecida pelo Notion.

**3. Google Drive — Upload a File:** envia o arquivo para a pasta configurada, com nome personalizado e organização automática dos documentos.

## 🚀 Melhorias implementadas

| Melhoria | O que resolve |
|---|---|
| **Filtro de arquivos** | Impede que registros sem anexos interrompam a execução da automação |
| **Processamento completo (`Choose Where to Start → All`)** | Processa todos os registros existentes na base em uma única execução |
| **Suporte a múltiplos arquivos** | Módulo adicional (Iterator) para registros com mais de um arquivo anexado, garantindo que todos sejam enviados |

## 🏢 Aplicações na byron

Emissão de certificados · termos de voluntariado e de encerramento · organização de documentos · integração entre plataformas internas

## 🛠️ Ferramentas utilizadas

Make · Notion · HTTP Module · Google Drive · APIs REST

## 📚 Conhecimentos adquiridos

Automação de processos · integração entre aplicações · conceitos de no-code · gatilhos e ações · configuração de módulos · filtros condicionais · tratamento de erros · processamento de múltiplos registros

## ✅ Conclusão

A atividade permitiu compreender como criar automações no Make para integrar diferentes plataformas de forma simples e eficiente, indo além do fluxo básico com melhorias que tornam a automação mais robusta e preparada para aplicações reais — filtros contra registros sem anexo e suporte a múltiplos arquivos por registro.

<div align="center">

### ⚙️ Semana 7 — Make | Automação de Processos

**Capacitação DPR • byron.solutions**

</div>
