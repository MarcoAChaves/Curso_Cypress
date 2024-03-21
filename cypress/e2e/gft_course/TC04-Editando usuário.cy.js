/// <reference types="cypress" />


describe('Editar dados de usuário', () => {

    it('atualizando usuario', () => {

        cy.visit('http://qa-brazil-server.gft.com:3001/');

        cy.fixture('user').then((user) => {

        cy.get('#users').click()
        cy.get('#btn-edit_291> .ls-btn').click()
        cy.get('#user_login').clear()
        cy.get('#user_login').type(user.login)
        cy.get('#user_full_name').clear()
        cy.get('#user_full_name').type(user.full_name)
        cy.get('#user_email').clear()
        cy.get('#user_email').type(user.email)
        cy.get('#user_age').clear()
        cy.get('#user_age').type(user.age)
        cy.get('#btn-save').click()

        cy.get('#login').should('contain', user.login)
            cy.get('#full_name').should('contain', user.full_name)
            cy.get('#email').should('contain', user.email)
            cy.get('#age').should('contain', user.age)
        });

        cy.get('#codigo').then(($cod) => {
        cy.writeFile('/cypress/fixtures/userCod.txt', $cod.text())
        });

        cy.readFile('/cypress/fixtures/userCod.txt').then(codUsr => {
         cy.log(codUsr)
        expect(codUsr).to.be.not.null
       });

       cy.get('.ls-btn-primary-danger').click()
       cy.get('#btn-delete_291 > .ls-btn-primary-danger').click()
       cy.readFile('/cypress/fixtures/userCod.txt').then(codUsr => {
        cy.log(codUsr)
       expect(codUsr).not.exist
      });
    });
});    
   