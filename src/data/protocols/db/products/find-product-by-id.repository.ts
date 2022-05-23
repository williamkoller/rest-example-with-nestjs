import { Product } from '@/modules/products/schemas/product.schema';

export interface FindProductByIdRepository {
  findById: (_id: string) => Promise<Product>;
}
