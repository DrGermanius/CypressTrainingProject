import Chance from 'chance'
import RandomForTests from "../../page-objects/functionRandom"

describe('Test for swagger petstore', () => {
    before(() => {

    })


    let testingData = [
        {
            description: "Max values",

            requestData: {
                name: Chance().string({length: 100}),
                id: Chance().integer({min: 0, max: 100}),
                status: chance.pickone(['available', 'pending', 'sold ']),
                photoUrl: RandomForTests.fillUrls(100),
                tags: RandomForTests.fillTags(100),

            }
        },

        {
            description: "Avg values",
            requestData: {
                name: Chance().string({length: 50}),
                id: Chance().integer({min: 0, max: 100}),
                status: chance.pickone(['available', 'pending', 'sold ']),
                photoUrl: RandomForTests.fillUrls(Chance().integer({min: 0, max: 100})),
                tags: RandomForTests.fillTags(Chance().integer({min: 0, max: 100})),
            }
        },

        {
            description: "Min values",
            requestData: {
                name: Chance().string({length: 1}),
                id: Chance().integer({min: 0, max: 100}),
                status: chance.pickone(['available', 'pending', 'sold ']),
                photoUrl: RandomForTests.fillUrls(1),
                tags: RandomForTests.fillTags(1),

            }
        }
    ];

    testingData.forEach(({description, requestData}) => {
        it(`Positive: Create pet ${description}`, () => {
            cy.request('POST', 'https://petstore.swagger.io/v2/pet', requestData).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', requestData.name);
                expect(response.body).to.have.property('id', requestData.id);
            })
        })
    });


    it('Positive: Add pet', () => {
        cy.fixture('pet').then(pet => {
            cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                body: pet
            }).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', pet.name);
                console.log(response);
            })
        })
    });


    it('Positive: Update pet', () => {
        cy.fixture('pet').then(pet => {
            cy.request({
                method: 'POST',
                url: 'https://petstore.swagger.io/v2/pet',
                failOnStatusCode: false,
                body: pet
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
});