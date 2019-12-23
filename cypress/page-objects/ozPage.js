class OzPage {

    open() {
        cy.fixture('ozby').then(data => {
            cy.wrap(data).as('ozbyData')
        });
        cy.get('@ozbyData').then((ozbyData) =>
            cy.visit(ozbyData.url)
        );
    }

    putProductInBasket(product) {
        //cy.on('uncaught:exception', (err, runnable) => {
            cy.log('product' + product)
            cy.get("#top-s").click().type(product)
          //  done()
          //  return false
        //})
        cy.get('.top-panel__search__btn').click();
        cy.get('.addtocart-btn').should('exist').click();
    }


    clearBasket() //didnt work
    {
        cy.get('.top-panel__userbar__cart__item').click();
        cy.get('.checkAll').click();
        cy.get('.i-button_small').contains('Удалить').click(2);
        cy.get('i-button_small').contains('Да, удалить').click(); //cant get
    }


    changeCountOfGoods(count) {

        cy.get('.i-amount-select').click();

        if (count < 10) {
            cy.get('.i-amount-select__value').contains(count).click();
        }
        else {
            cy.get('.i-amount-select__value').contains('10+').click();
            cy.get('.i-input_value').type(count);

        }
        //   this.clearBasket();
    }

    openBasket()
    {
        cy.get('.top-panel__userbar__cart__item').click();
    }

    get basketItems()
    {
        return cy.get('.goods-table-cell__line_title');
    }

    get countOfItems()
    {
        return cy.get('.deal-form-main__sub');
    }


}

export default new OzPage();