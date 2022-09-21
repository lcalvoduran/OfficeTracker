import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { later } from '@ember/runloop';

export default class loginComponent extends Component {
  @service router;
  @service login;
  @tracked userEmail = this.value;
  @tracked validationUser = true;

  @action submitLogin() {
    if (this.login.saveUser(this.userEmail)) {
      this.validationUser = false;
      later(() => {
        return this.router.transitionTo('index');
      }, 2000);
    } else {
      return this.router.transitionTo('login');
    }
  }
}
