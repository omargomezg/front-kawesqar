import { CommonModule } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { HistoricalExistenceDetailComponent } from './historical-existence-detail/historical-existence-detail.component';
import { HistoricalExistenceComponent } from './historical-existence/historical-existence.component';
import { InformesRoutingModule } from './informes-routing.module';
import localeCl from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { StorageDataService } from './core/services/storage-data.service';

registerLocaleData(localeCl);
@NgModule({
  declarations: [HistoricalExistenceComponent, HistoricalExistenceDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    InformesRoutingModule, MatDatepickerModule, MatInputModule, MatNativeDateModule
  ],
  providers: [
    StorageDataService,
    { provide: MAT_DATE_LOCALE, useValue: 'es-CL' },
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ]
})
export class InformesModule { }
