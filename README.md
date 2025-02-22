# autenticator-testes-automatizados

---

## Requisitos

Antes de rodar os testes, certifique-se de que os seguintes componentes estão instalados na sua máquina:

- **ChromeDriver**: Versão compatível com o seu navegador Chrome.
- **Selenium**: Biblioteca para controle do navegador.
- **JavaScript**: Linguagem usada para a automação.
- **Node.js**: Versão 16 ou superior.
- **Cucumber**: Ferramenta para execução dos testes BDD.

---

## Instalação

1. Clone este repositório para o seu espaço de trabalho.
2. Certifique-se de que os requisitos acima estão instalados.
3. Consulte o tutorial para configurar o ambiente e executar os testes:  
   https://github.com/cleibsonsilva94/Test.js/blob/main/SimpleTests/ConfiguringtheEnvironment.md

---

## Comandos para rodar testes

- Rodar todos os testes de uma **feature**:  
  `npx cucumber-js --tags @feature`  
  Exemplo: `npx cucumber-js --tags "@login"`

- Rodar um teste específico:  
  `npx cucumber-js --tags @TestName`  
  Exemplo: `npx cucumber-js --tags "@invalidLogin"`

---

## Classes

### Feature

- **Login.feature**: `Fidelity/features/Login.feature`
 Relacionado aos testes de login.

### Arquivos de Suporte

- **driver.js**: `Fidelity/features/support/driver.js`
  Arquivo responsável por gerenciar o WebDriver.

- **url.js**: `Fidelity/features/support/url.js` 
  Arquivo que armazena as URLs utilizadas nos testes.

- **xpathsLoginPage.js**: `Fidelity/features/support/xpathsLoginPage.js`  
  Arquivo que contém os XPaths utilizados na página de login.

- **xpathsHomePage.js**: `Fidelity/features/support/xpathsHomePage.js`  
  Arquivo que contém os XPaths utilizados na página de login.

### Arquivos de Definições de Etapas

- **Steps.js**: `Fidelity/features/step_definitions/Steps.js`  
  Arquivo com configurações globais de etapas.

- **LoginPageSteps.js**:  `Fidelity/features/step_definitions/LoginPageSteps.js`  
  Arquivo que contém os métodos e funções utilizados na página de login.

- **HomePageSteps.js**: `Fidelity/features/step_definitions/HomePageSteps.js`  
  Arquivo que contém os métodos e funções utilizados na página Home.

  ### Páginas e Funcionalidades Testadas

- **Página de Login**: Testes relacionados ao login do usuário, incluindo validação de credenciais. 

## Casos de Teste

Os casos de teste podem ser encontrados aqui:  
[Planilha de Casos de Teste](https://docs.google.com/spreadsheets/d/1FjYs9KdZTmmZmhtVzYMN83ZbOBA1IgQb_GH6zvUkjqI/edit?usp=sharing)
