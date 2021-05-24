const { describe } = require("mocha");

const completeName="Juan Carlos Xamarin";
const cedula="118855997";
const usuario="Me voa matar, wiiiii";
const estado="Activo";

describe('When the user wants to add a user',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(3) > a').click();
        cy.get('#standard-basic').click();
        cy.get('#standard-basic').type(completeName);
        cy.get('#identification').click();
        cy.get('#identification').type(cedula);
        cy.get('#username').click();
        cy.get('#username').type(usuario);
        cy.get('#stateA').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
        cy.get('.MuiButtonBase-root').first().click();

    });
    it("then, the user should be listed with the rigth name, cedula, usuario and estado",()=>{
        cy.get('.MuiTableBody-root').contains(':nth-child(1)',completeName).should('be.visible');
        cy.get('.MuiTableBody-root').contains('td',completeName).should('be.visible');
        cy.get('.MuiTableBody-root').contains(':nth-child(2)',cedula).should('be.visible');
        cy.get('.MuiTableBody-root').contains(':nth-child(3)',usuario).should('be.visible');
        cy.get('.MuiTableBody-root').contains(':nth-child(4)',estado).should('be.visible');
    });
});