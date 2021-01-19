import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'eligibility-cmp',
    moduleId: module.id,
    templateUrl: 'eligibility.component.html'
})

export class EligibilityComponent implements OnInit{
    ngOnInit(){
    }


    //variables for questions
    hcWorker = false;
    ltresident = false;
    sixFive = false;
    chronic = false;

    //variables for the divs
    residentDiv = true;
    sixfiveDiv = true;
    chronicDiv = true;
    aEligibileDiv = true;
    bEligibileDiv = true;
    ineligibileDiv = true;

    toggleHCWorkerYes() {
        this.hcWorker = true;
        this.showASuccess();
        this.showFail()
    }

    toggleHCWorkerNo() {
        this.hcWorker = false;
        this.showASuccess();
        this.residentDiv = false;
    }

    toggleLTRYes() {
        this.ltresident = true;
        this.showASuccess();
        this.showFail()
    }

    toggleLTRNo() {
        this.ltresident = false;
        this.showASuccess();
        this.sixfiveDiv = false;
    }

    toggleSixFiveYes() {
        this.sixFive = true;
        this.showBSuccess();
        this.showFail()
    }

    toggleSixFiveNo() {
        this.sixFive = false;
        this.showBSuccess();
        this.chronicDiv = false;
    }

    toggleChronicYes() {
        this.chronic = true;
        this.showBSuccess();
        this.showFail()
    }

    toggleChronicNo() {
        this.chronic = false;
        this.showBSuccess();
        this.showFail();
    }

    showASuccess() {
        if(this.hcWorker == true || this.ltresident == true) {
            this.aEligibileDiv = false;
        }
        else{
            this.aEligibileDiv = true;
        }
    }

    showBSuccess() {
        if(this.sixFive == true || this.chronic == true){
            this.bEligibileDiv = false;
        }
        else{
            this.bEligibileDiv = true;
        }
    }

    showFail(){
        if(this.hcWorker == false && this.ltresident == false && this.sixFive == false && this.chronic == false){
            this.ineligibileDiv = false;
        }
        else{
            this.ineligibileDiv = true;
        }
    }
}
