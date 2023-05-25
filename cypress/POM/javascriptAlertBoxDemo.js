export class JavascriptAlertBox{

    constructor(){
        this.buttons = "[type='button']";
        this.stub1 = cy.stub();
        this.stub2 = cy.stub()
        this.message = '#prompt-demo';
    }

    performClick(buttonNbr){

        cy.on('window:alert', this.stub1);
        
        cy.get(this.buttons).eq(buttonNbr-1).click();
        
    }

    assertAlert(){
        expect(this.stub1.getCall(0).args[0]).to.contains('I am an alert box!');
    }

    enterPrompt(message){
        cy.window().then(win =>{
            cy.stub(win, 'prompt').returns(message);
            cy.get(this.buttons).eq(2).click();
        })
    }

    assertOutput(message){
        cy.get(this.message).should('contain.text', message);
    }


}