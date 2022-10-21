import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class selecteddaysComponent extends Component {
    @tracked selectedDay;
    constructor(){
        super(...arguments);
        console.log(this.args.selectedDay);
    }

    @action saveDates(){
        localStorage.setItem("myDates", JSON.stringify(this.args.selectedDay)); 
        window.alert("The changes will be stored in the local Database"); 
        window.location.reload();
    }    
    @action clearDates(number, month){
        console.log(this.args.selectedDay + " " + number + " " + month);
        let selectedDay = this.args.selectedDay.filter(element => element.number == number && element.month == month);
        let findArray = this.args.selectedDay.findIndex(element => element.number == number && element.month == month);
        this.args.selectedDay.pop(findArray);
        let selectedFinal = this.args.selectedDay;
        console.log(this.args.selectedDay);
    }        
}

