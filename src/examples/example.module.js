import angular from 'angular';
import {ToggleSwitchModule} from '../component/toggle-switch.module';
import {MainController} from "./main.controller";

angular.module('example', [ToggleSwitchModule])
    .controller('MainController', MainController);
