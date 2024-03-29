describe('Student page test', ()=>{
    it('check student list', ()=> {
        // Visit the student-add page
        cy.visit('/student-add');
        cy.url().should('include', '/student-add');
        cy.get('#name').type('hello').should('have.value','hello')
        cy.get('#id').type('hello123').should('have.value','hello123');
        cy.get('#gender').type('female').should('have.value','female');
        cy.get('#address').type('No,8 lotus street').should('have.value','No,8 lotus street');
        // click the save btn
        cy.contains('Save').click();
        cy.url().should('include', '/students');
        
    })

    // it('should display validation error for empty name field', () => {
    //     // Visit the student-add page
    //     cy.visit('/student-add');
    //     cy.url().should('include', '/student-add');
    //     cy.get('#id').type('hello123').should('have.value', 'hello123');
    //     cy.get('#gender').type('female').should('have.value', 'female');
    //     cy.get('#address').type('No,8 lotus street').should('have.value', 'No,8 lotus street');
    //     cy.contains('Save').click();
    //     cy.get('#name').should('be.visible');

    //     // Assert that the validation error for the empty name field is displayed
    //     cy.contains('Name is required').should('be.visible');
    // });

    // it('should display validation error for empty id field', () => {
    //     cy.visit('/student-add');
    //     cy.url().should('include','/student-add');
    //     cy.get('#name').type('hello').should('have.value','hello');
    //     cy.get('#gender').type('female').should('have.value', 'female');
    //     cy.get('#address').type('No,8 lotus street').should('have.value', 'No,8 lotus street');
    //     cy.contains('Save').click();
    //     cy.get('#id').should('be.visible')
    //      // Assert that the validation error for the empty name field is displayed
    //     cy.contains('Id is required').should('be.visible');
    // })


});















// Radio button 
// checkbox
// cypress version notes
// Depreciated cy.routes instead of routes now we are using cy.intercept ... If we need to test API or network request we have to use cy.intercept