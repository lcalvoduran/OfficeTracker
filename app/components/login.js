import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class loginComponent extends Component {
  @service router;
  @service login;
  @tracked userEmail = this.value;

  @action submitLogin() {
    if (this.login.saveUser(this.userEmail)) {
      later(() => {
        return this.router.transitionTo('index');
      }, 2000);
    } else {
      later(() => {
        let verificador = document.getElementById('verificator');
        verificador.innerHTML =
          '<div class="rup-notification rup-notification--error rup-notification--with-icon" role="alertdialog" aria-label="notification label" aria-describedby="alert_desc-7"><span class="rup-notification__icon rup-icon"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-forbidden"><path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M12 4a8 8 0 00-6.439 12.75L16.75 5.56A7.96 7.96 0 0012 4zm6.198 2.941L6.94 18.198A8 8 0 0018.198 6.94zM2 12C2 6.477 6.477 2 12 2a9.97 9.97 0 016.917 2.778A9.974 9.974 0 0122 12c0 5.523-4.477 10-10 10a9.974 9.974 0 01-7.222-3.083A9.97 9.97 0 012 12z"></path></svg></span><p id="alert_desc-7" class="rup-notification__content">Please enter a valid email address</p><button class="rup-notification__close rup-icon-btn rup-icon-btn--neutral rup-icon-btn--sm" type="button"><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" class="icon-clear"><path class="primary" fill-rule="evenodd" clip-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12 4.293 5.707a1 1 0 010-1.414z"></path></svg></button></div>';
        later(() => {
          window.location.reload();
        }, 2000);
      }, 2000);
    }
  }
}
