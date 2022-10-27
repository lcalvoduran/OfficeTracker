import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {
  @service login;
  @tracked arrayDays = [];

  @tracked selectedDay ="";

  @action updateArray(daysMarkeds, dateFormatted, month, marked) {

    this.arrayDays.push(daysMarkeds);
    this.arrayDays = this.arrayDays.flat(1);
    this.selectedDay = this.arrayDays.filter(estado => estado.marked == true);
    
    const createHash = oneObject => {
      const keys = Object.keys(oneObject).sort().join("")
      const values = Object.values(oneObject).sort().join("")
      return `${keys}${values}`
    }    
    const remueveObjetosDuplicados = someArray => {
      const history = {};
      const newDeduplicatedArray = [];    
      for (let i = 0; i < someArray.length; i += 1) {
        const hash = createHash(someArray[i])    
        if (!history?.[hash]) {
          newDeduplicatedArray.push(someArray[i])
          history[hash] = true
        }
      }
      return newDeduplicatedArray;
    }
    this.selectedDay = remueveObjetosDuplicados(this.selectedDay);
    this.selectedDay 
  }


  refreshingWithMarkeds(){
    let variable = this.login.retrieveSessionStorage();
    let daysLocal = JSON.parse(localStorage.getItem(variable));
    if (daysLocal.length == 0) {
      console.log("no");
    }
/*     this.selectedDay.push(daysLocal); */
    console.log(this.selectedDay);
/*     daysLocal.reduce((a, v) => ({ ...a, [v]: v}), {});
    let daysBonito = daysLocal.pop(); */
    return daysLocal;
  }
}