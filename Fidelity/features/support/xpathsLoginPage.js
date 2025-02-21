// ======================== LOGIN PAGE XPATHS ========================= \\

module.exports = {
    XPATH_FOR_USERNAME_FIELD: "//input[@name='username']",
    XPATH_FOR_PASSWORD_FIELD: "//input[@name='password']", 
    XPATH_LOGIN_BUTTON: "//button[text()='Entrar' and @class='btn btn-primary w-100']", 
    XPATH_ERROR_MESSAGE: "//div[@class='error-message-container error']",
    WELCOME_MESSAGE_PATH: "//p[text()='Você está logado no sistema.']",
    LOGGED_AREA: "//div[@id='navbarNav']//a[@href='/accounts/dashboard/']"
  };