import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LuhnValidator} from '@app/shared/validators/luhn.validator';
import {currencies} from '@app/shared/currencies';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  @Output() onSuccess = new EventEmitter<boolean>();
  public form: FormGroup;
  public currencyList = currencies;

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'cardNumber': new FormControl(null, [
        Validators.required,
        Validators.minLength(16),
        LuhnValidator
      ]),
      'cvv': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'countriesForm': new FormControl(''),
      'paymentMethodForm': new FormControl(''),
      'amount': new FormControl('5'),
      'currency': new FormControl('USD'),

    });
  }
  public datepickerDate (date) {
    this.form.setControl('date', date);
  }
  public onSubmit() {
    if (this.form.valid) {
      this.onSuccess.emit(true);
      console.log(this.form);
      return;
    }
    this.onSuccess.emit(false);
  }
}
