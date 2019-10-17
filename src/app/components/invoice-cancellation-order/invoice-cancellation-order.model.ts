export class InvoiceCancellationOrderModel {
  folio: number;
  created: Date;
  comment: string;
  user: User;
}
export class User {
  rut: string;
}
