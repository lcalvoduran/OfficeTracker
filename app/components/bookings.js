import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {

  @tracked arrayDays = [];

  @tracked selectedDay ="";

  @action updateArray(newArray, dateFormatted, isMarked) {

    var foundPair = this.arrayDays.find(diaNombre => diaNombre.date == dateFormatted);
    if(foundPair){
      foundPair.marked = isMarked;
    }else{
      this.arrayDays.push(newArray);
    }
    this.selectedDay = this.arrayDays.filter(estado=> estado.marked == true);  

  }

}