import { Component, OnInit } from '@angular/core';
import { Measure } from 'kawesqar-class-model';
import { MeasureService } from 'src/app/core/services/measure.service';

@Component({
  selector: 'app-edit-measure',
  templateUrl: './edit-measure.component.html',
  styleUrls: ['./edit-measure.component.css']
})
export class EditMeasureComponent implements OnInit {

  model: Measure = new Measure();

  constructor(private readonly servMeasure: MeasureService) { }

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
    this.servMeasure.putMedidas(this.model)
      .subscribe(data => {
        this.submitted = true;
        this.commonData.setRefreshList(true);
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

}
