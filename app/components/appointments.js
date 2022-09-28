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
  @tracked count = 0;
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
    console.log(totalDaysMonth);
    console.log(( new Date( currentYear, currentMonth ) ).getDate());
    var week;
    


    function days(current) {
      var week = new Array();
      // Starting Monday not Sunday 
      var first = ((current.getDate() - current.getDay()) + 1);
      for (var i = 0; i < 7; i++) {
        week.push(
          new Date(current.setDate(first++))
        );
      }
      return week;
    }
    
    var input = new Date(2022, 8, 1);
    console.log('input: %s', input);
    
    var result = days(input);
    console.log(result.map(d => d.toString()));
    
  }



  @action changeArray(day){
    console.log("Day selected: " + day);
    let dateFormatted = day + " " + today.getDate() + " " + months[currentMonth];
    let newArray = [dateFormatted];
    console.log(newArray);
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
