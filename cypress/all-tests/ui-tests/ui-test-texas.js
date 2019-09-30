describe('Test Texas', () => {
    it('Send Message', () => {

        cy.visit('http://www.texaschickensurvey-ru.com')

        for ( var i=0; i<50; i++) {
            if (cy.get('input[id="NextButton"]')) {
                cy.get('input[id="NextButton"]').click()
            }
            else return
        }

        // while(cy.get('.FinishHeader').should('not.be.visible'))
        // {
        //     cy.get('input[id="NextButton"]').click()
        // }

        // cy.get('*').should('exist')
        // let isElementPresent = true
        // while (isElementPresent) {
        //     cy.get('input[id="NextButton"]').click()
        //     cy.get("body").then(($body) => {
        //         if (!$body.find('.FinishHeader').length) {
        //             isElementPresent = false
        //             cy.wait(1000)
        //         }
        //     })
        // }

    })
})
