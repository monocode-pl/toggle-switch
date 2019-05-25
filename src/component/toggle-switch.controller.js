class ToggleSwitchController {
  constructor($element) {
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
  }
}

export {ToggleSwitchController};
