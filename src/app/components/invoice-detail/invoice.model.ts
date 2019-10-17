export class InvoiceModel {
  folio: number;
  created: Date;
  client: Client;
  observation: string;
  detail: InvoiceDetail[];

  constructor(folio: number, created: Date, client: Client, observation: string, detail: InvoiceDetail[]) {
    this.folio = folio;
    this.created = created;
    this.client = client;
    this.observation = observation;
    this.detail = detail;
  }
}

export class InvoiceDetail {
  code: string;
  description: string;
  quantity: number;
  amount: number;
  total: number;

  constructor(code: string, description: string, quantity: number, amount: number, total: number) {
    this.code = code;
    this.description = description;
    this.quantity = quantity;
    this.amount = amount;
    this.total = total;
  }
}

export class Client {
  rut: string;
  fullName: string;

  constructor(rut: string, fullName: string) {
    this.rut = rut;
    this.fullName = fullName;
  }
}
