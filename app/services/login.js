import Service from '@ember/service';

export default class LoginService extends Service {
  userArray = [];
  constructor() {
    super();
  }

  saveUser(email) {
    if (email.includes('@copyright.com')) {
      this.userArray.push({ email, password: 123456, estado: true });
      localStorage.setItem('currentUser', JSON.stringify(this.userArray));
      return true;
    } else {
      console.log('[CCC] ❌​ Please enter a valid mail address');
      return false;
    }
  }

  leaveSession() {
    let estadoList = JSON.parse(localStorage.getItem('currentUser'));
    let modificaArray = this.userArray.findIndex(element => element.estado == true);
    this.userArray.splice(modificaArray, 1);
    console.log(this.userArray);
    localStorage.setItem('currentUser', JSON.stringify(this.userArray));
    /* 
   localStorage.clear();
   location.reload(); 
   */
  }

  retrieveSessionStorage() {
    let varLocal = localStorage.getItem('currentUser');
    if (varLocal == null) {
      this.userArray = [];
      console.log('No hay usuarios logeados');
      return this.userArray;
    } else {
      this.userArray = [];
      const arr = JSON.parse(localStorage.getItem('currentUser'));
      //console.log(arr);
      var foundState = arr.find(estado => estado.estado == true)
      if (foundState) {
        this.userArray = [...this.userArray, ...arr];
        return this.userArray[0].email;        
      }
      console.log("Ningún usuario activo");

    }
  }


}
