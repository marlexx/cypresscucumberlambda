/// <reference types="cypress" />
export class jqueryDropdownSearch{
    constructor(){
        this.dropdownWSearch = '.select2-selection.select2-selection--single[aria-labelledby="select2-country-container"]';
        this.dropdownWSearchValue = '#select2-country-container';
        this.dropdownSearchField = '.select2-search--dropdown > .select2-search__field';
        this.selection = '.select2-results__option';
    }

    openDropdownWSearch(){
        cy.get(this.dropdownWSearch).click();
    }

    search(query){
        cy.get(this.dropdownSearchField).type(query);
    }

    selectFromSearch(country){
    cy.contains(this.selection, country).click();
    }

    assertSelected(country){
        cy.get(this.dropdownWSearchValue).should('have.attr', 'title', country);
    }
}