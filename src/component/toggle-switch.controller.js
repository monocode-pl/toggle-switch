class ToggleSwitchController {
  constructor($element) {
    'ngInject';

    this.$element = $element;
  }

  $onInit() {
    this.ngModel.$render = () => this.render();

    this.$element.on('click', () => {
      this.toggle();
    })
  }

  get viewValue() {
    return this.ngModel.$viewValue;
  }

  set viewValue(value) {
    this.ngModel.$setViewValue(value);
    this.ngModel.$render();
  }

  toggle() {
    this.viewValue = !this.viewValue;
  }

  render() {
    this.$element.toggleClass('on', this.viewValue);
    this.$element.toggleClass('off', !this.viewValue);
    this.$element.toggleClass('toggle-switch--size-sm', this.size === 'sm');
    this.$element.toggleClass('toggle-switch--size-lg', this.size === 'lg');
    this.$element.toggleClass('toggle-switch--size-xlg', this.size === 'xlg');
  }
}

export {ToggleSwitchController};
