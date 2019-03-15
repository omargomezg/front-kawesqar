import { Component, OnInit } from '@angular/core';
import { MedidaModel } from '../../core/models/medida.model';
import { MedidaService } from '../../core/services/medida.service';
import { CommonDataService } from '../../core/services/common-data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  medidas: MedidaModel[];

  constructor(private readonly medidaService: MedidaService, private commonData: CommonDataService) {
    this.commonData.serviceRefreshList.subscribe((data) => {
      this.loadMedidas();
    });
  }

  ngOnInit() {
    this.loadMedidas();
  }

  edit(id: number) {
    const medida = this.medidas.find(item => item.id === id);
    this.commonData.setMedidaModel(medida);
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
