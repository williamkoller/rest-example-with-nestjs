import { AddProductDto } from '@/modules/products/dtos/add-product/add-product.dto';
import { Product } from '@/modules/products/schemas/product.schema';

export interface AddProductRepository {
  add: (data: AddProductDto) => Promise<Product>;
}
