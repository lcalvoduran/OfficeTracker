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
      weekend: false,
      marked: false,
    },
    { dayOfWeek: 'Tue',
      number: 0,
      weekend: false,
      marked: false,
    },
    { dayOfWeek: 'Wed',
      number: 0,
      weekend: false,
      marked: false,
    },
    { dayOfWeek: 'Thu',
      number: 0,
      weekend: false,
      marked: false,
    },
    { dayOfWeek: 'Fri',
      number: 0,
      weekend: false,
      marked: false,
    },
/*     { dayOfWeek: 'Sat',
      number: 0,
      weekend: true,
    },
    { dayOfWeek: 'Sun',
      number: 0,
      weekend: true,
    },   */      
  ];


  constructor() {
    super(...arguments);
    this.showMyCalendar(currentMonth, currentYear);
    
  }

  

  showMyCalendar(month, year) {
    this.monthYear = months[currentMonth] + ' ' + currentYear;
    this.currentWeek = this.myCurrentWeek(); 
    this.currentWeekDays();
  }
 
  myCurrentWeek(){
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


@action changeArray(day, number){
  this.isMarked = !this.isMarked;
  let positionObject = this.queue.findIndex(x=> x.number == number)
  this.queue.splice(positionObject, //Posicion del objeto
                    1,              //Número de items a borrar
                    {
                    "dayOfWeek": day,
                    "number": number,                                      
                    "weekend": true,
                    "marked": this.isMarked
                    }
                    );
  let newArray = this.queue
  this.queue = newArray;
  console.log(this.queue);
  let dateFormatted = new Date(currentYear, currentMonth, number);                
  this.args.updateArray(newArray, dateFormatted.toDateString(), !this.isMarked);
}

/*   @action changeArray(day, number, isMarked){
      //Usuario
      let user = this.login.retrieveSessionStorage();
      this.Usuario = user.replace('@copyright.com', '');
      console.log(day);
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
      
      let dateFormatted = day + " " + number + " " + months[currentMonth];
      let newArray = 
              {
                date: dateFormatted,
                marked: isMarked
              };   

      this.args.updateArray(newArray, dateFormatted, isMarked);   
  } */



  @action next() {
    if (this.currentWeek == 1) {
      this.getNextMonday(1);
    }else{
      this.getNextMonday(0);
    }
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
    console.log(months[currentMonth]);
  }


  getNextMonday(varMonth){
    let lastDay = this.queue[0].number;
    let lastDate = new Date(currentYear, currentMonth - varMonth, lastDay);
    lastDate.setDate(lastDate.getDate() + (((1 + 7 - lastDate.getDay()) % 7) || 7));
    let nextMonday = lastDate.getDate();  
    let otherDays = []; 
    for (let i = 0; i < this.queue.length-1; i++) {
      lastDate.setMilliseconds(lastDate.getMilliseconds() + 8.64e+7);
      otherDays.push(lastDate.getDate());
      this.queue = [
        { dayOfWeek: 'Mon',
          number: nextMonday,
        },
        { dayOfWeek: 'Tue',
          number: otherDays[0],
        },
        { dayOfWeek: 'Wed',
          number: otherDays[1],
        },
        { dayOfWeek: 'Thu',
          number: otherDays[2],
        },
        { dayOfWeek: 'Fri',
          number: otherDays[3],
        },      
        ];       
    }  
  }


  getPreviousMonday(varMonth){
    let lastDay = this.queue[0].number;
    let lastDate = new Date(currentYear, currentMonth - varMonth, lastDay);
    lastDate.setDate(lastDate.getDate() - (((1 + 7 - lastDate.getDay()) % 7) || 7));
    let nextMonday = lastDate.getDate();

    let otherDays = []; 
    for (let i = 0; i < this.queue.length-1; i++) {
      lastDate.setMilliseconds(lastDate.getMilliseconds() + 8.64e+7);
      otherDays.push(lastDate.getDate());
      this.queue = [
        { dayOfWeek: 'Mon',
          number: nextMonday,
        },
        { dayOfWeek: 'Tue',
          number: otherDays[0],
        },
        { dayOfWeek: 'Wed',
          number: otherDays[1],
        },
        { dayOfWeek: 'Thu',
          number: otherDays[2],
        },
        { dayOfWeek: 'Fri',
          number: otherDays[3],
        },      
        ];       
    } 

  }

  @action back() {
    if (this.currentWeek == 1) {
      this.getPreviousMonday(1);
    }else{
      this.getPreviousMonday(0);
    }

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

