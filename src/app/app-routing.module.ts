import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetExternalBaseComponent } from './components/get-external-base/get-external-base.component';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'base-url/:rut/:target', component: GetExternalBaseComponent },
    { path: 'medidas', loadChildren: './modules/medida/medida.module#MedidaModule' },
    { path: 'sucursales', loadChildren: './modules/sucursal/sucursal.module#SucursalModule' },
    { path: 'informes', loadChildren: './modules/informes/informes.module#InformesModule' },
    { path: 'usuarios', loadChildren: './modules/usuario/usuario.module#UsuarioModule' },
    { path: 'factura', loadChildren: './modules/factura/factura.module#FacturaModule' },
    { path: '**', redirectTo: 'home' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
