import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'medidas', loadChildren: './modules/medida/medida.module#MedidaModule' },
    { path: 'sucursales', loadChildren: './modules/sucursal/sucursal.module#SucursalModule' }
    // { path: '**', redirectTo: 'home' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
