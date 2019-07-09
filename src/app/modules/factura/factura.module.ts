import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegistrarComponent} from './registrar/registrar.component';
import {FacturaRoutingModules} from './factura-routing.module';
import {AllMaterialModule} from '../../material-module';
import {DialogComponent} from './registrar/dialog.component';
import {FormsModule} from '@angular/forms';
import {Ng2Rut} from 'ng2-rut';
import {SearchPipe} from './core/search.pipe';
import {MatNativeDateModule} from '@angular/material';

@NgModule({
  declarations: [RegistrarComponent, DialogComponent, SearchPipe],
  imports: [
    CommonModule,
    FacturaRoutingModules,
    AllMaterialModule,
    Ng2Rut,
    FormsModule,
    MatNativeDateModule
  ],
  entryComponents: [DialogComponent],
})
export class FacturaModule {
}
