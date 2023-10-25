class BasePage {
    open(url) {
      browser.url(url);
    }
  
    login(username, password) {
      // Implement your login logic here
      // For example:
      $('#username').setValue(username);
      $('#password').setValue(password);
      $('#loginButton').click();
    }
  }
  
  module.exports = new BasePage();