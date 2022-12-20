describe('Langing portfolio page', () => {
    // beforeEach(() => {
    //   cy.visit('https://example.cypress.io/todo')
    // })
    const host = Cypress.env('localhost');

     it('Landing page load successfully',()=> {
       cy.visit(host);
    });

    it('should have navbar', () => {
        cy.visit(host);
        cy.get('nav')
        .children()
        .should('contain', 'Shakti')
        .and('contain', 'Who am i')
        .and('contain', 'Home')
        .and('contain', 'portfolio')
        .and('contain', `let's catch up`)
    });

    it('navbar should have anchor tag', () => {
        cy.visit(host);
        cy.get('a').each( $a => {
            cy.request($a.prop('href'))
        })
    });
        // cy.contains("a", "#").should("not.have.attr", "href", "#undefined");
})