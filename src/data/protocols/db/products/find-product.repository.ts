import { Product } from '@/modules/products/schemas/product.schema';

export interface FindNameProductRepository {
  findName: (name: string) => Promise<Product>;
}
