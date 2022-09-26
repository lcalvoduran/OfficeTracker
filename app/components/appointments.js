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

  @action getMonday(){
    let weekOfMonth = this.currentWeek;     // Semana seleccionada
    let monthOfYear = currentMonth;         // Mes seleccionado
    let year = currentYear;                 // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 1;
    if(weekOfMonth == 1){
      let monday = new Date(today.setDate(first));
      console.log(monday);
    }else if (weekOfMonth == 2){
      let monday = new Date(today.setDate(first+7));
      console.log(monday);
    }else if (weekOfMonth == 3){
      let monday = new Date(today.setDate(first+14));
      console.log(monday);
    }else if (weekOfMonth == 4){
      let monday = new Date(today.setDate(first+21));
      console.log(monday);
    }else{
      let monday = new Date(today.setDate(first+28));
      console.log(monday);      
    }    
  }
  @action getTuesday(){
    let weekOfMonth = this.currentWeek;     // Semana seleccionada
    let monthOfYear = currentMonth;         // Mes seleccionado
    let year = currentYear;                 // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 2;
    if(weekOfMonth == 1){
      let tuesday = new Date(today.setDate(first));
      console.log(tuesday);
    }else if (weekOfMonth == 2){
      let tuesday = new Date(today.setDate(first+7));
      console.log(tuesday);
    }else if (weekOfMonth == 3){
      let tuesday = new Date(today.setDate(first+14));
      console.log(tuesday);
    }else if (weekOfMonth == 4){
      let tuesday = new Date(today.setDate(first+21));
      console.log(tuesday);
    }else{
      let tuesday = new Date(today.setDate(first+28));
      console.log(tuesday);      
    }    
  }  
  @action getWednesday(){
    let weekOfMonth = this.currentWeek;     // Semana seleccionada
    let monthOfYear = currentMonth;         // Mes seleccionado
    let year = currentYear;                 // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 3;
    if(weekOfMonth == 1){
      let wednesday = new Date(today.setDate(first));
      console.log(wednesday);
    }else if (weekOfMonth == 2){
      let wednesday = new Date(today.setDate(first+7));
      console.log(wednesday);
    }else if (weekOfMonth == 3){
      let wednesday = new Date(today.setDate(first+14));
      console.log(wednesday);
    }else if (weekOfMonth == 4){
      let wednesday = new Date(today.setDate(first+21));
      console.log(wednesday);
    }else{
      let wednesday = new Date(today.setDate(first+28));
      console.log(wednesday);      
    }    
  }   

  @action getThursday(){
    let weekOfMonth = this.currentWeek;     // Semana seleccionada
    let monthOfYear = currentMonth;         // Mes seleccionado
    let year = currentYear;                 // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 4;
    if(weekOfMonth == 1){
      let thursday = new Date(today.setDate(first));
      console.log(thursday);
    }else if (weekOfMonth == 2){
      let thursday = new Date(today.setDate(first+7));
      console.log(thursday);
    }else if (weekOfMonth == 3){
      let thursday = new Date(today.setDate(first+14));
      console.log(thursday);
    }else if (weekOfMonth == 4){
      let thursday = new Date(today.setDate(first+21));
      console.log(thursday);
    }else{
      let thursday = new Date(today.setDate(first+28));
      console.log(thursday);      
    }    
  } 
  
  @action getFriday(){
    let weekOfMonth = this.currentWeek;     // Semana seleccionada
    let monthOfYear = currentMonth;         // Mes seleccionado
    let year = currentYear;                 // Año seleccionado
    //Cheatsheet: Date (year, month, day, hour, min, sec, mili)
    let today = new Date(year, monthOfYear);
    let first = today.getDate() - today.getDay() + 5;
    if(weekOfMonth == 1){
      let friday = new Date(today.setDate(first));
      console.log(friday);
    }else if (weekOfMonth == 2){
      let friday = new Date(today.setDate(first+7));
      console.log(friday);
    }else if (weekOfMonth == 3){
      let friday = new Date(today.setDate(first+14));
      console.log(friday);
    }else if (weekOfMonth == 4){
      let friday = new Date(today.setDate(first+21));
      console.log(friday);
    }else{
      let friday = new Date(today.setDate(first+28));
      console.log(friday);      
    }    
  }   
}