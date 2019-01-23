import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../../core/services/common-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  viewForm = true;

  constructor(private commonData: CommonDataService) {
    this.commonData.serviceShowList.subscribe((data) => {
      this.viewForm = data ? false : true;
    });
  }

  ngOnInit() {
  }

  cambiarVista() {
    this.viewForm = !this.viewForm;
  }

}
