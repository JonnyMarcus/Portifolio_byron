# React Native: conceitos e comandos básicos

## O que é

Framework para criar apps nativos (Android e iOS) usando JavaScript/TypeScript e React. O código é escrito uma vez e roda em Android e iOS, com componentes nativos.

## Peças do ambiente

- **Node.js / npm / yarn**: executam o JavaScript e instalam as dependências.
- **JDK 17**: o Gradle precisa dele para compilar a parte Android.
- **Android Studio + SDK**: fornecem as ferramentas Android e o emulador.
- **Metro**: servidor que empacota (faz o _bundle_) o seu código JavaScript e envia para o app. Roda no terminal.
- **Gradle**: ferramenta que monta o app Android (pasta `android/`).

## Verificar o ambiente

```
node -v
npm -v
java -version
adb --version
```

Diagnóstico geral do React Native (aponta o que falta ou está errado):

```
npx react-native doctor
```

## Criar um projeto

```
npx @react-native-community/cli@latest init NomeDoApp
```

- Use nome sem espaços e sem caracteres especiais.
- Entre na pasta: `cd NomeDoApp`.
- Para um projeto novo, a documentação oficial do React Native também recomenda o **Expo** (`npx create-expo-app@latest`). É outro caminho, que dispensa parte da configuração de Android Studio. Este material cobre o caminho **sem Expo** (CLI), que é o que o ambiente configurado atende.

## Rodar o app no Android

1. Abrir o emulador (Device Manager do Android Studio) ou conectar um celular com depuração USB ativada.
2. Conferir se o dispositivo aparece:

```
adb devices
```

3. Na pasta do projeto:

```
npx react-native run-android
```

Esse comando compila o app, instala no dispositivo e abre o Metro, se não estiver rodando.

Também é possível separar em dois terminais:

```
npx react-native start
npx react-native run-android
```

- O primeiro inicia só o Metro.
- O segundo compila e instala o app.

## Comandos do dia a dia

| Comando                                | Para que serve                                                           |
| -------------------------------------- | ------------------------------------------------------------------------ |
| `npx react-native start`               | Inicia o Metro                                                           |
| `npx react-native start --reset-cache` | Inicia o Metro limpando o cache (útil quando o código "não atualiza")    |
| `npx react-native run-android`         | Compila e abre o app no Android                                          |
| `npx react-native doctor`              | Diagnostica o ambiente                                                   |
| `npm install` ou `yarn`                | Instala as dependências do `package.json`                                |
| `npm install nome-do-pacote`           | Adiciona uma biblioteca                                                  |
| `adb devices`                          | Lista dispositivos/emuladores conectados                                 |
| `adb reverse tcp:8081 tcp:8081`        | Liga a porta do Metro ao dispositivo (resolve "não conecta ao servidor") |

## Atalhos no terminal do Metro

- `r`: recarrega o app.
- `d`: abre o menu de desenvolvedor.
- `Ctrl + C`: encerra o Metro.

## Limpar quando algo estranho acontece

Limpar o build do Android (a partir da pasta do projeto):

```
cd android
.\gradlew clean
cd ..
```

Depois rodar de novo:

```
npx react-native start --reset-cache
npx react-native run-android
```

Se ainda assim der problema, apagar a pasta `node_modules` e reinstalar com `npm install`.

## Estrutura básica do projeto

- `App.tsx` (ou `App.js`): componente principal, ponto de partida.
- `android/`: projeto nativo Android (Gradle).
- `ios/`: projeto nativo iOS (só compila em Mac).
- `package.json`: dependências e scripts.
- `node_modules/`: bibliotecas instaladas (não vai para o Git).
- `index.js`: registra o componente principal no app.

## Componentes básicos

Em vez de tags HTML, usam-se componentes do React Native:

- `View`: equivale a uma `div`.
- `Text`: todo texto precisa estar dentro dele.
- `Image`: imagens.
- `TextInput`: campo de texto.
- `TouchableOpacity` / `Pressable`: elementos clicáveis.
- `ScrollView` / `FlatList`: listas e rolagem.
- `StyleSheet.create({...})`: estilos (parecido com CSS, mas escrito em objeto JavaScript, com nomes em camelCase, como `backgroundColor`).

## Erros comuns

- **`'adb' não é reconhecido`**: `ANDROID_HOME` ou `Path` errados, ou terminal não foi reaberto.
- **`SDK location not found`**: o `ANDROID_HOME` não está definido (ou falta o arquivo `android/local.properties` com `sdk.dir=`).
- **App abre vermelho / "Unable to load script"**: Metro não está rodando ou o dispositivo não alcança a porta 8081. Iniciar o Metro e rodar `adb reverse tcp:8081 tcp:8081`.
- **Código alterado e nada muda**: recarregar com `r` ou iniciar com `--reset-cache`.
- **Erro de versão do Java no Gradle**: conferir se o `JAVA_HOME` aponta para o JDK 17.
