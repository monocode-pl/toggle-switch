import angular from 'angular';
import {ToggleSwitchComponent} from "./toggle-switch.component";

const ToggleSwitchModule = angular.module('monocode.toggle-switch', [])
    .component('toggleSwitch', ToggleSwitchComponent)
    .name;

export {ToggleSwitchModule};
