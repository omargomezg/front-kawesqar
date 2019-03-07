import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalExistenceComponent } from './historical-existence/historical-existence.component';
import { HistoricalExistenceDetailComponent } from './historical-existence-detail/historical-existence-detail.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HistoricalExistenceComponent },
    { path: 'home/:fecha1/:fecha2', component: HistoricalExistenceComponent },
    { path: 'detalle/:bodega/:sucursal', component: HistoricalExistenceDetailComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InformesRoutingModule { }
