import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SelectorComponent } from './components/selector/selector.component';

@NgModule({
  declarations: [SelectorComponent],
  imports: [
    CommonModule, FormsModule, ReactiveFormsModule,
    MatAutocompleteModule, MatFormFieldModule, MatInputModule
  ],
  exports: [SelectorComponent]
})
export class CiudadesModule { }
