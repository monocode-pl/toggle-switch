import angular from 'angular';
import {ToggleSwitchComponent} from "./toggle-switch.component";

const ToggleSwitchModule = angular.module('monocode.toggle-switch', [])
    .component('toggleSwitch', ToggleSwitchComponent);

export default ToggleSwitchModule.name;
