import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {

  @tracked arrayDays = [];

  @tracked selectedDay ="";

  @action updateArray(daysMarkeds, dateFormatted, month, marked) {
    
    const createHash = oneObject => {
      const keys = Object.keys(oneObject).sort().join("")
      const values = Object.values(oneObject).sort().join("")
      return `${keys}${values}`
    }
    
    const remueveObjetosDuplicados = someArray => {
      const history = {}
      const newDeduplicatedArray = []
    
      for (let i = 0; i < someArray.length; i += 1) {
        const hash = createHash(someArray[i])
    
        if (!history?.[hash]) {
          newDeduplicatedArray.push(someArray[i])
          history[hash] = true
        }
      }
    
      return newDeduplicatedArray;
    }
    
    remueveObjetosDuplicados(daysMarkeds);

    this.selectedDay = remueveObjetosDuplicados(daysMarkeds);
/*   console.log(daysMarkeds);
  daysMarkeds.filter(elemento =>{
    const isDuplicate = this.arrayDays.includes(elemento.dayOfWeek);
    console.log(isDuplicate);
  });

  this.selectedDay = this.arrayDays.filter(estado => estado.marked == true); */
  }
}