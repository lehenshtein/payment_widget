import {Component, forwardRef, OnDestroy, OnInit} from '@angular/core';
import {DataService} from '@app/shared/services/data.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ApiRequestsService} from '@app/shared/services/api-requests.service';
import {takeWhile} from 'rxjs/operators';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => PaymentMethodComponent)
    }
  ]
})
export class PaymentMethodComponent implements OnInit, OnDestroy, ControlValueAccessor {

  public paymentMethods;
  private countryCode: string;
  private alive = true;
  private formPaymentMethods: FormGroup;

  constructor(
    private apiRequestsService: ApiRequestsService,
    private data: DataService
  ) { }

  ngOnInit() {
    this.getCountryCode();
    this.formPaymentMethods = new FormGroup({
      'method': new FormControl('', [Validators.required]),
    });
  }
  private getCountryCode() {
    this.data.currentMessage
      .pipe(takeWhile(() => this.alive))
      .subscribe(message => {
        this.countryCode = message;
        this.getPaymentMethod(this.countryCode);
      });
  }
  private getPaymentMethod (countryCode) {
    this.apiRequestsService.getPaymentMethod(countryCode)
      .subscribe(
        (data: any) => {
          this.paymentMethods = data;
        },
        (err: HttpErrorResponse) => {
          console.error(err.statusText +  err.status);
        }
      );
  }
  ngOnDestroy() {
    this.alive = false;
  }

  public onTouched: () => void = () => {};

  registerOnChange(fn: any): void {
    this.formPaymentMethods.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(val: any): void {
    val && this.formPaymentMethods.setValue(val, {emitEvent: false});
  }

}
