export class SimpleForm{
    constructor(){
        this.singleInput = "div.left-input > [id='user-message']";
        this.singleButton = "#showInput";
        this.singleOutput = '#message';

        this.input1 = '#sum1';
        this.input2 = '#sum2';
        this.twoButton = '#sum2 + button';
        this.total = '#addmessage';
    }

    //SINGLE

    inputMessage(message){
        cy.get(this.singleInput).type(message);
    }

    getCheckedValue(){
        cy.get(this.singleButton).click();
    }

    assertValue(message){
        cy.get(this.singleOutput).should('contain', message);
    }

    assertNotValue(message){
        cy.get(this.singleOutput).should('not.contain', message);
    }

    // TWO

    inputValues(a,b){
        if(a!="")
        cy.get(this.input1).type(a);
        if(b!="")
        cy.get(this.input2).type(b);
    }

    getSum(){
        cy.get(this.twoButton).click();
    }

    assertTotal(total){
        cy.get(this.total).should('have.text', total);
    }
    
}