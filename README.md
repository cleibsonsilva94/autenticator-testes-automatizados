# Autenticator - Testes Automatizados  

Este repositório contém a automação de testes para validação de autenticação, utilizando **Cucumber** e **Selenium** em **JavaScript**.  

## 📌 Requisitos  

Antes de rodar os testes, certifique-se de que os seguintes componentes estão instalados:  

- **ChromeDriver**: Versão compatível com seu navegador Chrome.  
- **Selenium**: Biblioteca para automação de navegador.  
- **Node.js**: Versão 16 ou superior.  
- **Cucumber**: Framework para testes BDD.  

## 🚀 Instalação  

1. Clone este repositório:  
   ```bash
   git clone https://github.com/cleibsonsilva94/autenticator-testes-automatizados.git
   ```
2. Certifique-se de que os requisitos acima estão instalados.  
3. Consulte o [guia de configuração](https://github.com/cleibsonsilva94/Test.js/blob/main/SimpleTests/ConfiguringtheEnvironment.md) para preparar o ambiente e executar os testes.  

## 🥾 Execução dos Testes  

Para rodar os testes, utilize os seguintes comandos:  

- Executar todos os testes de uma **feature** específica:  
  ```bash
  npx cucumber-js --tags @feature
  ```
  Exemplo:  
  ```bash
  npx cucumber-js --tags "@login"
  ```  

- Executar um teste específico:  
  ```bash
  npx cucumber-js --tags @TestName
  ```
  Exemplo:  
  ```bash
  npx cucumber-js --tags "@invalidLogin"
  ```  

## 📂 Estrutura do Projeto  

### 📄 Funcionalidades (Features)  

- **Login** (`Fidelity/features/Login.feature`) - Testes relacionados ao login do usuário.  

### 🛠 Arquivos de Suporte  

- **`driver.js`** (`Fidelity/features/support/driver.js`) - Gerencia a inicialização do WebDriver.  
- **`url.js`** (`Fidelity/features/support/url.js`) - Armazena as URLs utilizadas nos testes.  
- **`xpathsLoginPage.js`** (`Fidelity/features/support/xpathsLoginPage.js`) - Contém os XPaths da página de login.  
- **`xpathsHomePage.js`** (`Fidelity/features/support/xpathsHomePage.js`) - Contém os XPaths da página inicial.  

### 🔄 Definições de Etapas (Step Definitions)  

- **`Steps.js`** (`Fidelity/features/step_definitions/Steps.js`) - Configurações globais de etapas.  
- **`LoginPageSteps.js`** (`Fidelity/features/step_definitions/LoginPageSteps.js`) - Métodos e funções para a página de login.  
- **`HomePageSteps.js`** (`Fidelity/features/step_definitions/HomePageSteps.js`) - Métodos e funções para a página inicial.  

## 📝 Casos de Teste  

Os casos de teste detalhados estão disponíveis na seguinte planilha:  
📌 [Planilha de Casos de Teste](https://docs.google.com/spreadsheets/d/1FjYs9KdZTmmZmhtVzYMN83ZbOBA1IgQb_GH6zvUkjqI/edit?usp=sharing)  

---
