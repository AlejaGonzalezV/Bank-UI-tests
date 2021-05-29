const { describe } = require("mocha");

const completeName="Terranova";
const cedula="464613543543";
const usuario="manchas";
const estado="Activo";
//Coreggir esto

describe('When the user wants to edit a user and missing the name',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(1) > :nth-child(5) > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click();
        cy.get('#standard-basic').click();
        cy.get('#standard-basic').clear();
    });
    it("then, save button must be disabled and can't do click to save the edit user",()=>{
        cy.get('.MuiButtonBase-root').first().should('be.disabled');
    });
});

describe('When the user wants to edit a user and its missing the user',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(1) > :nth-child(5) > .MuiGrid-container > :nth-child(1) > .MuiButtonBase-root').click();
        cy.get('#username').click();
        cy.get('#username').clear();
    });
    it("then, save button must be disabled and can't do click to save the edit user",()=>{
        cy.get('.MuiButtonBase-root').first().should('be.disabled');
    });
});

//I don't prove the cedula and the state because the cedula must not be updated and with the state there is always going to be an state
//because there is a drop down menu with only two states and no empty option

