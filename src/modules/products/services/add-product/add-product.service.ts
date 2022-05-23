import { ProductsRepository } from '@/modules/products/repositories/products.repository';
import { ConflictException, Injectable } from '@nestjs/common';
import { AddProductDto } from '@/modules/products/dtos/add-product/add-product.dto';
import { Product } from '@/modules/products/schemas/product.schema';

@Injectable()
export class AddProductService {
  constructor(private readonly productsRepo: ProductsRepository) {}

  async execute(data: AddProductDto): Promise<Product> {
    const productFound = await this.productsRepo.findName(data.name);

    if (productFound) {
      throw new ConflictException('this name already exists.');
    }

    return await this.productsRepo.add(data);
  }
}
