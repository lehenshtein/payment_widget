import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './shared/material/material.module';
import { WidgetComponent } from './widget/widget.component';
import { FormComponent } from './widget/form/form.component';
import { OnlyNumbersDirective } from './shared/directives/only-numbers.directive';
import { OnlyCharsDirective } from './shared/directives/only-chars.directive';
import { CardDatepickerComponent } from './shared/components/card-datepicker/card-datepicker.component';
import { CountrySelectorComponent } from '@app/shared/components/country-selector/country-selector.component';
import { PaymentMethodComponent } from './shared/components/payment-method/payment-method.component';
import {DataService} from '@app/shared/services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    FormComponent,
    OnlyNumbersDirective,
    OnlyCharsDirective,
    CardDatepickerComponent,
    CountrySelectorComponent,
    PaymentMethodComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
