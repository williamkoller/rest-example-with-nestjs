import { Injectable, NotFoundException } from '@nestjs/common';
import { ProductsRepository } from '../../repositories/products.repository';

@Injectable()
export class DeleteProductService {
  constructor(private readonly productsRepo: ProductsRepository) {}

  async execute(_id: string): Promise<void> {
    const productFound = await this.productsRepo.findById(_id);

    if (!productFound) {
      throw new NotFoundException('product not found.');
    }

    await this.productsRepo.delete(productFound._id);
  }
}
