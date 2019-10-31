import Chance from 'chance'
import {createPet, deletePet, getPetById, updatePet} from "../../../service/petService"
import {DATA_OPTIONS, fillUrls, getPetRequestData} from "../../../utils/requestsDataGenerator";
import {API_URL} from "../../../service/apiSettings";
import {PET_LIMIT} from "../../../utils/limits";

describe('Tests for Create Pet endpoint', () => {

    let testingData = [
        {description: 'All fields: Max values', requestData: getPetRequestData(DATA_OPTIONS.MAX)},
        {description: 'All fields: Average values', requestData: getPetRequestData(DATA_OPTIONS.AVERAGE)},
        {description: 'All fields: Min values', requestData: getPetRequestData(DATA_OPTIONS.MIN)}
    ];

    testingData.forEach(({description, requestData}) => {
        it(description, () => {
            createPet(requestData).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('id', requestData.id);
                expect(response.body.id).to.be.greaterThan(0)
                expect(response.body).to.have.property('name', requestData.name);
                expect(response.body.photoUrls).to.deep.equal(requestData.photoUrls);
                expect(response.body.tags).to.deep.equal(requestData.tags);
            })
        })
    });

    it('Positive: Add pet (read data from fixture - example)', () => {
        cy.fixture('pet').then(pet => {
            createPet(pet).then(response => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('name', pet.name);
            })
        })
    });

    it('Positive: Only required fields (name and photoUrl)', () => {
        let requestData = getPetRequestData(DATA_OPTIONS.AVERAGE, true)
        createPet(requestData).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body.id).to.be.greaterThan(0)
            expect(response.body).to.have.property('name', requestData.name);
            expect(response.body.photoUrls).to.deep.equal(requestData.photoUrls);
        })
    })
    it('Negative: No values (empty body)', () => {
        let requestData = {}
        createPet(requestData).then(response => {
            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('id', requestData.id);
            expect(response.body.id).to.be.greaterThan(0)
        })
    })
    it('Negative: No body in request', () => {
        cy.request({method: 'POST', url: `${API_URL}/pet`, failOnStatusCode: false}).then(response => {
            console.log(response)
            expect(response.status).to.eq(415);
        })
    })
    it('Negative: Required fields are null', () => {
        createPet({name: null, photoUrls: null}, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.statusText).to.eq('Bad Request');
        })
    })
    it('Negative: Invalid pet status (numeric instead of valid string value)', () => {
        let requestData = getPetRequestData()
        requestData.status = 1
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.message).to.eq('Invalid pet status value');
        })
    })
    it('Negative: Invalid tag name (numeric instead of valid string value)', () => {
        let requestData = getPetRequestData()
        requestData.tags[0].name = 2
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.message).to.eq('Invalid tag name value');
        })
    })
    it('Negative: Invalid pet id (string valid instead of numeric value)', () => {
        let requestData = getPetRequestData()
        requestData.id = Chance().string()
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.message).to.eq('Invalid pet id status value');
        })
    })
    it('Negative: Invalid tag id (string valid instead of numeric value)', () => {
        let requestData = getPetRequestData()
        requestData.tags[0].id = Chance().string()
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400)
            expect(response.statusText).to.eq('Bad Request');
        })
    })
    it('Negative: Invalid category id (string valid instead of numeric value)', () => {
        let requestData = getPetRequestData()
        requestData.category.id = Chance().string()
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.statusText).to.eq('Bad Request');
        })
    })

    it('Validation check: name more than max', () => {
        let requestData = getPetRequestData()
        requestData.name = Chance().string({length: PET_LIMIT.name.max + 1})
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].fieldError).to.eq(`Length must be between ${PET_LIMIT.tags.name.min} and ${PET_LIMIT.tags.name.max}`)
            console.log(response);
        })
    })
    it('Validation check: name less than min', () => {
        let requestData = getPetRequestData()
        requestData.name = ""
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].fieldError).to.eq(`Length must be between ${PET_LIMIT.tags.name.min} and ${PET_LIMIT.tags.name.max}`)
            console.log(response);
        })
    })
    it('Validation check: photoUrl more than max', () => {
        let requestData = getPetRequestData()
        requestData.photoUrls = fillUrls(PET_LIMIT.photoUrls.length.max + 1)
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].fieldError).to.eq(`Length must be between ${PET_LIMIT.tags.name.min} and ${PET_LIMIT.tags.name.max}`)
            console.log(response);
        })
    })
    it('Validation check: photoUrl less than min', () => {
        let requestData = getPetRequestData()
        requestData.photoUrls = ""
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].fieldError).to.eq(`Length must be between ${PET_LIMIT.tags.name.min} and ${PET_LIMIT.tags.name.max}`)
            console.log(response);
        })
    })
    it('Validation check: incorrect status', () => {
        let requestData = getPetRequestData()
        requestData.status = "SOLD"
        createPet(requestData, false).then(response => {
            expect(response.status).to.eq(400);
            expect(response.messages[0].status).to.eq(`${PET_LIMIT.status}`);
            console.log(response);
        })
    })
});

