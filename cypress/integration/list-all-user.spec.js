
describe('When the user wants to see the register of the users in the bank',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/',{ timeout: 10000 });
        cy.wait(5000);

    });
    it('Must return the list with length higher than cero if the list isnt empty',()=>{
        cy.get('table').find('tr').should('have.length.greaterThan', 0);
    });
});