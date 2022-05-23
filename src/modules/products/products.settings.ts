import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './controllers/products.controller';
import { ProductsRepository } from './repositories/products.repository';
import { Product, ProductSchema } from './schemas/product.schema';
import { AddProductService } from './services/add-product/add-product.service';
import { DeleteProductService } from './services/delete-product/delete-product.service';
import { FindAllProductsService } from './services/find-all-products/find-all-products.service';
import { FindProductByIdService } from './services/find-product-by-id/find-product-by-id.service';

export const imports = [
  MongooseModule.forFeature([
    {
      name: Product.name,
      schema: ProductSchema,
    },
  ]),
];

export const providers = [
  ProductsRepository,
  AddProductService,
  FindAllProductsService,
  DeleteProductService,
  FindProductByIdService,
];

export const controllers = [ProductsController];
