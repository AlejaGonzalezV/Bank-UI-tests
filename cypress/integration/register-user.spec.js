const { describe } = require("mocha");

const completeName="Juan Carlos Xamarin";
const cedula="118855997";
const usuario="Me voa matar, wiiiii";
const estado="Activo";

describe('When the user wants to add a user',()=>{
    before(()=>{
        cy.visit('https://bank-users-ui.herokuapp.com/register');

    });
});