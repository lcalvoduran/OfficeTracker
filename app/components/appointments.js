import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class appointmentsComponent extends Component {

    constructor() {
        super(...arguments);
        diaSemana();
      }


}

function diaSemana(){
    let today = new Date();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    console.log("Hoy es " + currentYear);        
}