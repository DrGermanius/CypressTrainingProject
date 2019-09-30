// describe('Test VK.com', () => {
//     it('Send Message', () => {
//
//         cy.visit('https://vk.com/')
//         cy.get('input[id="index_email"]').type(`${Cypress.env('login')}`)
//         cy.get('input[id="index_pass"]').type(`${Cypress.env('pass')}{enter}`)
//
//         cy.get('li[id=l_fr]').click()
//         cy.get('li[id="friends_tab_all"]').should('exist')
//         cy.get('input[class="ui_search_field _field"]').type('Ilya Alexeev')
//         cy.get('a[href="write151733213"]').click()
//         cy.get('div[id="mail_box_editable"').type('Скинь лабу')
//         cy.get('button[id="mail_box_send"]').click()
//
//         cy.xpath('//html/body/div[11]/div/div/div[1]/div[2]/div/div/div[1]/div[4]').click()
//         cy.wait(500)
//         cy.xpath('//*[@id="top_logout_link"]').click()
//     })
// })
