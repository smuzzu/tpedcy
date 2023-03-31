//require('cypress-xpath')

describe('Dept coding test', () => {

  it('test_api', () => {
    var url = 'https://api.spacexdata.com/v3/rockets'
    cy.request({
      method: 'GET',
      url: `${url}`,
    }).as('getRequest1')
    cy.get('@getRequest1').its('status').should('eq', 200)
    cy.get('@getRequest1').then((response) => {
      const jsonObj = JSON.parse(JSON.stringify(response.body))
      expect(jsonObj.length).to.eql(4)
      for (var index in jsonObj) {
        const date= Date.parse(jsonObj[index].first_flight)
        cy.wrap(date).should('be.greaterThan',Date.parse('2005-01-01'))
      }
    })
  })

  it('test_spacex', () => {
    cy.visit('https://csb-x6dpt1.netlify.app/')
    cy.wait(2000)
    cy.get('.search-input',{ timeout: 10000}).type('crs')

    cy.get('.pagination').find('div').should('have.length',3)

    cy.get('.pagination > :nth-child(3)').click()

    //this clicks a CRS-13 star
    //cy.xpath('//*[contains(text(),"CRS-13")]/../*[@xmlns="http://www.w3.org/2000/svg"]',{ timeout: 10000}).click()
    cy.contains("CRS-13",{ timeout: 10000}).parent().parent().find('svg',{ timeout: 10000}).click()

    //this reloads and goes to the page 2 again
    cy.reload()
    cy.get('.search-input',{ timeout: 10000}).type('crs')
    cy.get('.pagination > :nth-child(3)').click()

    //cy.xpath('//*[contains(text(),"CRS-13")]/../*[@xmlns="http://www.w3.org/2000/svg"]',{ timeout: 10000}).should('have.class','active')
    cy.contains("CRS-13",{ timeout: 10000}).parent().parent().find('svg',{ timeout: 10000}).should('have.class','active')
  })

})
