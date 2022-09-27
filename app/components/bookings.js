import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {

  @tracked multiple = 2;

  @action double(){
    this.multiple = this.multiple *2;
  }


}