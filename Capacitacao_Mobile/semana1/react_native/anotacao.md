# Expo: conceitos e comandos básicos

## O que é

Conjunto de ferramentas e serviços construído sobre o React Native. Ele cuida de boa parte da configuração nativa (Android/iOS), então dá para começar a desenvolver com bem menos setup. A documentação oficial do React Native recomenda o Expo como forma de começar um projeto novo.

## Expo x React Native CLI

|                                  | Expo                                     | React Native CLI                                      |
| -------------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| Configuração inicial             | Mínima                                   | Precisa de Android Studio, JDK, variáveis de ambiente |
| Pastas `android/` e `ios/`       | Geradas só se necessário                 | Sempre presentes                                      |
| Testar no celular                | Pelo app **Expo Go**, escaneando QR code | Instalar o app compilado                              |
| Bibliotecas nativas customizadas | Via _development build_                  | Direto                                                |
| Controle do código nativo        | Menor (mas dá para "abrir" com prebuild) | Total                                                 |

## O que precisa ter

- **Node.js** (já instalado).
- Um editor de código (VS Code).
- Um destino para rodar o app:
  - **Celular** com o app **Expo Go** instalado (a forma mais simples), ou
  - **Emulador Android** (o Android Studio que você já configurou serve).
- Android Studio e JDK **não são obrigatórios** para o Expo Go, mas são úteis para usar o emulador.

## Criar um projeto

```
npx create-expo-app@latest NomeDoApp
cd NomeDoApp
```

- Nome sem espaços e sem caracteres especiais.
- O template padrão já vem com **TypeScript** e **Expo Router** (rotas baseadas em arquivos na pasta `app/`).

## Rodar o projeto

```
npx expo start
```

Isso abre o servidor de desenvolvimento (Metro) e mostra um QR code no terminal.

- **No celular**: abrir o Expo Go e escanear o QR code. Celular e computador precisam estar na **mesma rede Wi-Fi**.
- **No emulador Android**: com o emulador aberto, apertar `a` no terminal do Expo.
- **No navegador**: apertar `w` (versão web).

Se o QR code não conectar (rede com restrições), tentar:

```
npx expo start --tunnel
```

## Atalhos no terminal do Expo

- `a`: abre no emulador/dispositivo Android.
- `w`: abre no navegador.
- `r`: recarrega o app.
- `m`: abre o menu de desenvolvedor.
- `Ctrl + C`: encerra o servidor.

## Comandos do dia a dia

| Comando                           | Para que serve                                                        |
| --------------------------------- | --------------------------------------------------------------------- |
| `npx expo start`                  | Inicia o servidor de desenvolvimento                                  |
| `npx expo start -c`               | Inicia limpando o cache                                               |
| `npx expo install nome-do-pacote` | Instala uma biblioteca **na versão compatível com o seu SDK do Expo** |
| `npx expo-doctor`                 | Diagnostica problemas no projeto e nas dependências                   |
| `npx expo install --fix`          | Corrige versões de dependências incompatíveis com o SDK               |
| `npm install`                     | Instala as dependências do `package.json`                             |

Dica: para bibliotecas do ecossistema Expo/React Native, prefira `npx expo install` em vez de `npm install`, para evitar conflito de versões.

## Expo Go x Development Build

- **Expo Go**: app pronto da loja. Ótimo para aprender e prototipar, mas só roda as bibliotecas nativas que já vêm incluídas nele.
- **Development build**: versão do **seu** app com as bibliotecas nativas que você escolher. Necessário quando o projeto usa algo que o Expo Go não suporta.

Para gerar uma development build local no Android (precisa de Android Studio, JDK 17 e `ANDROID_HOME`, ou seja, o ambiente que você já montou):

```
npx expo run:android
```

Esse comando gera a pasta `android/` (prebuild) e compila o app.

## Gerar o app para distribuir (EAS)

**EAS** (Expo Application Services) compila o app na nuvem, sem precisar de Mac para iOS.

```
npm install -g eas-cli
eas login
eas build:configure
eas build --platform android
```

- Exige conta gratuita no Expo.
- O resultado é um `.apk` ou `.aab` para instalar ou publicar na Play Store.

## Estrutura básica do projeto

- `app/`: telas e rotas (cada arquivo vira uma rota, com o Expo Router).
- `assets/`: imagens e fontes.
- `components/`: componentes reutilizáveis.
- `app.json` (ou `app.config.js`): configuração do app (nome, ícone, pacote Android).
- `package.json`: dependências e scripts.

## Erros comuns

- **QR code não conecta**: celular e PC em redes diferentes. Usar a mesma rede ou `--tunnel`.
- **App abre e dá erro de versão / "incompatible"**: o Expo Go só suporta determinadas versões do SDK do Expo. Atualizar o Expo Go ou o projeto.
- **Biblioteca nativa não funciona no Expo Go**: usar uma development build (`npx expo run:android`).
- **Dependência com versão estranha**: rodar `npx expo install --fix` e `npx expo-doctor`.
- **Código alterado e nada muda**: `r` no terminal ou `npx expo start -c`.

## Atenção

Comandos, versões do SDK e templates do Expo mudam com frequência. Antes de criar um projeto novo, confira em **docs.expo.dev** se o comando de criação e os requisitos continuam os mesmos.
