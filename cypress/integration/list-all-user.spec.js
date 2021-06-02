
describe('when the user wants to register a book',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/',{ timeout: 10000 });
        cy.wait(5000);

    });
    it("The book is created with the author and the title",()=>{
        cy.get('table').find('tr').should('have.length.greaterThan', 0);
    });
});