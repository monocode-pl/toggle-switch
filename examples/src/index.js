import angular from 'angular';
import {ToggleSwitchModule} from '@monocode/toggle-switch';
import {MainController} from "./main.controller";

import './main.css';

angular.module('example', [ToggleSwitchModule])
  .controller('MainController', MainController);