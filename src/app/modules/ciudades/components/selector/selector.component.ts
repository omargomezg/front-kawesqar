import { Component, EventEmitter, OnInit, Output, Input } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";
import { map, startWith } from "rxjs/operators";
import { CiudadService } from "../../core/services/ciudades.service";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { Commune } from "kawesqar-class-model";

@Component({
  selector: "app-selector",
  templateUrl: "./selector.component.html",
  styleUrls: ["./selector.component.css"]
})
export class SelectorComponent implements OnInit {
  @Output() valueChange = new EventEmitter<Commune>();
  myControl = new FormControl();
  ciudades: Commune[];
  options: string[] = [];
  filteredOptions: Observable<string[]>;
  @Input()
  set nameCity(nameCity: string) {
    if (nameCity && this.ciudades) {
      this.myControl.setValue(this.getCiudad(nameCity).name);
    } else {
      this.communeService.getCiudades().subscribe(
        data => {
          data.forEach(element => {
            this.options.push(element.name);
          });
          this.ciudades = data;
          this.myControl.setValue(this.getCiudad(nameCity).name);
        },
        error => {
          console.log("ouch!" + error.status);
        }
      );
    }
  }

  constructor(private communeService: CiudadService) {
    this.getCiudades();
  }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    if (value) {
      const filterValue = value.toLowerCase();
      return this.options.filter(option =>
        option.toLowerCase().includes(filterValue)
      );
    }
  }

  onSelectionChanged(event: MatAutocompleteSelectedEvent) {
    const ciudad = this.getCiudad(event.option.value);
    this.valueChange.emit(ciudad);
  }

  changedValue(event: any) {
    const ciudad = this.getCiudad(event.target.value);
    this.myControl.setValue(ciudad.name);
  }

  getCiudad(nombre: string): Commune {
    const ciudad: Commune = this.ciudades.find(item => item.name === nombre);

    return ciudad ? ciudad : new Commune();
  }

  getCiudades() {
    this.communeService.getCiudades().subscribe(
      data => {
        data.forEach(element => {
          this.options.push(element.name);
        });
        this.ciudades = data;
      },
      error => {
        console.log("ouch!" + error.status);
      }
    );
  }
}
