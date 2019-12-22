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

                for (let i = 0; i < (count || data.productName.length); i++) {
                    ozPage.putProductInBasket(data.productName[i]);
                    cy.get('.top-panel__userbar__cart__item').click();
                    cy.get('.goods-table-cell__line_title').should(($this) => {
                        expect($this).to.contain(data.productName[i])
                    });
                }
            });
        });

        it(`Card: User is able to change count of ${description} product from single to multiple (more than 10)`, () => {
            let countOfGoods = chance.integer({min: 10, max: 99});
            cy.fixture('ozby').then(data => {
                cy.log(countOfGoods);
                ozPage.open();

                for (let i = 0; i < (count || data.productName.length); i++) {
                ozPage.putProductInBasket(data.productName[i]);
                cy.get('.top-panel__userbar__cart__item').click();
                cy.get('.goods-table-cell__line_title').should(($this) => {
                    expect($this).to.contain(`Как пасти котов`)
                });
                ozPage.changeCountOfGoods(countOfGoods);
                cy.get('.deal-form-main__sub').should(($this) => {
                    expect($this).to.contain(`Итого ${countOfGoods}`)
                });
                }
            });
        });


        it(`Card: User is able to change count of ${description} product from single to multiple (less than 10)`, () => {
            let countOfGoods = chance.integer({min: 2, max: 9});
            cy.fixture('ozby').then(data => {
                ozPage.open();

                for (let i = 0; i < (count || data.productName.length); i++) {
                    ozPage.putProductInBasket(data.productName[i]);
                    cy.get('.top-panel__userbar__cart__item').click();
                    cy.get('.goods-table-cell__line_title').should(($this) => {
                        expect($this).to.contain(`Как пасти котов`)
                    });
                    ozPage.changeCountOfGoods(countOfGoods);
                    cy.get('.deal-form-main__sub').should(($this) => {
                        expect($this).to.contain(`Итого ${countOfGoods}`)
                    });
                }
            });
        });


    });

});