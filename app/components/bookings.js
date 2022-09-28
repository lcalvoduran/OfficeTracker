import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {

  @tracked multiple = 2;
  @tracked arrayDays = ['heeeeey'];

  
  @action updateMultiple(newMultiple) {
    this.multiple = newMultiple;
  }
}