
export class checkbox{

    constructor(){
        this.singleCheckbox = '#isAgeSelected';
        this.successMsg = '#txtAge';
    }

    singleCheckboxChangeState(){
       // cy.get('.sp__breadcrumb').scrollIntoView();
        cy.get(this.singleCheckbox).click();
    }

    assertMsg(){
        cy.get(this.successMsg).should('have.text', 'Success - Check box is checked');
    }

    assertState(){
        cy.get(this.singleCheckbox).should('be.checked');
    }
}
