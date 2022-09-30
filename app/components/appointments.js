import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let months = [  'January',  'February',  'March',  'April',  'May',  'June',  'July',  'August',  'September',  'October',  'November',  'December'];
export default class appointmentsComponent extends Component {
  @tracked monthYear;
  @tracked currentWeek = 1;
  @tracked numberOfDay1;
  @tracked numberOfDay2;
  @tracked numberOfDay3;
  @tracked numberOfDay4;
  @tracked numberOfDay5;

  constructor() {
    super(...arguments);
    this.showMyCalendar(currentMonth, currentYear);
  }

  showMyCalendar(month, year) {
    this.monthYear = months[currentMonth] + ' ' + currentYear;
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let totalDaysMonth  = new Date (currentYear, currentMonth + 1, 0).getDate();
    //console.log(totalDaysMonth);
    //console.log(( new Date( currentYear, currentMonth ) ).getDate());
    var date = new Date(currentYear, currentMonth, 1);      
  }


  @action changeArray(day, boolean){
    
    let dateFormatted = day + " " + today.getDate() + " " + months[currentMonth];
    let newArray = 
            {
              date: dateFormatted,
              marked: boolean
            };
    //console.log("Datos: " + newArray[0].date);
    this.args.updateArray(newArray);
    
  }

  @action next() {
    this.currentWeek = this.currentWeek + 1;
    if (this.currentWeek >= 6) {
      this.currentWeek = 1;
    }
    if (this.currentWeek == 1) {
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
    if (this.currentWeek <= 0) {
      this.currentWeek = 5;
    }
    if (this.currentWeek == 5) {
      if (currentMonth === 0) {
        currentYear = currentYear - 1;
        currentMonth = 11;
      } else {
        currentYear;
        currentMonth = currentMonth - 1;
      }
      this.monthYear = this.monthYear =
        months[currentMonth] + ' ' + currentYear;
    }
  }
  
}
