# toggle-switch

Simple and clean toggle switch control.
![toggle-switch image](docs/toggle-switch.png)

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


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[ISC](https://choosealicense.com/licenses/isc/)