import {faker} from "@faker-js/faker"

export class inputForm {

    constructor() {
        this.name = '#name'
        this.mail = '#inputEmail4'
        this.password = '#inputPassword4'
        this.company = '#company'
        this.website = '#websitename'
        this.country = ':nth-child(3) > .pr-20 > .w-full'
        this.city = '#inputCity'
        this.address1 = '#inputAddress1'
        this.address2 = '#inputAddress2'
        this.state = '#inputState'
        this.zip = '#inputZip'

        this.button = '#seleniumform > div.text-right.mt-20 > button'

        this.confirmMsg = '.success-msg'
    }

    fillWithRandomData() {
        cy.get(this.name).type(faker.person.firstName());
        cy.get(this.mail).type(faker.internet.email());
        cy.get(this.password).type(faker.string.alphanumeric(10));
        cy.get(this.company).type(faker.person.lastName());
        cy.get(this.website).type('www.' + faker.string.alpha(8) + '.com');
        cy.get(this.country).select(faker.number.int({ min: 2, max: 10 }));
        cy.get(this.city).type(faker.location.city());
        cy.get(this.address1).type(faker.location.streetAddress());
        cy.get(this.address2).type(faker.location.secondaryAddress());
        cy.get(this.state).type(faker.location.state());
        cy.get(this.zip).type(faker.location.zipCode());
    }

    submit(){
    cy.get(this.button).click()
    }

    assertSubmit(){
        cy.get(this.confirmMsg).should('contain', 'Thanks for contacting us,fe we will get back to you shortly.');
    }
}