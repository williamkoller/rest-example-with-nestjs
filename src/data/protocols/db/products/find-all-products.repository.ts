import { Product } from '@/modules/products/schemas/product.schema';

export interface FindAllProductsRepository {
  findAll: () => Promise<Product[]>;
}
