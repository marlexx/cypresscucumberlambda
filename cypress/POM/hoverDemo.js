export class Hover{
    constructor(){
        this.buttons = '.p-15 > .ml-15.flex > div';
    }

    hoverButton(buttonNbr){

    }

    assertColorOfButton(buttonNbr){
        // cy.get(this.buttons).eq(buttonNbr-1).invoke('css', 'background-color').then((color)=>{
        //     cy.log(color);
        // })
    }
}