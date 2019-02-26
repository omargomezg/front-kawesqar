import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SucursalRoutingModule } from './sucursal-routing.module';
import { ListComponent } from './list/list.component';
import { FormComponent } from './form/form.component';
import { CommonDataService } from './core/services/common-data.service';
import { FormsModule } from '@angular/forms';
import { Ng2Rut, RutValidator } from 'ng2-rut';
import { CiudadesModule } from '../ciudades/ciudades.module';

@NgModule({
  declarations: [HomeComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    SucursalRoutingModule,
    FormsModule,
    Ng2Rut,
    CiudadesModule
  ],
  providers: [CommonDataService, RutValidator]
})
export class SucursalModule { }
