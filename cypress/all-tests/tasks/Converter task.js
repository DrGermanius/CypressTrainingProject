import Сhance from 'chance'

describe('Converter Practice', () => {
    it('', () => {
        cy.fixture('converter').then(item => {
            let currency = item.rates[chance.integer({min: 0, max: item.rates.length})];
            cy.visit('https://www.xe.com/currencyconverter/');
            cy.get('button[class = "privacy-basic-button privacy-basic-button-submit"]').click();
            cy.get('#to').click().type(`${currency.shortName}{enter}{enter}`);
            cy.get('span[class="converterresult-toAmount"]').should(($this) => {
                expect($this).to.contain(`${currency.rate}`)
            })
        })
    })
});
