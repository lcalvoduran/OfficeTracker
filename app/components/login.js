import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class loginComponent extends Component {
  @service router;
  @service login;
  @tracked userEmail = this.value;

  @action submitLogin() {    
    if(this.login.saveUser(this.userEmail)){
      return this.router.transitionTo('index');
    }else{
      return this.router.transitionTo('login');
    }
  }
}
