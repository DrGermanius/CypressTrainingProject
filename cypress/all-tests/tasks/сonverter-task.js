import Сhance from 'chance'

describe('Converter Practice', () => {
    it('Check value', () => {
        cy.fixture('converter').then(item => {
            let currency = Chance().pickone(item.rates);
            cy.visit('https://www.xe.com/currencyconverter/');
            cy.get('#to').click().type(`${currency.shortName}{enter}{enter}`);
            cy.get('span[class="converterresult-toAmount"]').should(($this) => {
                expect($this).to.contain(`${currency.rate}`)
            })
        })
    })
});
