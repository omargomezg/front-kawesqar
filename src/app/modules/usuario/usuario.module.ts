import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { UsuarioRoutingModules } from './usuario-routing.module';
import { FormsModule } from '@angular/forms';
import { Ng2Rut, RutValidator } from 'ng2-rut';
import { AllMaterialModule } from '../../material-module';
import { ListUsersComponent } from './list-users/list-users.component';

@NgModule({
  declarations: [FormComponent, ListUsersComponent],
  imports: [
    CommonModule,
    UsuarioRoutingModules,
    FormsModule,
    Ng2Rut,
    AllMaterialModule
  ],
  providers: [RutValidator]
})
export class UsuarioModule { }
