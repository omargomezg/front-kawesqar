import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetExternalBaseComponent } from './components/get-external-base/get-external-base.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'egreso', component: EgresoComponent },
    { path: 'base-url/:rut/:target', component: GetExternalBaseComponent },
    { path: 'medidas', loadChildren: () => import('./modules/medida/medida.module').then(m => m.MedidaModule) },
    { path: 'sucursales', loadChildren: () => import('./modules/sucursal/sucursal.module').then(m => m.SucursalModule) },
    { path: 'informes', loadChildren: () => import('./modules/informes/informes.module').then(m => m.InformesModule) },
    { path: 'usuarios', loadChildren: () => import('./modules/usuario/usuario.module').then(m => m.UsuarioModule) },
    { path: 'factura', loadChildren: () => import('./modules/factura/factura.module').then(m => m.FacturaModule) },
    { path: '**', redirectTo: 'home' }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule {
}
