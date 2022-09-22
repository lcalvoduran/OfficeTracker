import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class navbarComponent extends Component {
  @service router;
  @service login;
  @tracked currentUser;

  constructor() {
    super(...arguments);
    this.anySessionStored();
  }

  anySessionStored() {
    this.currentUser = this.login.retrieveSessionStorage();
    console.log(this.currentUser);
    if (this.currentUser.length == 0) {
      console.log('❌ [Copyright Clearance Center]: Necesitas estar autentificado para entrar en el sistema');
      
      this.router.transitionTo('login');
    } else {
      console.log('✔️ [Copyright Clearance Center]: Autentificación correcta');
    }
  }

  @action logOut() {
    console.log('Está usando logOut');
    this.login.leaveSession();
  }
}
