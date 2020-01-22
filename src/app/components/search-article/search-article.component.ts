import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ArticleService} from '../../core/services/article.service';
import {ShoppingCartDetailModel} from '../../core/models/request/shopping-cart-detail.model';
import {StorageDataService} from '../../core/services/storage-data.service';

@Component({
  selector: 'app-search-article',
  templateUrl: './search-article.component.html',
  styleUrls: ['./search-article.component.css']
})
export class SearchArticleComponent implements OnInit {

  @ViewChild('sku', {static: true}) skuElement: ElementRef;
  @Output() DetailData = new EventEmitter();
  fmSearch: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: ArticleService,
    private localStorage: StorageDataService) {
  }

  ngOnInit() {
    this.buildFormSearch();
  }

  loadProduct() {
    const data = this.fmSearch.value;
    this.service.getBySku(data.sku, !data.isBulk, this.localStorage.getRutUser().replace('-', '')).subscribe(
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

  private buildFormSearch() {
    this.fmSearch = new FormGroup({
      sku: new FormControl('', [Validators.required, Validators.minLength(3)]),
      isBulk: new FormControl(false)
    });
    this.skuElement.nativeElement.focus();
  }

  private addDetail(data: any) {
    const frm = this.fmSearch.value;
    const result: ShoppingCartDetailModel = new ShoppingCartDetailModel();
    result.id = data.idRegistro;
    result.quantity = data.Cant;
    result.description = data.Nombre;
    result.amount = data.ValorUnitario;
    result.cashDiscount = 0;
    result.sku = frm.sku;
    result.bulk = !frm.isBulk;
    result.total = data.ValorUnitario * data.Cant;
    this.clearSearch();
    this.DetailData.emit(result);
  }
}
