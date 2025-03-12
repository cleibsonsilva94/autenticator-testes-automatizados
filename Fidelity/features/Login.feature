# npx cucumber-js --tags @feature
# npx cucumber-js --tags @TestName
@login
Feature: Login

    @validLogin
    # Test Number: CT002
    Scenario: performLoginWithValidCredentials
        Given I am on the Autenticator login page
        And I click on the User field and type "Tester Login"
        And I click on the Password field and type "testador01"
        When I click on Entrar
        Then I should be redirected to the homepage "http://127.0.0.1:8000/accounts/dashboard/"
        And I should see the welcome message "Você está logado no sistema."


    @invalidLogin
    # Test Number: CT003
    Scenario: attemptingToLogInWithInvalidCredentials
        Given I am on the Autenticator login page
        And I click on the User field and type "Test Login"
        And I click on the Password field and type "testador01"
        When I click on Entrar
        And I should see the error message "Credenciais inválidas"

    @emptyUsername
    # Test Number: CT004
    Scenario: attemptingToLogInWithoutEnteringAUsername
        Given I am on the Autenticator login page
        And I click on the User field and type ""
        And I click on the Password field and type "testador01"
        When I click on Entrar
        Then I shouldnt be directed to the to the homepage "http://127.0.0.1:8000/accounts/dashboard/"

    @emptyPassword
    # Test Number: CT005
    Scenario: attemptingToLogInWithoutEnteringAPassword
        Given I am on the Autenticator login page
        And I click on the User field and type "Tester Login"
        And I click on the Password field and type ""
        When I click on Entrar
        Then I shouldnt be directed to the to the homepage "http://127.0.0.1:8000/accounts/dashboard/"