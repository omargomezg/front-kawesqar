import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';

import localeCl from '@angular/common/locales/es-CL';
import { registerLocaleData } from '@angular/common';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Ng2Rut, RutValidator } from 'ng2-rut';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layer/header/header.component';
import { GetExternalBaseComponent } from './components/get-external-base/get-external-base.component';
import { AllMaterialModule } from './material-module';
import { OnlyNumbersDirective } from './directives/only-numbers.directive';
import { EgresoComponent } from './components/egreso/egreso.component';
import { ModalEgresoComponent } from './components/modal-egreso/modal-egreso.component';
import { DialogComponent } from 'src/app/modules/factura/registrar/dialog.component';
import { ArticleService } from 'src/app/core/services/article.service';
import { SearchArticleComponent } from './components/search-article/search-article.component';
import { LoginComponent } from './components/login/login.component';
import { InvoiceDetailComponent } from './components/invoice-detail/invoice-detail.component';
import { InvoiceCancellationOrderComponent } from './components/invoice-cancellation-order/invoice-cancellation-order.component';
import { ShortcutNavComponent } from './components/shortcut-nav/shortcut-nav.component';
import { ShortcutNavService } from './core/services/shortcut-nav.service';
import { EditClientComponent } from './components/client/edit-client/edit-client.component';
import { ListClientsComponent } from './components/client/list-clients/list-clients.component';
import { ListProductsComponent } from './components/product/list-products/list-products.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { EditMeasureComponent } from './components/measure/edit-measure/edit-measure.component';
import { ListMeasureComponent } from './components/measure/list-measure/list-measure.component';

registerLocaleData(localeCl);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    GetExternalBaseComponent,
    OnlyNumbersDirective,
    EgresoComponent,
    ModalEgresoComponent,
    SearchArticleComponent,
    LoginComponent,
    InvoiceDetailComponent,
    InvoiceCancellationOrderComponent,
    ShortcutNavComponent,
    EditClientComponent,
    ListClientsComponent,
    ListProductsComponent,
    EditProductComponent,
    EditMeasureComponent,
    ListMeasureComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    Ng2Rut,
    AllMaterialModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [
    RutValidator,
    ArticleService,
    ShortcutNavService,
    { provide: LOCALE_ID, useValue: 'es-CL' }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalEgresoComponent]
})
export class AppModule { }
