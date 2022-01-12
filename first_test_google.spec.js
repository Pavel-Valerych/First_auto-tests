describe ('Testing something in Google', () => {
    // search for something
    it ('I can search something', () => {
        cy.visit('https://google.com');
        cy.get("input[title='Пошук']").type('first auto-test').type('{enter}')
        cy.contains('https://www.guru99.com')
        cy.contains('https://docs.servicenow.com') 
    });
});