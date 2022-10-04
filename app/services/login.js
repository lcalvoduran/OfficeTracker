import Service from '@ember/service';

export default class LoginService extends Service {
  userArray = [];
  constructor() {
    super();
  }

  saveUser(email) {
    if (email.includes('@copyright.com')) {
      this.userArray.push({ email, password: 123456 });
      localStorage.setItem('currentUser', JSON.stringify(this.userArray));
      return true;
    } else {
      console.log('[CCC] ❌​ Please enter a valid mail address');
      return false;
    }
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
      this.userArray = [...this.userArray, ...arr];
      return this.userArray[0].email;
    }
  }

  leaveSession() {
    localStorage.clear();
    location.reload();
  }
}
