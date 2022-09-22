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

  constructor() {
    super(...arguments);
    this.showMyCalendarYear(currentMonth, currentYear);
  }

  showMyCalendarYear(month, year) {
    console.log(
      'currentMonth: ' + currentMonth + ' currentYear: ' + currentYear
    );
    this.monthYear = months[currentMonth] + ' ' + currentYear;
  }

  next() {
    if (currentMonth === 12) {
      currentYear = currentYear + 1;
    } else {
      currentYear;
    }
    currentMonth = (currentMonth + 1) % 13;
    console.log(
      'currentMonth: ' + currentMonth + ' currentYear: ' + currentYear
    );
  }

  back() {
    if (currentMonth === 0) {
      currentYear = currentYear - 1;
      currentMonth = 11;
    } else {
      currentYear;
      currentMonth = currentMonth - 1;
    }
    console.log(
      'currentMonth: ' + currentMonth + ' currentYear: ' + currentYear
    );
  }
}
