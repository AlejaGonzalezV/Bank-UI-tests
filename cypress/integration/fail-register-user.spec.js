const completeName="Juan Carlos Xamarin";
const cedula="1007554029";
const usuario="Me voa matar, wiiiii";
const estado="Activo";

describe('When the user wants to add a person withouth the name',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/',{ timeout: 10000 });
        cy.wait(5000); 
        cy.get(':nth-child(3) > a').click();
        cy.get('#identification').type(cedula);
        cy.get('#username').click();
        cy.get('#username').type(usuario);
        cy.get('#stateA').click();
        cy.get('.MuiList-root > [tabindex="0"]').click();
    });
    it("the button to save must not be enable",()=>{
        cy.get('.MuiButtonBase-root',{ timeout: 10000 }).should('be.disabled');
    });
});

describe('When the user wants to add a person withouth the cedula',()=>{
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

describe('When the user wants to add a person withouth the nickname',()=>{
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

describe('When the user wants to add a person withouth the status',()=>{
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
describe('When the user wants to add a person that is already in the data base',()=>{
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
    it.only("the button to save must not be enable",()=>{
        cy.get('.MuiPaper-root',{ timeout: 10000 }).should('be.visible');
    });
});
