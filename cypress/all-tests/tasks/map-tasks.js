import {printPlanet} from "../../utils/helper";
import Chance from 'chance';

describe('Map Practice', () => {
    it('Map tasks', () => {
        let planetMap = new Map();

        planetMap.set("Mercury", {radius: 2440, density: 5.43, distance: 0.395});
        planetMap.set("Venus", {radius: 6052, density: 5.24, distance: 0.723});
        planetMap.set("Mars", {radius: 3396, density: 3.93, distance: 1.53});
        planetMap.set("Jupiter", {radius: 71492, density: 1.33, distance: 5.21});
        planetMap.set("Saturn", {radius: 60268, density: 0.69, distance: 9.551});
        planetMap.set("Uranus", {radius: 25559, density: 1.27, distance: 19.213});
        planetMap.set("Neptune", {radius: 24764, density: 1.64, distance: 30.07});

        printPlanet(planetMap);

        cy.log(planetMap.get('Saturn'));

        cy.log(planetMap.size);

        let mySet = new Set(['Mercury', 'Not Mercury']);

        mySet.forEach(function (element) {
            cy.log(planetMap.has(element));
        });

        planetMap.delete("Uranus");
        printPlanet(planetMap);

        let planetMapSecond = new Map();
        planetMapSecond.set("Uranus", {radius: 25559, density: 1.27, distance: 19.213});


        let mergeMap = new Map([...planetMap, ...planetMapSecond]);
        //mergeMap.merge(planetMap, planetMapSecond); //method merge???
        printPlanet(mergeMap);


        let planet = {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395};
        for (let key in planet) {
            cy.log(key);
        }


        let age = chance.age();
        if (age < 15) {
            cy.log(age + "  child");

        } else {
            if (age < 31) {
                cy.log(age + "  teen");

            } else {
                if (age < 70) {
                    cy.log(age + "  adult");
                } else {
                    cy.log(age + "  senior");
                }

            }
        }

        switch (age) {
            case (age < 15) :
                cy.log("child");
                break;
            case (age < 31) :
                cy.log("teen");
                break;
            case (age < 70) :
                cy.log("adult");
                break;
            default:
                cy.log("senior")
        }


            cy.log((age < 15) ? 'child' :
                (age < 31) ? 'teen' :
                    (age < 70) ? 'adult' :
                        'senior')


    });
});