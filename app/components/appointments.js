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
  @tracked  queue = [
    { dayOfWeek: 'Mon',
      number: 0,
    },
    { dayOfWeek: 'Tue',
      number: 0,
    },
    { dayOfWeek: 'Wed',
      number: 0,
    },
    { dayOfWeek: 'Thu',
      number: 0,
    },
    { dayOfWeek: 'Fri',
      number: 0,
    },
  ];


  constructor() {
    super(...arguments);
    this.showMyCalendar(currentMonth, currentYear);
    
  }

  

  showMyCalendar(month, year) {
    this.monthYear = months[currentMonth] + ' ' + currentYear;
    this.currentWeek = this.myCurrentWeek();  //Establece la week en la que me encuentro
    this.currentWeekDays();                   //Hace un display de los días semanales
  }
 
  myCurrentWeek(){ // Método para ver en qué semana estamos actualmente
    let startDate = new Date(today.getFullYear(), currentMonth, 1);
    let myDays = Math.floor((today - startDate)/(24 * 60 * 60 * 1000));      
    return Math.ceil(myDays/7) + 1;  
  }

  currentWeekDays(){ // getDay() 0-6 >> 1 Monday , 2 Tuesday, 3 Wednesday, 4 Thursday, 5 Friday |||||||||| queue >> 0 Monday, 1 Tuesday, 2 Wednesday, 3 Thursday, 4 Friday
    if (today.getDay() == 0) {
      console.log("Domingo");
      for (let i = 0; i < this.queue.length; i++) {
        this.queue[i].number = today.setMilliseconds(today.getMilliseconds()+8.64e+7);
        this.queue[i].number = today.getDate();
      }

    }else if(today.getDay() == 1) {
      console.log("Lunes");
      this.queue[0].number = today.getDate();
      for (let i = 1; i < this.queue.length; i++) {
        this.queue[i].number = today.setMilliseconds(today.getMilliseconds()+8.64e+7);
        this.queue[i].number = today.getDate();
      }    

    }else if(today.getDay() == 2) {
      console.log("Martes");
      this.queue[0].number = today.setMilliseconds(today.getMilliseconds()-8.64e+7);
      this.queue[0].number = today.getDate();      
      for (let i = 1; i < this.queue.length; i++) {
        this.queue[i].number = today.setMilliseconds(today.getMilliseconds()+8.64e+7);
        this.queue[i].number = today.getDate();
      }       
    }else if(today.getDay() == 3) {
      console.log("Miércoles");
      this.queue[0].number = today.setMilliseconds(today.getMilliseconds()-8.64e+7*2);
      this.queue[0].number = today.getDate();     
      for (let i = 1; i < this.queue.length; i++) {
        this.queue[i].number = today.setMilliseconds(today.getMilliseconds()+8.64e+7);
        this.queue[i].number = today.getDate();
      }   
    }else if(today.getDay() == 4) {
      console.log("Jueves");
      this.queue[0].number = today.setMilliseconds(today.getMilliseconds()-8.64e+7*3);
      this.queue[0].number = today.getDate();     
      for (let i = 1; i < this.queue.length; i++) {
        this.queue[i].number = today.setMilliseconds(today.getMilliseconds()+8.64e+7);
        this.queue[i].number = today.getDate();
      } 

    }else if(today.getDay() == 5) {
      console.log("Viernes");
      this.queue[0].number = today.setMilliseconds(today.getMilliseconds()-8.64e+7*4);
      this.queue[0].number = today.getDate();    
      for (let i = 1; i < this.queue.length; i++) {
        this.queue[i].number = today.setMilliseconds(today.getMilliseconds()+8.64e+7);
        this.queue[i].number = today.getDate();
      }     

    }else if(today.getDay() == 6) {
      console.log("Sábado");
      this.queue[0].number = today.setMilliseconds(today.getMilliseconds()-8.64e+7*5);
      this.queue[0].number = today.getDate();    
      for (let i = 1; i < this.queue.length; i++) {
        this.queue[i].number = today.setMilliseconds(today.getMilliseconds()+8.64e+7);
        this.queue[i].number = today.getDate();
      }      
    }
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
      
      let dateFormatted = day + " " + this.numberPerDay + " " + months[currentMonth];
      let newArray = 
              {
                date: dateFormatted,
                marked: isMarked
              };   

      this.args.updateArray(newArray, dateFormatted, isMarked);   


  }


  @action next() {
    let lastDay = this.queue[0].number;
    let lastDate = new Date(currentYear, currentMonth, lastDay);
    console.log("El último lunes fue el: " + lastDate);


    this.queue = [
      { dayOfWeek: 'Mon',
      number: 0,
    },
    { dayOfWeek: 'Tue',
      number: 0,
    },
    { dayOfWeek: 'Wed',
      number: 0,
    },
    { dayOfWeek: 'Thu',
      number: 0,
    },
    { dayOfWeek: 'Fri',
      number: 0,
    },      
    ];


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
    let primerLunes = this.queue[0].number;
    let datePrimerLunes = new Date(currentYear, currentMonth, primerLunes); //Recogemos la fecha del lunes pasado
    datePrimerLunes.setMilliseconds(datePrimerLunes.getMilliseconds() - 8.64e+7*7);
    let numeroPrimerLunes = datePrimerLunes.getDate()
    this.queue = [
      { dayOfWeek: 'Mon',
        number: numeroPrimerLunes,
      },
      { dayOfWeek: 'Tue',
        number: numeroPrimerLunes + 1,
      },
      { dayOfWeek: 'Wed',
        number: numeroPrimerLunes + 2,
      },
      { dayOfWeek: 'Thu',
        number: numeroPrimerLunes + 3,
      },
      { dayOfWeek: 'Fri',
        number: numeroPrimerLunes + 4,
      },
    ];
  }  
}

