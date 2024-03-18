/// <reference types="cypress" />

describe('Acessar o site e validar o texto de apresentação', () => {

 it('acesso ao site e validar o texto',() =>{
  
    cy.visit('http://qa-brazil-server.gft.com:3001/')
    cy.contains('Este é o site do Especialista em Qualidade Robson Agapito')
  });
});
