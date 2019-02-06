import { Component, OnInit } from '@angular/core';
import { CommonDataService } from '../core/services/common-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showForm = false;

  constructor(private commonData: CommonDataService, private route: ActivatedRoute) {
    this.commonData.serviceShowList.subscribe((data) => {
      this.showForm = data ? false : true;
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id !== undefined) {
        this.showForm = true;
      }
    });
  }

}
