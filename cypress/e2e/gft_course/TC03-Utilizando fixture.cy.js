/// <reference types="cypress" />

const { setFips } = require('crypto');

describe('Realizar a inclusão de usuário e validar dados', () => {

    it('Utilizando fixture', () => {

        cy.visit('http://qa-brazil-server.gft.com:3001/');

        cy.fixture('user').then((user) => {

            cy.get('#users').click()
            cy.get('#btn-new').click()
            cy.get('#user_login').type(user.login)
            cy.get('#user_full_name').type(user.full_name)
            cy.get('#user_email').type(user.email)
            cy.get('#user_age').type(user.age)
            cy.get('#btn-save').click()
            cy.get('#notice').should('contain', 'Usuário foi criado com sucesso.')

            cy.get('#login').should('contain', user.login)
            cy.get('#full_name').should('contain', user.full_name)
            cy.get('#email').should('contain', user.email)
            cy.get('#age').should('contain', user.age)
        });

          cy.get('#codigo').then(($cod) => {
          cy.writeFile('/cypress/userCod.json', $cod.text())
             });

            cy.readFile('/cypress/userCod.json').then(codUsr => {
           cy.log(codUsr)
           expect(codUsr).to.be.not.null
        });
      });
    });