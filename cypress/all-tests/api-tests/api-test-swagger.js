describe('Test for swagger petstore', () => {
    before(() => {

    })
});

it('Positive: Add pet', () => {
    cy.fixture('pet').then(pet => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            failOnStatusCode: false,
            body: {pet}
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('status');
        })
    })
});


it('Positive: Update pet', () => {
    cy.fixture('pet').then(pet => {
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/pet',
            failOnStatusCode: false,
            body: {pet}
        }).then(response => {
            expect(response.status).to.eq(200);
        })
    })
});

it('Positive: Get pet', () => {
    cy.fixture('pet').then(pet => {
        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus',
        }).then(response => {
            expect(response.status).to.eq(200);
        })
    })
});
