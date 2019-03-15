import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'edit/:id', component: FormComponent },
    { path: 'new', component: FormComponent },
    { path: 'list', component: ListComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MedidaRoutingModule {
}
