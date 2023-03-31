require('cypress-xpath')

describe('Mercadolibre Rest API test', () => {
  beforeEach(() => {
    // TODO
  })


  it('check_seller_nickname', () => {
    var user='TIENDAOFICIALHP-DM'
    var url = 'https://api.mercadolibre.com/sites/MLA/search?nickname='+user
    cy.request({
      method: 'GET',
      url: `${url}`,
    }).as('getRequest1')
    cy.get('@getRequest1').its('status').should('eq', 200)
    cy.get('@getRequest1').then((response) => {
      const jsonObj = JSON.parse(JSON.stringify(response.body))
      var nickNameFound=JSON.stringify(jsonObj.seller.nickname)
      nickNameFound=nickNameFound.replace(/\"/g, "") //remove quotes "
      cy.log(nickNameFound)
      expect(nickNameFound).to.eq(user)
    })
  })

  it('check_seller_permalink', () => {
    var user='TIENDAOFICIALHP-DM'
    var url = 'https://api.mercadolibre.com/sites/MLA/search?nickname='+user
    cy.request({
      method: 'GET',
      url: `${url}`,
    }).as('getRequest1')
    cy.get('@getRequest1').its('status').should('eq', 200)
    cy.get('@getRequest1').then((response) => {
      const jsonObj = JSON.parse(JSON.stringify(response.body))
      var permalinkFound=JSON.stringify(jsonObj.seller.permalink)
      permalinkFound=permalinkFound.replace(/\"/g, "") //remove quotes "
      cy.log(permalinkFound)
      expect(permalinkFound).to.contain('http://perfil.mercadolibre.com.ar/')
      expect(permalinkFound).to.contain(user)
    })
  })



})
