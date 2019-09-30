import Chance from 'chance'
import SearchResultsPage from "../../page-objects/searchResultPage"
import AccessoriesPage from "../../page-objects/accessoriesPage"

/*
describe('Test fors reqres', () => {

    it('Positive: Create user', () => {
    cy.visit("https://store.google.com/us/collection/accessories_wall?hl=en-US")
        cy.get('.header-search-icon').click()
        cy.get('input[aria-label="Search Google Store"]').type(`Google Pixel Buds{enter}`)
        cy.get(`a[href="/product.json/google_pixel_buds"]`).should('exist')
    })


})
*/
describe('UI tests', () => {
    beforeEach(() => {
        cy.fixture('product').then(data=>
        {
            cy.wrap(data).as('productData')
        })
    })
    it('Positive: Create user', () => {
        cy.get('@productData').then((productData)=>
        {

            cy.log("GIVEN USER IS AT Access PAGE")
            AccessoriesPage.open()
            cy.log("WHEN USER PERFORMS SEARCH PRODUCT BY NAME")
            AccessoriesPage.performSearch(productData.name)
            SearchResultsPage.getProductByDocId(productData.url).should('exist')
        })
    })
})