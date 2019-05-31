import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { ListUsersComponent } from './list-users/list-users.component';

const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: FormComponent },
    { path: 'edit/:rut', component: FormComponent },
    { path: 'list', component: ListUsersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsuarioRoutingModules {
}
