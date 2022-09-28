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
  @tracked currentWeek = 1;
  @tracked numberDay;
  @tracked selected = ' 🖱️ Click on a day 🖱️ ';
  
  @tracked count = 0;

  constructor() {
    super(...arguments);
    this.showMyCalendarYear(currentMonth, currentYear);
  }

  showMyCalendarYear(month, year) {
    this.monthYear = months[currentMonth] + ' ' + currentYear;
  }

  get total(){
    return this.count * this.args.multiple;
  }

  @action double(){
    this.args.updateMultiple(this.args.multiple * 2);
  }

  @action change(amount){
    this.count = this.count + amount;
  }

  @action getSelected(){
    console.log(this.selected);
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
