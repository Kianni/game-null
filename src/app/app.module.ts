import { BrowserModule } from '@angular/platform-browser';
import { EventEmitter, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventEmitter],
  bootstrap: [AppComponent]
})
export class AppModule { }
