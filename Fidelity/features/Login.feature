# npx cucumber-js --tags @feature
# npx cucumber-js --tags @TestName
@login
Feature: Login


    @registerUser
    # Test Number: CT001
    Scenario: registerUser
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        And I click on the Password field and type "secret_sauce"
        When I click on login
        Then I should be redirected to the homepage "https://www.saucedemo.com/inventory.html"

    @validLogin
    # Test Number: CT002
    Scenario: performLoginWithValidCredentials
        Given I am on the Swag Labs login page
        And I click on the User field and type "Tester Login"
        And I click on the Password field and type "testador01"
        When I click on Entrar
        Then I should be redirected to the homepage "http://127.0.0.1:8000/accounts/dashboard/"
        And I should see the welcome message "Você está logado no sistema."


    @invalidLogin
    # Test Number: CT003
     Scenario: performLoginWithValidCredentials
        Given I am on the Swag Labs login page
        And I click on the User field and type "Test Login"
        And I click on the Password field and type "testador01"
        When I click on Entrar
        And I should see the error message "Credenciais inválidas" 

    @emptyUsername
    # Test Number: CT004
    Scenario: attemptingToLogInWithoutEnteringAUsername
        Given I am on the Swag Labs login page
        And I click on the Password field and type "secret_sauce"
        When I click on login
        Then I should see the error message "Epic sadface: Username is required"

    @emptyPassword
    # Test Number: CT005
    Scenario: attemptingToLogInWithoutEnteringAPassword
        Given I am on the Swag Labs login page
        And I click on the Username field and type "standard_user"
        When I click on login
        Then I should see the error message "Epic sadface: Password is required"