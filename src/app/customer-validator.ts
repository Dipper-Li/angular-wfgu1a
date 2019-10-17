import {AbstractControl, FormControl, ValidatorFn} from '@angular/forms';

export class CustValidatorFn {
  static forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    console.log('power:',control.parent?control.parent.get('power').value:null);
    const forbidden = nameRe.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null;
  };
}

  
}

