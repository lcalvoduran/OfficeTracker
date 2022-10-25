import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';


export default class selecteddaysComponent extends Component {
    @tracked selectedDay;
    constructor(){
        super(...arguments);
    }

    @action saveDates(){
        localStorage.setItem("myDates", JSON.stringify(this.args.selectedDay)); 
        window.alert("The changes will be stored in the local Database"); 
        window.location.reload();
    }    
    @action clearDates(number, month){
        let findArray = this.selectedDay.findIndex(element => element.number == number && element.month == month);
        this.selectedDay = this.selectedDay.splice(findArray, 1);
    }

    get totalSelected(){
        this.selectedDay = this.args.selectedDay;
        return this.selectedDay;
    }
}

