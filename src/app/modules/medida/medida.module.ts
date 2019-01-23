import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { MedidaRoutingModule } from './medida-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonDataService } from './core/services/common-data.service';

@NgModule({
  declarations: [FormComponent, HomeComponent, ListComponent],
  imports: [
    CommonModule,
    MedidaRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CommonDataService]
})
export class MedidaModule { }
