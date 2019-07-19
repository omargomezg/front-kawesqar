import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {MenuService} from '../../core/services/menu.service';
import {MenuModel} from '../../core/models/menu.models';
import {StorageDataService} from '../../core/services/storage-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  menu: MenuModel[];
  raiz = {
    nombre: '',
    backId: 0,
    mostrar: false
  };

  constructor(private router: Router,
              private servMenu: MenuService,
              private localStorage: StorageDataService) {
  }

  ngOnInit() {
    this.getData(-1, '');
  }

  abrirUrl(url: string, id: number, nombre: string) {
    if (url.includes('~/Default.aspx?padre=')) {
      this.getData(Number(url.replace('~/Default.aspx?padre=', '')), nombre);
    } else if (url.includes('my-app')) {
      this.router.navigate([url.replace('~/my-app', '')]);
    } else {
      window.open(`${this.router.url}${url.replace('~', '')}`, '_self');
    }
  }

  getData(id: number, nombre: string) {
    this.servMenu.getMenu(id, this.localStorage.getRutUser())
      .subscribe(
        data => {
          if (data.length > 0) {
            this.menu = data;
            this.raiz.backId = data[0].parent;
            this.raiz.nombre = nombre;
            this.raiz.mostrar = data[0].idParent !== -1;
          }
        },
        error => {
          console.log('ouch!' + error.status);
        }
      );
  }

  goBack(backId: number, nombre: string) {
    this.getData(backId, nombre);
  }

}
