import Controller from '@ember/controller';

export default class AppointmentsController extends Controller {
   monthYear = 2021;

   @action 
   toggleYear(){
    this.toggleProperty(this.monthYear);
   }
}
