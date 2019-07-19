
export class ShoppingCartDetailModel {
  id: number;
  sku: string;
  idArticleID: number;
  description: string;
  quantity: number;
  amount: number;
  cashDiscount: number;
  total: number;
  bulk: boolean;
}
