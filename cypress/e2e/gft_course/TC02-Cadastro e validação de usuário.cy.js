/// <reference types="cypress" />

describe('Realizar a inclusão de usuário e validar dados', () => {
    var nome = 'Marco Antonio';
    var fullname = 'Cordeiro Silva Chaves';
    var email = 'mocv@gft.com';
    var age = 45;

  it('Criar novo usuário', ()=> {
    
    cy.visit('http://qa-brazil-server.gft.com:3001/')

    cy.get('#users').click()
    cy.get('#btn-new').click()
    cy.get('#user_login').type(nome)
    cy.get('#user_full_name').type(fullname)
    cy.get('#user_email').type(email)
    cy.get('#user_age').type(age)
    cy.get('#btn-save').click()
    cy.get('#notice').should('contain', 'Usuário foi criado com sucesso.')

    cy.get('#login').should('contain', nome)
    cy.get('#full_name').should('contain', fullname)
    cy.get('#email').should('contain', email)
    cy.get('#age').should('contain', age)
    
  });
    
});