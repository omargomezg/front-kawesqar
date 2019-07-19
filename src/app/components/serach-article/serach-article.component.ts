import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../../core/services/article.service';
import {ShoppingCartDetailModel} from '../../core/models/request/shopping-cart-detail.model';
import {StorageDataService} from '../../core/services/storage-data.service';

@Component({
  selector: 'app-serach-article',
  templateUrl: './serach-article.component.html',
  styleUrls: ['./serach-article.component.css']
})
export class SerachArticleComponent implements OnInit {

  @ViewChild('sku', {static: true}) skuElement: ElementRef;
  @Output() DetailData = new EventEmitter();
  fmSearch: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ArticleService,
    private localStorage: StorageDataService) {
  }

  ngOnInit() {
    this.buildfrSearch();
  }

  loadProduct() {
    const data = this.fmSearch.value;
    console.log(JSON.stringify(data));
    this.service.getBySku(data.sku, data.isBulk, this.localStorage.getRutUser().replace('-', '')).subscribe(
      (res: any) => {
        if (Object.keys(res).length) {
          this.addDetail(res);
        }
      },
      error => {
        console.log('Something wrong here');
      });
  }

  setSearchFocus() {
    this.skuElement.nativeElement.focus();
  }

  private clearSearch() {
    this.fmSearch.reset();
    this.skuElement.nativeElement.focus();
  }

  private buildfrSearch() {
    this.fmSearch = new FormGroup({
      sku: new FormControl('', [Validators.required, Validators.minLength(3)]),
      isBulk: new FormControl(false)
    });
    this.skuElement.nativeElement.focus();
  }

  private addDetail(data: any) {
    const result: ShoppingCartDetailModel = new ShoppingCartDetailModel();
    result.id = data.idRegistro;
    result.quantity = data.Cant;
    result.description = data.Nombre;
    result.amount = data.ValorUnitario;
    result.cashDiscount = 0;
    result.quantity = 1;
    this.clearSearch();
    this.DetailData.emit(result);
  }
}
