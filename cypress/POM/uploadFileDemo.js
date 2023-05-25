export class Uploadfile{

    constructor(){
        this.fileChooserInput = '#file';
        this.message = '#error';
    }

    selectFile(){

        cy.get(this.fileChooserInput).selectFile('cypress/uploadFiles/Dog.jpg');
    }

    assertFile(){
        cy.get(this.fileChooserInput).invoke('val').should('contain', 'Dog.jpg');
    }

    assertMessage(){
        cy.get(this.message).should('have.text', 'File Successfully Uploaded');
    }

    dragNDropFile(){
        cy.get(this.fileChooserInput).selectFile('cypress/uploadFiles/Dog.jpg', {
            asction: 'drag-drop'
        });
    }

}