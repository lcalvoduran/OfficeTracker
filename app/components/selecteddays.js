import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class selecteddaysComponent extends Component {
    constructor(){
        super(...arguments);
    }

    @action saveDates(){
        localStorage.setItem("myDates", JSON.stringify(this.args.selectedDay));  
    }    
}

