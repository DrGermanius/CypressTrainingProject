import ozPage from "../../page-objects/ozPage"
import Chance from "chance";

describe('UI - test Practice', () => {

    it('OZ.by test with count of goods more than 10', () => {
        ozPage.changeCountOfGoods(chance.integer({min: 10, max: 100}));
    })



    it('OZ.by test with count of goods less than 10', () => {
        ozPage.changeCountOfGoods(chance.integer({min: 1, max: 9}));
    }) ;


});