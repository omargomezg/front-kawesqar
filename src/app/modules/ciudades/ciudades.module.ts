import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatFormFieldModule, MatInputModule } from '@angular/material';
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
