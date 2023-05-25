
export class BootstrapDatePicker {
    constructor() {
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        this.startDatePicker = '[placeholder="Start date"]';
        this.endDatePicker = '[placeholder="End date"]';
        this.todaysDate = new Date();
        this.todaysYear = this.todaysDate.getFullYear();
        this.todaysMonth = this.months[this.todaysDate.getMonth()];

        this.datePickerSwitch = '.datepicker-switch';
        this.dateYearSwitch = '.datepicker-months > .table-condensed > thead > :nth-child(2) > .datepicker-switch';
        this.endDateYearSwitch = '[placeholder="End date"] ~ thead > :nth-child(2) > .datepicker-switch';
        this.yearButton = '.year';
        this.monthButton = '.month';
        this.dayButton = '.day';

        this.prevYear = '.datepicker-years > .table-condensed > thead > :nth-child(2) > .prev';
        this.nextYear = '.datepicker-years > .table-condensed > thead > :nth-child(2) > .next';
    }

    openDatePicker(datePicker) {
        cy.log(datePicker);

        if (datePicker == "Start Date")
            this.selectedPicker = this.startDatePicker;
        else
            this.selectedPicker = this.endDatePicker;

        cy.get(this.selectedPicker).click();
    }

    findYearPage(date) {

        cy.get(this.yearButton).first().invoke('text').then((text) => {
            if (parseInt(text) > parseInt(date[2])) {
                cy.get(this.prevYear).click();
                this.findYearPage(date);
            } else if (parseInt(text) < parseInt(date[2]) - 11) {
                cy.get(this.nextYear).click();
                this.findYearPage(date);
            } else {
                cy.contains(this.yearButton, date[2]).click();
            }
        });
    }

    selectStartDate(dateString) {

        cy.get(this.selectedPicker).invoke('val').then((value) => {
        if (value) {
            cy.contains(this.datePickerSwitch, this.months[parseInt(this.date[1]) - 1] + " " + this.date[2]).click();
            cy.get(this.dateYearSwitch).click();
        }
        else {
            cy.contains(this.datePickerSwitch, this.todaysMonth + " " + this.todaysYear).click();
            cy.get(this.dateYearSwitch).click();
        }

        this.date = dateString.split('/');

        this.findYearPage(this.date);

        this.foundYear = false;
        cy.contains(this.monthButton, this.monthsShort[parseInt(this.date[1]) - 1]).click();
        cy.contains(this.dayButton, new RegExp("^" + this.date[0].replace(/^0+/, '') + "$")).click();
    })
    }

    selectEndDate(dateString) {
        cy.get(this.selectedPicker).invoke('val').then((value) => {

            if (value) {
                cy.contains(this.datePickerSwitch, this.months[parseInt(this.date[1]) - 1] + " " + this.date[2]).click();
                cy.get(this.dateYearSwitch).click();
            }
            else {
                cy.contains(this.datePickerSwitch, this.todaysMonth + " " + this.todaysYear).click();
                cy.get(this.dateYearSwitch).click();
            }

            this.date = dateString.split('/');

            this.findYearPage(this.date);

            cy.contains(this.monthButton, this.monthsShort[parseInt(this.date[1]) - 1]).click();
            cy.contains(this.dayButton, this.date[0].replace(/^0+/, '')).click();
        })
    }


    assertDate(datePickerIndex, dateString) {

        if (datePickerIndex == 0)
            this.selectedPicker = this.startDatePicker;
        else
            this.selectedPicker = this.endDatePicker;

        cy.get(this.selectedPicker).invoke('val').should('eql', dateString);

    }
}