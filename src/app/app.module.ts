import { HttpClientModule } from '@angular/common/http';

import localeCl from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Rut, RutValidator } from 'ng2-rut';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layer/header/header.component';
import { GetExternalBaseComponent } from './components/get-external-base/get-external-base.component';
import { AllMaterialModule } from './material-module';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';

registerLocaleData(localeCl);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GetExternalBaseComponent,
    OnlyNumbersDirective
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    Ng2Rut,
    AllMaterialModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
  ],
  providers: [
    RutValidator,
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
