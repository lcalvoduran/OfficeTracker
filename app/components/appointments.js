import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
export default class appointmentsComponent extends Component {
  @tracked monthYear;
  @tracked currentWeek = 1 ;

  constructor() {
    super(...arguments);
    this.showMyCalendarYear(currentMonth, currentYear);
  }


  showMyCalendarYear(month, year) {
    this.monthYear = months[currentMonth] + ' ' + currentYear;
  }

  @action next() {
    this.currentWeek = this.currentWeek +1;
    if(this.currentWeek>=6){
      this.currentWeek=1;
    }    
    if(this.currentWeek==1){
      if (currentMonth === 11) {
          currentYear = currentYear + 1;
      } else {
          currentYear;
      }
        currentMonth = (currentMonth + 1) % 12;
        this.monthYear = months[currentMonth] + ' ' + currentYear; 
        
    }
  }

  @action back() {  
    this.currentWeek = this.currentWeek - 1;
    if(this.currentWeek <= 0){
      this.currentWeek = 5;
    }        
    if(this.currentWeek==5){
    
      if (currentMonth === 0) {
        currentYear = currentYear - 1;
        currentMonth = 11;
      } else {
        currentYear;
        currentMonth = currentMonth - 1;
      }
      this.monthYear = this.monthYear = months[currentMonth] + ' ' + currentYear;
    }
  }

  @action thisDayIs(){
    let weekOfMonth = this.currentWeek;     // Semana seleccionada
    let monthOfYear = currentMonth;         // Mes seleccionado
    let year = currentYear;                 // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let dateSelected = new Date(year, monthOfYear, 1);
    console.log(getNextMonday(new Date()));
    /*
    const today = new Date();
    const first = today.getDate() - today.getDay() + 1;
    const monday = new Date(today.setDate(first));
    console.log(monday); 
    */

  }
}

function getNextMonday(date = new Date()){
  const dateCopy = new Date(date.getTime());

  const nextMonday = new Date(
    dateCopy.setDate(
      dateCopy.getDate() + ((7 - dateCopy.getDay() + 1) % 7 || 7),
    ),
  );
  return nextMonday;

}
