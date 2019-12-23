import ozPage from "../../page-objects/ozPage"
import Chance from "chance";

describe('UI - test Practice', () => {

    beforeEach(() => {
        cy.fixture('ozby').then(data => {
            cy.wrap(data).as('ozbyData')
        })
    });

    const DATA_SET = [
        {description: 'Single product', count: 1},
        {description: 'Several'}
    ];


    DATA_SET.forEach(({description, count}) => {

        it(`Card: User is able to add ${description} product `, function () {
            cy.fixture('ozby').then(data => {
                ozPage.open();
                data = (count === 1) ? [data.productName[0]] : data;
                data.forEach(item => {
                    ozPage.putProductInBasket(item);
                    ozPage.openBasket();
                    ozPage.basketItems.should(($this) => {
                        expect($this).to.contain(item)
                    });
                })
            });
        });

        it(`Card: User is able to change count of ${description} product from single to multiple (more than 10)`, () => {
            let countOfGoods = chance.integer({min: 10, max: 99});
            cy.fixture('ozby').then(data => {
                cy.log(countOfGoods);
                ozPage.open();


                cy.fixture('ozby').then(data => {
                    data = (count === 1) ? [data.productName[0]] : data;
                    data.forEach(item => {
                        ozPage.putProductInBasket(item);
                        ozPage.openBasket();
                        ozPage.basketItems.should(($this) => {
                            expect($this).to.contain(item)
                        });
                        ozPage.changeCountOfGoods(countOfGoods);
                        ozPage.countOfItems.should(($this) => {
                            expect($this).to.contain(`Итого ${countOfGoods}`)
                        });
                    })
                })
            });
        });


        it(`Card: User is able to change count of ${description} product from single to multiple (less than 10)`, () => {
            let countOfGoods = chance.integer({min: 2, max: 9});
            cy.fixture('ozby').then(data => {
                ozPage.open();

                data = (count === 1) ? [data.productName[0]] : data;
                data.forEach(item => {
                    ozPage.putProductInBasket(item);
                    ozPage.openBasket();
                    ozPage.basketItems.should(($this) => {
                        expect($this).to.contain(item)
                    });
                    ozPage.changeCountOfGoods(countOfGoods);
                    ozPage.countOfItems.should(($this) => {
                        expect($this).to.contain(`Итого ${countOfGoods}`)
                    });
                })
            });
        });


    });

});