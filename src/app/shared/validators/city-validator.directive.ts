import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidatorDirective,
      multi: true
    }
  ]
})
export class CityValidatorDirective implements Validator {
  // tslint:disable-next-line:no-input-rename
  @Input('city') validCities: string[];
  
  constructor() { }
  
  validate(control: AbstractControl): ValidationErrors | null {
    if (control.value && this.validCities.indexOf(control.value) === -1) {
      return {
        city: {
          actualValue: control.value,
          validCities: this.validCities
        }
      };
    }

    return null;
  }
}
