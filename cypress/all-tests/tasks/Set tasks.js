let mySet = new Set(['USD', 'BYN', 'RUB']); // task 1
mySet.add('USD'); // task 3
mySet.add('BYR'); //PLN
mySet.forEach(function (element) { // task 2
    cy.log(element)
})
cy.log("Set has USD value: " + mySet.has('USD'))
mySet.delete('USD')
cy.log("Delete USD")
cy.log("Set has USD value: " + mySet.has('USD'))


let myArray = Array.from(mySet) // task 4
cy.log(chance.pickone(myArray))
cy.log(chance.pickset(myArray, chance.integer({min: 1, max: myArray.length})))


let setA = new Set([1, 2, 3, 4]) //task 5
let setB = new Set([2, 3])
let setC = new Set([3, 4, 5, 6])
cy.log(isSuperSet(setA, setB))

let setResult = union(setA, setC)
cy.log("UNION")
setResult.forEach(function (element) {
    cy.log(element)
})

setResult = intersection(setA, setC)
cy.log("INTERSECTION")
setResult.forEach(function (element) {
    cy.log(element)
})

setResult = difference(setA, setC)
cy.log("DIFFERENCE")
setResult.forEach(function (element) {
    cy.log(element)
})

