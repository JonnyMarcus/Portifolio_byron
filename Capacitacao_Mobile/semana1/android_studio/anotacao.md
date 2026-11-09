# Android Studio e Emulador (React Native no Windows)

## Conceitos básicos

- **JDK** (Java Development Kit): kit para compilar Java. O Gradle e o Android Studio dependem dele. Instalado: **OpenJDK 17 (Microsoft)**.
- **SDK** (Software Development Kit): pacote do Android com as versões do sistema, o `adb`, o emulador etc. O React Native precisa dele para gerar o app Android.
- **JAVA_HOME**: variável que aponta para o JDK.
- **ANDROID_HOME**: variável que aponta para a SDK.
- **adb** (Android Debug Bridge): ferramenta de linha de comando que o React Native usa para falar com o emulador ou com o celular.

## Já configurado

- Java 17 instalado e reconhecido no terminal (`java -version`).
- `JAVA_HOME` = `C:\Program Files\Microsoft\jdk-17.0.20.101-hotspot\`
  - Se o Gradle ou o Android Studio reclamar do caminho do Java, remover a barra `\` do final.

## Instalação do Android Studio

1. Abrir o Android Studio e escolher **Do not import settings**.
2. Tipo de instalação: **Custom**.
3. Tela do JDK: selecionar **JAVA_HOME** (aponta para o JDK 17).
4. Tela da SDK: marcar tudo e conferir o caminho (sem espaços e sem acentos, se possível).
   - Não marcar o HAXM se for usar Hyper-V ou processador AMD.
5. Esperar o download e clicar em **Finish**.

## Variáveis de ambiente

1. Copiar o **Android SDK Location** em `More Actions > SDK Manager`.
   - Costuma ser `C:\Users\<usuario>\AppData\Local\Android\Sdk`.
2. Abrir _Editar as variáveis de ambiente do sistema > Variáveis de Ambiente_.
3. Criar a variável de usuário `ANDROID_HOME` com o caminho copiado.
4. Editar o `Path` e adicionar:
   - `%ANDROID_HOME%\emulator`
   - `%ANDROID_HOME%\platform-tools`
5. As entradas `%ANDROID_HOME%\tools` e `%ANDROID_HOME%\tools\bin` do tutorial **não são necessárias**: essas pastas não existem nas versões atuais.
6. Fechar todos os CMDs e abrir um novo.

### Teste

```
adb --version
```

Se aparecer a versão do Android Debug Bridge, está tudo certo.
Se der "não é reconhecido": conferir o `ANDROID_HOME` e a linha `platform-tools` no `Path`.

## Emulador

Criar em `Device Manager > Create Device`.

Configuração escolhida:

| Item        | Valor                            |
| ----------- | -------------------------------- |
| Dispositivo | Pixel 7 (1080 x 2400, 420 dpi)   |
| ABI         | x86_64 (certo para PC Intel/AMD) |
| Serviços    | Google Play                      |
| API         | 37                               |

### Sobre a versão da API

- O emulador **não precisa** ter a mesma versão do Android que o projeto compila. Um app compilado com SDK mais antiga roda num Android mais novo.
- Versões muito recentes tendem a ter mais bugs de emulador e de compatibilidade no começo do ciclo.
- Para quem está começando, o mais seguro é uma versão estável um pouco anterior (por exemplo API 35 ou 36).
- Se o emulador travar, ficar lento ou o app der erro estranho de compatibilidade: criar outro dispositivo com API mais baixa.

### Conferir a SDK do projeto

Ao criar o projeto React Native, olhar o `compileSdkVersion` em `android/build.gradle` e instalar essa plataforma em `SDK Manager > SDK Platforms`, se ainda não estiver instalada.

## Problemas comuns

- **`java –version` dá `ClassNotFoundException: ?version`**: o traço foi copiado do site como "en dash" (–). Digitar o hífen normal (-) manualmente.
- **`'adb' não é reconhecido`**: variável `ANDROID_HOME` ou `Path` errados, ou o terminal não foi reaberto depois de editar as variáveis.
- **Erro de caminho do Java no Gradle**: conferir o `JAVA_HOME` (sem a barra final e apontando para o JDK 17).
