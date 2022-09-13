
describe('Google TestCase ',() => {
    it('test',()=> {

        cy.visit('https://www.google.com')
    })
    it('Seach Gmail',()=>{
        cy.get(':nth-child(1) > .gb_d').should('have.text','Gmail')
    })
    it('Search teb ',()=>{
        cy.get('.gLFyf').type('Hello, World')   
     })

     it('button click',()=>{
        cy.get(':nth-child(1) > .gb_d').click()
     })


})