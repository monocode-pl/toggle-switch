# toggle-switch
![toggle-switch image](docs/toggle-switch.gif)

## Installation

```bash
npm install @monocode/toggle-switch
```

## Usage
```javascript
import angular from 'angular';
import {ToggleSwitchModule} from '@monocode/toggle-switch`;

angular.module('myApp', [ToggleSwitchModule]);
```
```html
<toggle-switch ng-model="user.active"></toggle-switch>
```

## Configuration
###model
toggle-switch utilizes `ngModel` directive, so you can use it like any other input control.
```html
<toggle-switch ng-model="user.active"></toggle-switch>
```
You can specify additional properties using `ngModelOptions`
```html
<toggle-switch ng-model="user.active" 
               ng-model-options="{debounce: 500}"></toggle-switch>
```

###size
toggle-switch comes in 4 predefined sizes: `sm`, `md` (default), `lg` and `xlg`. 
You can change the size using `size` attribute.

```html
<toggle-switch ng-model="user.active" 
               size="sm"></toggle-switch>
```
###disable/enable
toggle-switch supports `disable` attribute. 
If the attribute is set, control will not accept any user input.

```html
<toggle-switch ng-model="user.active" 
               disabled></toggle-switch>
```

To disable/enable toggle-switch conditionally use `ngDisabled` directive.
```html
<toggle-switch ng-model="user.active" 
               ng-disabled="user.age > 21"></toggle-switch>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)