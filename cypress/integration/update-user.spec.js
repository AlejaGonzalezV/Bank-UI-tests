const { describe } = require("mocha");

const completeName="Pruebita de update";
var cedula;
const usuario="Ya no me voa matar, wiii";
var estado="";

describe('When the user wants to add a user',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(2) > a').click();
        cy.get(':nth-child(1) > :nth-child(5) > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click();
        cy.get('#standard-basic').click();
        cy.get('#standard-basic').clear();
        cy.get('#standard-basic').type(completeName);
        cy.get('#identification').invoke('val').then(some=>{
        cedula=some;
        cy.log(cedula);
        });
        cy.get('#username').click();
        cy.get('#username').clear();
        cy.get('#username').type(usuario);
        cy.get('#stateA').click();
        cy.get('.MuiList-root > [tabindex="-1"]').invoke('val').then(thetest=>{
        estado=thetest;
        cy.log(estado);
        });
        cy.get('.MuiList-root > [tabindex="-1"]').click();
        cy.get('.MuiButtonBase-root').first().click();
    });
    it("then, the user should be listed with the rigth name, cedula, usuario and estado",()=>{
        console.log(cedula);
        cy.get('.MuiTableBody-root').contains(':nth-child(1)',completeName).should('be.visible');
        cy.get('.MuiTableBody-root').contains(':nth-child(2)',cedula).should('be.visible');
        cy.get('.MuiTableBody-root').contains(':nth-child(3)',usuario).should('be.visible');
        cy.get('.MuiTableBody-root').contains(':nth-child(4)',estado).should('be.visible');
    });
});