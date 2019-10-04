import Chance from 'chance'

class RandomForTests {
    fillUrls(count) {
        let arr = [];
        for (let i = 0; i < count; i++) {
            arr[i] = {
                id: Chance().integer({min: 0, max: 100}),
                wrapped: chance.pickone(['true', 'false'])
            };
        }
        return arr;
    }

    fillTags(count) {
        let arr = [];
        for (let i = 0; i < count; i++) {
            arr[i] = {
                id: Chance().integer({min: 0, max: 100}),
                name: Chance().string({length: 100})
            };
        }
        return arr;
    }
}
export default new RandomForTests()