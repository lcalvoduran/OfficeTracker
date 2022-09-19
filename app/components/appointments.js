import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class appointmentsComponent extends Component {
    
    @tracked monthYear = cambiaAnyo();
    constructor() {
        super(...arguments);
        cambiaAnyo();
      }
}


function cambiaAnyo(){
    let today = new Date();
    let currentYear = today.getFullYear();
    return "2022";
}