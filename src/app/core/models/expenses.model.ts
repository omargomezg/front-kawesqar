export class ExpensesModel {
    sku: string;
    id: number;
    quantity: number;
    description: string;
    amount: number;
    cashDiscount: number;
    available: number;
    user: UserModel;
}

export class UserModel {
  rut: string;
}
