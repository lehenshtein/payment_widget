import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from './shared/material/material.module';
import { WidgetComponent } from './widget/widget.component';
import { FormComponent } from './widget/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    WidgetComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
