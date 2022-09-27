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

  constructor() {
    super(...arguments);
    this.showMyCalendarYear(currentMonth, currentYear);
  }

  showMyCalendarYear(month, year) {
    this.monthYear = months[currentMonth] + ' ' + currentYear;
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

  @action getMonday() {
    let weekOfMonth = this.currentWeek; // Semana seleccionada
    let monthOfYear = currentMonth; // Mes seleccionado
    let year = currentYear; // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 1;
    if (weekOfMonth == 1) {
      let monday = new Date(today.setDate(first));
      let dateformatted =
        'Mon ' + monday.getDate() + ' ' + months[monday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 2) {
      let monday = new Date(today.setDate(first + 7));
      let dateformatted =
        'Mon ' + monday.getDate() + ' ' + months[monday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 3) {
      let monday = new Date(today.setDate(first + 14));
      let dateformatted =
        'Mon ' + monday.getDate() + ' ' + months[monday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 4) {
      let monday = new Date(today.setDate(first + 21));
      let dateformatted =
        'Mon ' + monday.getDate() + ' ' + months[monday.getMonth()];
      this.selected = dateformatted;
    } else {
      let monday = new Date(today.setDate(first + 28));
      let dateformatted =
        'Mon ' + monday.getDate() + ' ' + months[monday.getMonth()];
      this.selected = dateformatted;
    }
  }
  @action getTuesday() {
    let weekOfMonth = this.currentWeek; // Semana seleccionada
    let monthOfYear = currentMonth; // Mes seleccionado
    let year = currentYear; // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 2;
    if (weekOfMonth == 1) {
      let tuesday = new Date(today.setDate(first));
      let dateformatted =
        'Tue ' + tuesday.getDate() + ' ' + months[tuesday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 2) {
      let tuesday = new Date(today.setDate(first + 7));
      let dateformatted =
        'Tue ' + tuesday.getDate() + ' ' + months[tuesday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 3) {
      let tuesday = new Date(today.setDate(first + 14));
      let dateformatted =
        'Tue ' + tuesday.getDate() + ' ' + months[tuesday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 4) {
      let tuesday = new Date(today.setDate(first + 21));
      let dateformatted =
        'Tue ' + tuesday.getDate() + ' ' + months[tuesday.getMonth()];
      this.selected = dateformatted;
    } else {
      let tuesday = new Date(today.setDate(first + 28));
      let dateformatted =
        'Tue ' + tuesday.getDate() + ' ' + months[tuesday.getMonth()];
      this.selected = dateformatted;
    }
  }
  @action getWednesday() {
    let weekOfMonth = this.currentWeek; // Semana seleccionada
    let monthOfYear = currentMonth; // Mes seleccionado
    let year = currentYear; // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 3;
    if (weekOfMonth == 1) {
      let wednesday = new Date(today.setDate(first));
      let dateformatted =
        'Wed ' + wednesday.getDate() + ' ' + months[wednesday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 2) {
      let wednesday = new Date(today.setDate(first + 7));
      let dateformatted =
        'Wed ' + wednesday.getDate() + ' ' + months[wednesday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 3) {
      let wednesday = new Date(today.setDate(first + 14));
      let dateformatted =
        'Wed ' + wednesday.getDate() + ' ' + months[wednesday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 4) {
      let wednesday = new Date(today.setDate(first + 21));
      let dateformatted =
        'Wed ' + wednesday.getDate() + ' ' + months[wednesday.getMonth()];
      this.selected = dateformatted;
    } else {
      let wednesday = new Date(today.setDate(first + 28));
      let dateformatted =
        'Wed ' + wednesday.getDate() + ' ' + months[wednesday.getMonth()];
      this.selected = dateformatted;
    }
  }

  @action getThursday() {
    let weekOfMonth = this.currentWeek; // Semana seleccionada
    let monthOfYear = currentMonth; // Mes seleccionado
    let year = currentYear; // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 4;
    if (weekOfMonth == 1) {
      let thursday = new Date(today.setDate(first));
      let dateformatted =
        'Thu ' + thursday.getDate() + ' ' + months[thursday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 2) {
      let thursday = new Date(today.setDate(first + 7));
      let dateformatted =
        'Thu ' + thursday.getDate() + ' ' + months[thursday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 3) {
      let thursday = new Date(today.setDate(first + 14));
      let dateformatted =
        'Thu ' + thursday.getDate() + ' ' + months[thursday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 4) {
      let thursday = new Date(today.setDate(first + 21));
      let dateformatted =
        'Thu ' + thursday.getDate() + ' ' + months[thursday.getMonth()];
      this.selected = dateformatted;
    } else {
      let thursday = new Date(today.setDate(first + 28));
      let dateformatted =
        'Thu ' + thursday.getDate() + ' ' + months[thursday.getMonth()];
      this.selected = dateformatted;
    }
  }

  @action getFriday() {
    let weekOfMonth = this.currentWeek; // Semana seleccionada
    let monthOfYear = currentMonth; // Mes seleccionado
    let year = currentYear; // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 5;
    if (weekOfMonth == 1) {
      let friday = new Date(today.setDate(first));
      let dateformatted =
        'Fri ' + friday.getDate() + ' ' + months[friday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 2) {
      let friday = new Date(today.setDate(first + 7));
      let dateformatted =
        'Fri ' + friday.getDate() + ' ' + months[friday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 3) {
      let friday = new Date(today.setDate(first + 14));
      let dateformatted =
        'Fri ' + friday.getDate() + ' ' + months[friday.getMonth()];
      this.selected = dateformatted;
    } else if (weekOfMonth == 4) {
      let friday = new Date(today.setDate(first + 21));
      let dateformatted =
        'Fri ' + friday.getDate() + ' ' + months[friday.getMonth()];
      this.selected = dateformatted;
    } else {
      let friday = new Date(today.setDate(first + 28));
      let dateformatted =
        'Fri ' + friday.getDate() + ' ' + months[friday.getMonth()];
      this.selected = dateformatted;
    }
  }
}
