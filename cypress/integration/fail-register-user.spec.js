const completeName="Juan Carlos Xamarin";
const cedula="118855997";
const usuario="Me voa matar, wiiiii";
const estado="Activo";

describe('When the user wants to add a person withouth the name',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(3) > a').click();
        cy.get('#identification').type(cedula);
        cy.get('#username').click();
        cy.get('#username').type(usuario);
        cy.get('#stateA').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
    });
    it("the button to save must not be enable",()=>{
        cy.get('.MuiButtonBase-root').should('be.disabled');
    });
});

describe('When the user wants to add a person withouth the name',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(3) > a').click();
        cy.get('#standard-basic').click();
        cy.get('#standard-basic').type(completeName);
        cy.get('#username').click();
        cy.get('#username').type(usuario);
        cy.get('#stateA').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
    });
    it("the button to save must not be enable",()=>{
        cy.get('.MuiButtonBase-root').should('be.disabled');
    });
});

describe('When the user wants to add a person withouth the name',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(3) > a').click();
        cy.get('#standard-basic').click();
        cy.get('#standard-basic').type(completeName);
        cy.get('#identification').click();
        cy.get('#identification').type(cedula);
        cy.get('#stateA').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
    });
    it("the button to save must not be enable",()=>{
        cy.get('.MuiButtonBase-root').should('be.disabled');
    });
});

describe('When the user wants to add a person withouth the name',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(3) > a').click();
        cy.get('#standard-basic').click();
        cy.get('#standard-basic').type(completeName);
        cy.get('#identification').click();
        cy.get('#identification').type(cedula);
        cy.get('#username').click();
        cy.get('#username').type(usuario);
    });
    it("the button to save must not be enable",()=>{
        cy.get('.MuiButtonBase-root').should('be.disabled');
    });
});

describe('When the user wants to add a person withouth the name',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/');
        cy.get(':nth-child(3) > a').click();
        cy.get('#standard-basic').click();
        cy.get('#standard-basic').type(completeName);
        cy.get('#identification').click();
        cy.get('#identification').type(cedula);
        cy.get('#username').click();
        cy.get('#username').type(usuario);
        cy.get('.MuiList-root > [tabindex="0"]').click();
        cy.get('.MuiButtonBase-root').first().click();
    });
    it("the button to save must not be enable",()=>{
        
    });
});