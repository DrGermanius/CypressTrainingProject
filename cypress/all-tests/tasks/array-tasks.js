import {printPlanet} from "../../utils/helper";


describe('Array Practice', () => {
    it('Planets Task', () => {
        cy.log("ARRAY TASKS");
        let planets = [
            {planet: "Mercury", radius: 2440, density: 5.43, distance: 0.395},
            {planet: "Venus", radius: 6052, density: 5.24, distance: 0.723},
            {planet: "Earth", radius: 6378, density: 5.52, distance: 1},
            {planet: "Mars", radius: 3396, density: 3.93, distance: 1.53},
            {planet: "Jupiter", radius: 71492, density: 1.33, distance: 5.21},
            {planet: "Saturn", radius: 60268, density: 0.69, distance: 9.551},
            {planet: "Uranus", radius: 25559, density: 1.27, distance: 19.213},
            {planet: "Neptune", radius: 24764, density: 1.64, distance: 30.07}
        ];


        printPlanet(planets);

        cy.log("Add property 'solarSystem' ");
        planets.map(item => item.solarSystem = true);
        printPlanet(planets);

        cy.log("Add 'SomeNewPlanet'");
        planets.push({planet: "SomeNewPlanet", radius: 24764, density: 1.64, distance: 30.07, solarSystem: false});
        printPlanet(planets);


        cy.log("Sum of radii = " + planets.reduce((acc, item) => item.radius + acc, 0));


        cy.log(planets.filter(item => item.distance > 5));

        cy.log("Delete 'SomeNewPlanet'");
        planets.splice(planets.indexOf("SomeNewPlanet"));
        printPlanet(planets);

        cy.log("Sorting by radius");
        planets.sort((a, b) => a.radius - b.radius);
        printPlanet(planets);

        cy.log("Sorting by name");
        planets.sort((a, b) => {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
            return 0;
        });
        printPlanet(planets);


        cy.log("Array length = " + planets.length);


    })
});
