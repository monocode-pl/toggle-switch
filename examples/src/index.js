import angular from 'angular';
import {ToggleSwitchModule} from '@monocode/toggle-switch';
import {MainController} from "./main.controller";

angular.module('example', [ToggleSwitchModule])
  .controller('MainController', MainController);

console.log('init');