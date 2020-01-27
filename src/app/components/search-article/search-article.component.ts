import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { ArticleService } from "../../core/services/article.service";
import { ShoppingCartDetailModel } from "../../core/models/request/shopping-cart-detail.model";
import { StorageDataService } from "../../core/services/storage-data.service";

@Component({
  selector: "app-search-article",
  templateUrl: "./search-article.component.html",
  styleUrls: ["./search-article.component.css"]
})
export class SearchArticleComponent implements OnInit {
  @ViewChild("sku", { static: true }) skuElement: ElementRef;
  @Output() DetailData = new EventEmitter();
  searchText = "";

  constructor(
    private formBuilder: FormBuilder,
    private service: ArticleService,
    private localStorage: StorageDataService
  ) {}

  ngOnInit() {}

  loadProduct() {
    if (this.searchText) {
      this.service
        .getBySku(
          this.searchText,
          false,
          this.localStorage.getRutUser().replace("-", "")
        )
        .subscribe(
          (res: any) => {
            if (Object.keys(res).length) {
              this.addDetail(res);
            }
          },
          error => {
            console.log("Something wrong here");
          }
        );
    }
  }

  setSearchFocus() {
    this.skuElement.nativeElement.focus();
  }

  private clearSearch() {
    this.searchText = "";
    this.skuElement.nativeElement.focus();
  }

  private addDetail(data: any) {
    const result: ShoppingCartDetailModel = new ShoppingCartDetailModel();
    result.id = data.idRegistro;
    result.quantity = data.Cant;
    result.description = data.Nombre;
    result.amount = data.ValorUnitario;
    result.cashDiscount = 0;
    result.sku = this.searchText;
    result.bulk = false;
    result.total = data.ValorUnitario * data.Cant;
    this.clearSearch();
    this.DetailData.emit(result);
  }
}
