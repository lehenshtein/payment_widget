import {FormControl, ValidationErrors} from '@angular/forms';

export function LuhnValidator (control: FormControl): ValidationErrors {
    const number = control.value;
    const isLuhnValid = function luhn(array) {
      return function () {
        let len = number ? number.length : 0,
          bit = 1,
          sum = 0;

        while (len--) {
          sum += !(bit ^= 1) ? parseInt(number[len], 10) : array[number[len]];
        }

        return sum % 10 === 0 && sum > 0;
      };
    }([0, 2, 4, 6, 8, 1, 3, 5, 7, 9]);
    if (!isLuhnValid() && number) {
      return { invalidNumber: true };
    }
    return null;
}
