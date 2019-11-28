import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GetExternalBaseComponent } from './components/get-external-base/get-external-base.component';
import { EgresoComponent } from './components/egreso/egreso.component';
import { LoginComponent } from './components/login/login.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { InvoiceCancellationOrderComponent } from './components/invoice-cancellation-order/invoice-cancellation-order.component';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';
import { ListClientsComponent } from './components/client/list-clients/list-clients.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { EditMeasureComponent } from './components/measure/edit-measure/edit-measure.component';
import { ListMeasureComponent } from './components/measure/list-measure/list-measure.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'egreso', component: EgresoComponent },
  { path: 'invoice', component: InvoiceDetailComponent },
  { path: 'invoice-cancellation-order', component: InvoiceCancellationOrderComponent },
  { path: 'base-url/:rut/:target', component: GetExternalBaseComponent },
  { path: 'client/new', component: EditClientComponent },
  { path: 'client/edit/:rut', component: EditClientComponent },
  { path: 'client/show-all', component: ListClientsComponent },
  { path: 'product/show-all', component: ListProductsComponent },
  { path: 'product/edit/:id', component: EditProductComponent },
  { path: 'product/new', component: EditProductComponent },
  { path: 'measure/edit/:id', component: EditMeasureComponent },
  { path: 'measure/new', component: EditMeasureComponent },
  { path: 'measure/show-all', component: ListMeasureComponent },
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
