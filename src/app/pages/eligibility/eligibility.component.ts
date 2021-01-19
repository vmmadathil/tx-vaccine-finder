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



    aEligibile = false;
    bEligibile = false;

    toggleHCWorkerYes() {
        this.hcWorker = true;
    }

    toggleHCWorkerNo() {
        this.hcWorker = false;
    }

    toggleLTRYes() {
        this.ltresident = true;
    }

    toggleLTRNo() {
        this.ltresident = false;
    }

    showASuccess() {
        if(this.hcWorker == true || this.ltresident == true) {
            this.aEligibile = true;
        }
    }

    showBSuccess() {}
}
