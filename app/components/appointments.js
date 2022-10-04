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
  @tracked isMarkedMon = false;
  @tracked isMarkedTue = false;
  @tracked isMarkedWed = false;
  @tracked isMarkedThu = false;
  @tracked isMarkedFri = false;
  
  @tracked numberOfDay1;
  @tracked numberOfDay2;
  @tracked numberOfDay3;
  @tracked numberOfDay4;
  @tracked numberOfDay5;

  @tracked Usuario;


  constructor() {
    super(...arguments);
    this.showMyCalendar(currentMonth, currentYear);
  }

  showMyCalendar(month, year) {
    this.monthYear = months[currentMonth] + ' ' + currentYear;
    this.currentWeek = this.myCurrentWeek();
    console.log(this.myFirstMonday());    
  }

  myCurrentWeek(){
    let startDate = new Date(today.getFullYear(), currentMonth, 1);
    let myDays = Math.floor((today - startDate)/(24 * 60 * 60 * 1000));      
    return Math.ceil(myDays/7) + 1;  
  }

  myFirstMonday(){
    let startDate2 = new Date(today.getFullYear(), currentMonth, 1);
    let first2 = startDate2.getDate()-startDate2.getDay()+1;
    let firstMonday = new Date(today.setDate(first2));
    return firstMonday; 
  }


  @action changeArray(day, isMarked){
      //Usuario
      let user = this.login.retrieveSessionStorage();
      this.Usuario = user.replace('@copyright.com', '');
      
      if (day=="Mon"){
        this.isMarkedMon = isMarked;
      }else if (day=="Tue"){
        this.isMarkedTue = isMarked; 
      }else if (day=="Wed"){
        this.isMarkedWed = isMarked;
      }else if (day=="Thu"){
        this.isMarkedThu = isMarked;
      }else if (day=="Fri"){
        this.isMarkedFri = isMarked;  
      }
      let dateFormatted = day + " " + today.getDate() + " " + months[currentMonth];
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

