describe('Mercado Livre', () => {
    context('/', () => {

        beforeEach(() => {
            cy.visit('http://localhost:3000');
        });

        it('smoke test', () => {
            cy.get('img[title="Mercado Libre"]');
            cy.get('[data-search]');
            cy.get('form button[type="submit"]');
        });

        it('search product', () => {
            cy.get('[data-search]')
                .click()
                .type('redmi note 7');

            cy.get('form button[type="submit"]')
                .click();

            cy.get('[aria-label="Breadcrumb"]');

            cy.get('[data-card]')
                .should('have.length', 4);

        });

        it('view product details', () => {
            cy.get('[data-search]')
                .click()
                .type('redmi note 7');

            cy.get('form button[type="submit"]')
                .click();

            cy.get('[data-card] img')
                .first()
                .click();

            cy.get('img[data-img]');
            cy.get('[data-condition]').findAllByText(/new/g);
            cy.get('[data-quantity]').findAllByText(/25/g);
            cy.get('[data-sold]').findAllByText(/vendidos/g);
            cy.get('[data-title]').findAllByText(/Xiaomi Redmi Note 7 Dual Sim 64/g);
            cy.get('[data-price]').findAllByText(/\$16,598/g);
            cy.get('[data-btn]').findAllByText(/Comprar/g);
            cy.get('[data-description]').findAllByText(/En conjunto, este teléfono tiene una/g);
        });
    });

});
