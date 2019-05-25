import tpl from './toggle-switch.template.html';

import './toggle-switch.styles.less';
import {ToggleSwitchController} from "./toggle-switch.controller";

const ToggleSwitchComponent = {
  template: tpl,
  controller: ToggleSwitchController,
  require: {
    ngModel: 'ngModel'
  }
};

export {ToggleSwitchComponent};
