const nombreAutor="Juan Carlos Xamarin";
describe('When the user wants to delete a book', ()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/',{ timeout: 10000 });
        cy.wait(5000); 
       
    })
    it('The book should not exist in the library',()=>{
        cy.get("table").contains('tr', nombreAutor).invoke("index").then((i) =>{
            cy.get(`:nth-child(${i+1}) > :nth-child(5) > .MuiGrid-container > :nth-child(2) > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root`).click();
        })
        //cy.get('[nztype="default"]').click();
        cy.get("table").contains('tr', nombreAutor).should('not.exist');
   
    });

})