require('cypress-xpath')

function play(str) {
  return str.split("").reverse().join("");
}

describe('Applying for QA automation Xpath version', () => {
  beforeEach(() => {
    // TODO
  })


  it('navigate_to_job_offer_xpath', () => {
    cy.visit('https://'+play('moc.ycnegatped'))
    cy.xpath('//button/span[contains(text(),"Accept All")]',{ timeout: 10000}).click({force:true})
    cy.scrollTo('bottom')
    cy.xpath('//a[contains(text(),"Careers")]',{ timeout: 10000}).first().click({force:true})
    cy.scrollTo('bottom')
    cy.xpath('//*[contains(text(),"Your digital future")]',{ timeout: 10000}).should('include.text','starts here')
    cy.xpath('//*[contains(text(),"explore open roles")]',{ timeout: 10000}).last().click()
    cy.xpath('//*[contains(text(),"Opportunity")]',{ timeout: 10000}).should('include.text','awaits you')
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.scrollTo('top')
    cy.wait(1000)
    cy.scrollTo('bottom')
    cy.wait(1000)
    cy.xpath('//button[@data-type="country"]',{ timeout: 10000}).click()
    cy.xpath('//input[@data-country="argentina"]',{ timeout: 10000}).last().click()
    cy.wait(1000)
    cy.xpath('//span[contains(text(),"all job types")]',{ timeout: 10000}).click()
    cy.xpath('//*[contains(text(),"Senior QA Automation")]',{ timeout: 10000}).click()
    cy.xpath("//strong",{ timeout: 10000}).first().should('include.text',play('TPED')+'® Argentina')
    cy.xpath('//*[contains(text(),"Apply")]/..').should('have.attr', 'href')


  })


  it('fill_in_the_form_xpath', () => {

    cy.visit('https://boards.greenhouse.io/'+play('tped')+'/jobs/4845123')

    cy.xpath("//strong").first().should('include.text',play('TPED')+'® Argentina')
    cy.xpath('//input[@id="first_name"]').type('Cosme')
    cy.xpath('//input[@id="last_name"]').type('Fulanito')
    cy.xpath('//input[@id="email"]').type('cosmefulanito@hotmail.com')
    cy.xpath('//input[@id="phone"]').type('5491140008000')
    cy.xpath('//input[@name="job_application[location]"]').type('buenos aires argentina')
    cy.wait(5000)
    cy.xpath('//input[@name="job_application[location]"]').type('{downArrow}')
    cy.xpath('//input[@name="job_application[location]"]').type('{enter}')
    cy.xpath('//button[contains(text(),"or enter manually")]').click()
    cy.xpath('//textarea[@id="resume_text"]').type('experienced IT professional')
    cy.xpath('//input[@id="job_application_answers_attributes_0_text_value"]').type('https://www.linkedin.com/in/cosme-fulanito-764421125')
    cy.xpath('//a[@class="select2-choice"]').first().click()
    cy.xpath('//div[contains(text(),"5 years or more")]').click()
    cy.xpath('//a[@class="select2-choice"]').eq(1).click()
    cy.xpath('//div[contains(text(),"Advanced or more")]').click()
    cy.xpath('//a[@class="select2-choice"]').last().click()
    cy.xpath('//div[contains(text(),"I hereby agree and accept")]').click()

    cy.xpath('//input[@id="first_name"]').should('have.value','Cosme')
    cy.xpath('//auto-complete[@id="job_application_location"]').should('have.value','Buenos Aires, Autonomous City of Buenos Aires, Argentina')
    cy.xpath('//textarea[@id="resume_text"]').should('have.value','experienced IT professional')
    cy.xpath('//span[@id="select2-chosen-3"]').should('have.text','I hereby agree and accept')


  })




})
