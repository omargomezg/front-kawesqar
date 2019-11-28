import { Component, OnInit } from '@angular/core';
import { MedidaService } from '../../core/services/medida.service';
import { Router } from '@angular/router';
import { CommonDataService } from '../../core/services/common-data.service';
import { Measure } from 'kawesqar-class-model';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  model: Measure = new Measure();
  submitted = false;
  estado = false;
  mensaje = '';
  result = true;
  constructor(private readonly serv: MedidaService, private router: Router, private commonData: CommonDataService) {
    this.commonData.serviceMedidaModel.subscribe((data) => {
      this.model = data;
    });
  }

  ngOnInit() {
  }

  limpiar() {
    this.model = new Measure();
  }

  emptyform() {
    this.limpiar();
    this.submitted = false;
    this.commonData.setRefreshList(true);
  }

  guardar() {
    this.serv.putMedidas(this.model)
      .subscribe(data => {
        this.submitted = true;
        this.commonData.setRefreshList(true);
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

}
