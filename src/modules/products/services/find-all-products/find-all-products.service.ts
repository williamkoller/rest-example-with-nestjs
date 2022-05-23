import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from '@/modules/products/repositories/products.repository';
import { Product } from '@/modules/products/schemas/product.schema';

@Injectable()
export class FindAllProductsService {
  constructor(private readonly productsRepo: ProductsRepository) {}

  async execute(): Promise<Product[]> {
    const products = await this.productsRepo.findAll();

    if (!products.length) {
      throw new NotFoundException('No record found.');
    }

    return products;
  }
}
