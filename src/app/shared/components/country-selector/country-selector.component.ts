import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR, Validators} from '@angular/forms';
import {countries} from '@app/shared/countries';
import {Country} from '@app/shared/interfaces';
import {HttpErrorResponse} from '@angular/common/http';
import {ApiRequestsService} from '@app/shared/services/api-requests.service';
import {DataService} from '@app/shared/services/data.service';

@Component({
  selector: 'app-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.sass'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => CountrySelectorComponent)
    }
  ]
})
export class CountrySelectorComponent implements OnInit, ControlValueAccessor {
  public formCountries: FormGroup;
  public countriesList: Country[] = countries;
  public selectedCountry: any;
  constructor(
    private apiRequestsService: ApiRequestsService,
    private data: DataService
  ) { }

  ngOnInit() {
    this.formCountries = new FormGroup({
      'countries': new FormControl('', [Validators.required]),
    });
    this.getCountry();

    this.data.currentMessage.subscribe(message => this.selectedCountry = message);
  }
  public getCountry() {
    this.apiRequestsService.getCountry()
      .subscribe(
        (country: Country) => {
          this.formCountries.controls.countries.patchValue(country.code);
          this.data.changeMessage(country.code);
        },
        (err: HttpErrorResponse) => {
          console.error(err.statusText +  err.status);
        }
      );
  }
  public onSelect(country) {
    this.data.changeMessage(country.value);
  }
  public onTouched: () => void = () => {};

  writeValue(val: any) {
    val && this.formCountries.setValue(val, {emitEvent: false});
  }
  registerOnChange (fn: (value: any) => void) {
    this.formCountries.valueChanges.subscribe((data) => {
    });
  }
  registerOnTouched (fn: () => void) {
    this.onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.formCountries.disable() : this.formCountries.enable();
  }
}
