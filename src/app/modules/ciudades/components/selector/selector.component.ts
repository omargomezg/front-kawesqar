import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { CiudadService } from '../../core/services/ciudades.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { CiudadesModule } from '../../ciudades.module';
import { CiudadModel } from '../../core/models/ciudad.model';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css']
})
export class SelectorComponent implements OnInit {
  @Output() valueChange = new EventEmitter<CiudadModel>();
  myControl = new FormControl();
  ciudades: CiudadModel[];
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  @Input()
  set nameCity(nameCity: string) {
    if (nameCity && this.ciudades) {
      this.myControl.setValue(this.getCiudad(nameCity).nombre);
    } else {
      this.serCiudad.getCiudades()
        .subscribe(data => {
          data.forEach(element => {
            this.options.push(element.nombre);
          });
          this.ciudades = data;
          this.myControl.setValue(this.getCiudad(nameCity).nombre);
        }, error => {
          console.log('ouch!' + error.status);
        });
    }
  }

  constructor(private serCiudad: CiudadService) {
    this.getCiudades();
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    const ciudad = this.getCiudad(event.option.value);
    this.valueChange.emit(ciudad);

  }

  changedValue(event: any) {
    const ciudad = this.getCiudad(event.target.value);
    this.myControl.setValue(ciudad.nombre);
  }

  getCiudad(nombre: string): CiudadModel {
    const ciudad: CiudadModel = this.ciudades.find(item => item.nombre === nombre);

    return ciudad ? ciudad : new CiudadModel();
  }

  getCiudades() {
    this.serCiudad.getCiudades()
      .subscribe(data => {
        data.forEach(element => {
          this.options.push(element.nombre);
        });
        this.ciudades = data;
      }, error => {
        console.log('ouch!' + error.status);
      });
  }

}
