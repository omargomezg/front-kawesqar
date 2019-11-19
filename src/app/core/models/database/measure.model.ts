import {ProductModel} from './product.model';

export class MeasureModel {

  id: number;
  name: string;
  nomPlural: string | null;
  lastupdate: Date;
  products: ProductModel[];
  articuloss2: ProductModel[];

}
