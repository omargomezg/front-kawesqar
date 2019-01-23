import { Component, OnInit } from '@angular/core';
import { MedidaModel } from '../../core/models/medida.model';
import { MedidaService } from '../../core/services/medida.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  medidas: MedidaModel[];

  constructor(private readonly medidaService: MedidaService) { }

  ngOnInit() {
    this.loadMedidas();
  }

  loadMedidas() {
    this.medidaService.getMedidas()
      .subscribe(data => {
        this.medidas = data;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

}
