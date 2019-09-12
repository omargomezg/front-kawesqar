import { Component, OnInit } from '@angular/core';
import { ExistenciaService } from '../core/services/existencia.service';
import { ExistenciaRequestModel } from '../core/models/existencia-request.model';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ExistenciaResponseModel } from '../core/models/existencia-response.model';
import { environment } from '../../../../environments/environment';
import { DatePipe } from '@angular/common';
import { StorageDataService } from '../core/services/storage-data.service';

@Component({
  selector: 'app-historical-existence',
  templateUrl: './historical-existence.component.html',
  styleUrls: ['./historical-existence.component.css'],
  providers: [DatePipe]
})
export class HistoricalExistenceComponent implements OnInit {
  dataRequest: ExistenciaRequestModel = new ExistenciaRequestModel();
  dataResponse: ExistenciaResponseModel[];
  loading = false;

  constructor(private servExistencia: ExistenciaService,
    public datepipe: DatePipe,
    private storageDS: StorageDataService) {
  }

  ngOnInit() {
    this.dataRequest = this.storageDS.getDataRequest();
    this.search();
  }

  delete(id: number, idSucursal: number) {
    if (confirm('Esta seguro de eliminar el documento N° ' + id)) {
      this.servExistencia.deleteExistencia(id)
        .subscribe(() =>
          this.search()
        );
    }
  }

  search() {
    this.loading = true;
    this.servExistencia.getExistencias(this.dataRequest)
      .subscribe(data => {
        if (data.length > 0) {
          this.dataResponse = data;
        } else {
          this.dataResponse = undefined;
        }
        this.loading = false;
      }, error => {
        console.log('ouch!' + error.status);
        this.loading = false;
      });
  }

  StartDateChange(event: MatDatepickerInputEvent<Date>) {
    this.dataRequest.fechaInicio = event.value;
    this.storageDS.setDataRequest(this.dataRequest);
  }

  EndDateChange(event: MatDatepickerInputEvent<Date>) {
    this.dataRequest.fechaInicio = event.value;
    this.storageDS.setDataRequest(this.dataRequest);
  }

}
