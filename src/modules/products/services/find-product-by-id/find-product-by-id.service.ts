import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from '@/modules/products/repositories/products.repository';
import { Product } from '@/modules/products/schemas/product.schema';

@Injectable()
export class FindProductByIdService {
  constructor(private readonly productsRepo: ProductsRepository) {}

  async execute(_id: string): Promise<Product> {
    const productFound = await this.productsRepo.findById(_id);

    if (!productFound) {
      throw new NotFoundException('product not found');
    }

    return productFound;
  }
}
