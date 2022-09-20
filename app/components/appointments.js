import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class appointmentsComponent extends Component {
    
    @tracked monthYear;

    constructor() {
        super(...arguments);
        this.showMyCalendarYear();
      }    


    showMyCalendarYear(){
        let today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]; 
        this.monthYear = months[currentMonth] + " " + currentYear;        
    }

    changeYear(){    
        let today = new Date();
        let currentMonth = today.getMonth();
        let currentYear = today.getFullYear();
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        console.log("CurrentMonth:" + months[currentMonth] + " currentYear" + currentYear);
        this.monthYear = months[currentMonth] + " " + currentYear;
        return this.monthYear;
    }

    next(){
        let today = new Date();
        let currentMonth = today.getMonth()
        
        console.log(this.monthYear);
    }

    back(){
        let today = new Date();
        let currentMonth = today.getMonth()-1;
        console.log("back");
    }


}
