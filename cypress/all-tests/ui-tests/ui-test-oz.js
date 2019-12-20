import ozPage from "../../page-objects/ozPage"
import Chance from "chance";

describe('UI - test Practice', () => {

    it('Card: User is able to add single product', () => {
        ozPage.open();
        ozPage.putGoodsInBasket();
        cy.get('.top-panel__userbar__cart__item').click();
        cy.get('.goods-table-cell__line_title').should(($this) => {
            expect($this).to.contain(`Как пасти котов`)
        });
    });


    it('Card: User is able to change count of one product from single to multiple (more than 10)', () => {
        let count = chance.integer({min: 10, max: 99});
        ozPage.open();
        ozPage.putGoodsInBasket();
        cy.get('.top-panel__userbar__cart__item').click();
        cy.get('.goods-table-cell__line_title').should(($this) => {
            expect($this).to.contain(`Как пасти котов`)
        });
        ozPage.changeCountOfGoods(count);
        cy.get('.deal-form-main__sub').should(($this) => {
            expect($this).to.contain(`Итого ${count}`)
        });
    })



    it('Card: User is able to change count of one product from single to multiple (less than 10)', () => {
        let count = chance.integer({min: 1, max: 9});
        ozPage.open();
        ozPage.putGoodsInBasket();
        cy.get('.top-panel__userbar__cart__item').click();
        cy.get('.goods-table-cell__line_title').should(($this) => {
            expect($this).to.contain(`Как пасти котов`)
        });
        ozPage.changeCountOfGoods(count);
        cy.get('.deal-form-main__sub').should(($this) => {
            expect($this).to.contain(`Итого ${count}`)
        });
    }) ;


});