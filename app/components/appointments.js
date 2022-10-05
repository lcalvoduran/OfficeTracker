import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
//Cheatsheet: Date (year, month, day, hour, min, sec, mili)
let today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear(); 
let months = [  'January',  'February',  'March',  'April',  'May',  'June',  'July',  'August',  'September',  'October',  'November',  'December'];
export default class appointmentsComponent extends Component {
  @service login;
  @tracked monthYear;
  @tracked currentWeek;
  @tracked isMarked = false;
  @tracked Usuario;
  queue = [
    { day: 'Mon'},
    { day: 'Tue'},
    { day: 'Wed'},
    { day: 'Thu'},
    { day: 'Fri'},

  ]

  constructor() {
    super(...arguments);
    this.showMyCalendar(currentMonth, currentYear);
  }

  showMyCalendar(month, year) {
    this.monthYear = months[currentMonth] + ' ' + currentYear;
    this.currentWeek = this.myCurrentWeek();
  }
 
  myCurrentWeek(){ // Método para ver en qué semana estamos actualmente
    let startDate = new Date(today.getFullYear(), currentMonth, 1);
    let myDays = Math.floor((today - startDate)/(24 * 60 * 60 * 1000));      
    return Math.ceil(myDays/7) + 1;  
  }

  myFirstMonday(contador){ //Método para comprobar en qué Date() empieza el primer lunes de cada mes
    let startDate2 = new Date(today.getFullYear(), currentMonth, contador);
    let first2 = startDate2.getDate()-startDate2.getDay()+1;
    let firstMonday = new Date(today.setDate(first2));
    return firstMonday.getDate(); 
  }


  @action changeArray(day, isMarked){
      //Usuario
      let user = this.login.retrieveSessionStorage();
      this.Usuario = user.replace('@copyright.com', '');
      if (day=="Mon"){
        this.isMarked = isMarked;        
      }else if (day=="Tue"){
        this.isMarked = isMarked;
      }else if (day=="Wed"){
        this.isMarked = isMarked;
      }else if (day=="Thu"){
        this.isMarked = isMarked;
      }else if (day=="Fri"){
        this.isMarked = isMarked;
      }
      
      let dateFormatted = day + " " + numberOfDaySelected + " " + months[currentMonth];
      let newArray = 
              {
                date: dateFormatted,
                marked: isMarked
              };   

      this.args.updateArray(newArray, dateFormatted, isMarked);   


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

