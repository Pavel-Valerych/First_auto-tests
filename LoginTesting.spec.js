describe ('Login testing', () => {
    
    //positive test 
    it ('login test with valid input data', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin123')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('not.exist')    
    });

    //1-st negative test
    it ('incorrect password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#txtUsername').type('Admin')
        cy.get('#txtPassword').type('admin1234')
        cy.get('#btnLogin').click()
        cy.get('#spanMessage').should('exist')
    });

    //2-nd negative test
    it('input fields are empty', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get('#btnLogin').click()  
        cy.get('#spanMessage').should('contain', 'Username cannot be empty')
    });
});