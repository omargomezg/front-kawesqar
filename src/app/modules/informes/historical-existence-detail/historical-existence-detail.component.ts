import { Component, OnInit } from '@angular/core';
import { ExistenciaService } from '../core/services/existencia.service';
import { ExistenciaDetailModel } from '../core/models/existencia-detail.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-historical-existence-detail',
  templateUrl: './historical-existence-detail.component.html',
  styleUrls: ['./historical-existence-detail.component.css']
})
export class HistoricalExistenceDetailComponent implements OnInit {
  data: ExistenciaDetailModel[];
  fecha: Date;
  sucursal: string;
  bodega: string;
  constructor(private servExistencia: ExistenciaService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.bodega !== undefined && params.sucursal !== undefined) {
        this.getData(params.bodega, params.sucursal);
      }
    });
  }

  getData(idBodega: number, idSucursal: number) {
    this.servExistencia.getExistenciaHistorica(idBodega, idSucursal)
      .subscribe(
        data => {
          this.data = data;
          this.fecha = data[0].fecha;
          this.sucursal = data[0].nombreSucursal;
          this.bodega = data[0].descripcion;
          setTimeout(() => {
            window.print();
          }, 2500);
        },
        error => {
          console.log('ouch!' + error.status);
        }
      );
  }

}
