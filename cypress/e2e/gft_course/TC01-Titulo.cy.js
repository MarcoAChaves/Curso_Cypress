/// <reference types="cypress" />


describe('Acessar o site', () => {
  beforeEach(() => {
  
    cy.visit('http://qa-brazil-server.gft.com:3001/')
  });

  it('Validar texto', () => {
    cy.contains('Este é o site do Especialista em Qualidade Robson Agapito')
  });

  var nome = 'Marco Antonio';
  var fullname = 'Cordeiro Silva Chaves';
  var email = 'mocv@gft.com';
  var age = 45;

  it('Criar novo usuário', ()=> {
    cy.get('#users').click()
    cy.get('#btn-new').click()
    cy.get('#user_login').type(nome)
    cy.get('#user_full_name').type(fullname)
    cy.get('#user_email').type(email)
    cy.get('#user_age').type(age)
    cy.get('#btn-save').click()
    cy.get('#notice').should('contain', 'Usuário foi criado com sucesso.')
    cy.pause()
  });

  it('Validar cadastro usuário', () => {
    cy.get('#login').should('contain', nome)
    cy.get('#full_name').should('contain', fullname)
    cy.get('#email').should('contain', email)
    cy.get('#age').should('contain', age)
  });

});
