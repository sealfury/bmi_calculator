
describe('User can check their BMI', () => {
    it('user can enter weight and height', () => {
        cy.visit('http://localhost:3001')
        cy.contains('BMI Calculator')
        cy.get('#weightkg').type('90')
        cy.get('#heightcm').type('186')
        cy.get('#Calculate').click()
    })
    
    it('displays a BMI value of 26.01', () => {
        cy.get('#resultsMetric').should('contain', '26.01')
    })
})

