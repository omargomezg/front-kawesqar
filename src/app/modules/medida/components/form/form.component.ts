import { Component, OnInit } from '@angular/core';
import { MedidaService } from '../../core/services/medida.service';
import { MedidaModel } from '../../core/models/medida.model';
import { Router } from '@angular/router';
import { CommonDataService } from '../../core/services/common-data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  model: MedidaModel = new MedidaModel();
  submitted = false;
  estado = false;
  mensaje = '';
  result = true;
  constructor(private readonly serv: MedidaService, private router: Router, private commonData: CommonDataService) { }

  ngOnInit() {
  }

  limpiar() {
    this.model = new MedidaModel();
  }

  showList() {
    this.commonData.showData(true);
  }

  guardar() {
    this.serv.putMedidas(this.model)
      .subscribe(data => {
        this.submitted = true;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

}
