import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {

  @tracked arrayDays = [];

  @tracked selectedDay ="";

  @action updateArray(newArray) {
    this.arrayDays.push(newArray);  
    //this.selectedDay = this.arrayDays.at(-1)[0].date; //Nuevo hace poco en JS permite obtener el último elemento
    this.selectedDay = this.arrayDays.filter(estado=> estado.marked == true);   
  }

}