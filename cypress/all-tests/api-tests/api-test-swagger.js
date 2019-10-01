describe('Test for swagger petstore', () => {
    before(() => {

    })
});

it('Negative: Add pet', () => {
    cy.fixture('pet').then(pet => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2',
            failOnStatusCode: false,
            body: {pet}
        }).then(response => {
            expect(response.status).to.eq(405);
        })
    })
});
