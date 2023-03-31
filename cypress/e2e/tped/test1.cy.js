
function play(str) {
  return str.split("").reverse().join("");
}

describe('Applying for QA automation', () => {
  beforeEach(() => {
    // TODO
  })

  it('navigate_to_job_offer', () => {
    cy.visit('https://'+play('moc.ycnegatped'))
    cy.contains('Accept All',{ timeout: 10000}).click({force:true})
    cy.scrollTo('bottom')
    cy.contains('Careers',{ timeout: 10000}).first().click({force:true})
    cy.contains('Your digital future',{ timeout: 10000}).should('include.text','starts here')
    cy.scrollTo('bottom')
    cy.contains('explore open roles',{ timeout: 10000}).last().click()
    cy.contains('Opportunity',{ timeout: 10000}).should('include.text','awaits you')
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.scrollTo('top')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.get('[data-type="country"]',{ timeout: 10000}).click()
    cy.get('[data-country="argentina"]',{ timeout: 10000}).last().click()
    cy.wait(1000)
    cy.contains('all job types',{ timeout: 10000}).click()
    cy.scrollTo('bottom')
    cy.contains('Senior QA Automation',{ timeout: 10000}).click()
    cy.scrollTo('bottom')
    cy.get('p>strong',{ timeout: 10000}).first().should('include.text',play('TPED')+'® Argentina')
    cy.contains('Apply',{ timeout: 10000}).should('have.attr', 'href')
  })


  it('fill_in_the_form', () => {

    cy.visit('https://boards.greenhouse.io/'+play('tped')+'/jobs/4845123')
    cy.get('p>strong').first().should('include.text',play('TPED')+'® Argentina')
    cy.get('#first_name').type('Cosme')
    cy.get('#last_name').type('Fulanito')
    cy.get('#email').type('cosmefulanito@hotmail.com')
    cy.get('#phone').type('5491140008000')
    cy.get('[name="job_application[location]"]').type('buenos aires argentina')
    cy.wait(5000)
    cy.get('[name="job_application[location]"]').type('{downArrow}')
    cy.get('[name="job_application[location]"]').type('{enter}')
    cy.contains("or enter manually").click()
    cy.get('#resume_text').type('experienced IT professional')
    cy.get('#job_application_answers_attributes_0_text_value').type('https://www.linkedin.com/in/cosme-fulanito-764421125')
    cy.get('.select2-choice').first().click()
    cy.get('#select2-result-label-7').click()
    cy.get('.select2-choice').eq(1).click()
    cy.get('#select2-result-label-12').click()
    cy.get('.select2-choice').last().click()
    cy.get('#select2-result-label-14').click()
    cy.get('#first_name').should('have.value','Cosme')
    cy.get('#job_application_location').should('have.value','Buenos Aires, Autonomous City of Buenos Aires, Argentina')
    cy.get('#resume_text').should('have.value','experienced IT professional')
    cy.get('#select2-chosen-3').should('have.text','I hereby agree and accept')

  })

})
