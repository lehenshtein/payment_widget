import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {LuhnValidator} from '@app/shared/validators/luhn.validator';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  form: FormGroup;

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

    });
  }
  public datepickerDate (date) {
    this.form.setControl('date', date);
  }
  public onSubmit() {
    console.log(this.form);
  }
}
