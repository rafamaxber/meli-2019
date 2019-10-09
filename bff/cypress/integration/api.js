// @ts-check

describe('BFF', () => {
    context('/search', () => {
        const getItems = () =>
            cy.request('/api/items?q=product')
                .its('body')

        it('returns JSON', () => {
            cy.request('/api/items?q=product')
                .its('headers')
                .its('content-type')
                .should('include', 'application/json')
        })

        it('return author in body', () => {
            getItems()
                .then(data =>
                    expect(data.author).to.have.all.keys('name', 'lastname')
                )

        })

        it('return correct contract in body', () => {
            getItems()
                .then(data =>
                    expect(data).to.have.all.keys('author', 'categories', 'items')
                )

        })

        it('items response should have only 4 items', () => {
            getItems()
                .then(data =>
                    expect(data.items.length).to.be.equal(4)
                )

        })

        it('items[] response should a correct contract', () => {
            getItems()
                .then(data =>
                    data.items.forEach(item =>
                        expect(item).to.have.all.keys(
                            'id',
                            'title',
                            'price',
                            'address',
                            'picture',
                            'condition',
                            'free_shipping',
                        ))

                )

        })

        it('items[].price response should a correct contract', () => {
            getItems()
                .then(data =>
                    data.items.forEach(item =>
                        expect(item.price).to.have.all.keys(
                            'currency',
                            'amount',
                            'decimals',
                        )
                    )
                )
        })
    })

    context('/items/:id', () => {
        const getItemById = () =>
            cy.request('/api/items/MLA813038453')
                .its('body')

        it('returns JSON', () => {
            cy.request('/api/items/MLA813038453')
                .its('headers')
                .its('content-type')
                .should('include', 'application/json')
        })

        it('return author in body', () => {
            getItemById()
                .then(data =>
                    expect(data.author).to.have.all.keys('name', 'lastname')
                )

        })

        it('return correct contract in body', () => {
            getItemById()
                .then(data =>
                    expect(data).to.have.all.keys('author', 'item')
                )

        })

        it('item response should a correct contract', () => {
            getItemById()
                .then(data =>
                    expect(data.item).to.have.all.keys(
                        'id',
                        'title',
                        'price',
                        'picture',
                        'condition',
                        'free_shipping',
                        'sold_quantity',
                        'description',
                    )
                )

        })

        it('item.price response should a correct contract', () => {
            getItemById()
                .then(data =>
                    expect(data.item.price).to.have.all.keys(
                        'currency',
                        'amount',
                        'decimals',
                    )
                )
        })
    })
})
