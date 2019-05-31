import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-existence',
  templateUrl: './existence.component.html',
  styleUrls: ['./existence.component.css']
})
export class ExistenceComponent implements OnInit {
 
  data = [
    {selected: false, nombre: "Lapiz BIC azul", codigo:"1546848988", cantidad: 12, unitario: 2500},
    {selected: true, nombre: "Lapiz BIC rojo", codigo:"1546848978", cantidad: 154, unitario: 500}
  ];
  total: number;
  constructor() { }

  ngOnInit() {
    this.total = this.data.reduce((sum, item) => sum + (item.cantidad + item.unitario), 0)
  }

  selectAll(e) {
    this.data.forEach(item => {
      item.selected = e.target.checked;
    });
  }

}
