import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StorageDataService } from 'src/app/core/services/storage-data.service';

@Component({
  selector: 'app-get-external-base',
  templateUrl: './get-external-base.component.html',
  styleUrls: ['./get-external-base.component.css']
})
export class GetExternalBaseComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private localStorage: StorageDataService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.rut !== undefined && params.target !== undefined) {
        const url = <string>params.target;
        this.localStorage.setRutUser(params.rut);
        this.router.navigate([this.getUrl(url)]);
      }
    });
  }

  getUrl(url: string): string {
    const tokens = url.split('+');
    return tokens.join('/');
  }

}
