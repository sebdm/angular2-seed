import {Component} from 'angular2/core';

@Component({
  selector: 'home',
  template: require('./home.html'),
  providers: [],
  directives: [],
  pipes: []
})
export class Home {
  model: any = {};
  driveTypes = [ 'normal', 'abnormal' ];
  constructor() {}

}
