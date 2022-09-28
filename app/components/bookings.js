import Component from '@glimmer/component';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class bookingsComponent extends Component {

  @tracked arrayDays = ['💬​'];

  @action updateArray(newArray) {
    this.arrayDays = newArray;
  }
}