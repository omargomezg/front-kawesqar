import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existence',
  templateUrl: './existence.component.html',
  styleUrls: ['./existence.component.css']
})
export class ExistenceComponent implements OnInit {
 
  data = [{selected: false, nombre: "Lapiz BIC azul", codigo:"1546848988",}];
  constructor() { }

  ngOnInit() {
  }

}
