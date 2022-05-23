import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { AddProductDto } from '@/modules/products/dtos/add-product/add-product.dto';
import { Product } from '@/modules/products/schemas/product.schema';
import { AddProductService } from '@/modules/products/services/add-product/add-product.service';
import { FindAllProductsService } from '@/modules/products/services/find-all-products/find-all-products.service';
import { DeleteProductService } from '@/modules/products/services/delete-product/delete-product.service';
import { FindProductByIdService } from '@/modules/products/services/find-product-by-id/find-product-by-id.service';
import { ProductType } from '../types/product.type';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly addProductService: AddProductService,
    private readonly findAllProductsService: FindAllProductsService,
    private readonly deleteProductService: DeleteProductService,
    private readonly findProductByIdService: FindProductByIdService,
  ) {}

  @Post('saveProduct')
  @HttpCode(HttpStatus.CREATED)
  async add(@Body() data: AddProductDto): Promise<Product> {
    return await this.addProductService.execute(data);
  }

  @Get('getProducts')
  @HttpCode(HttpStatus.OK)
  async findAll(): Promise<Product[]> {
    return await this.findAllProductsService.execute();
  }

  @Get('deleteProduct/:_id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('_id') _id: string): Promise<void> {
    await this.deleteProductService.execute(_id);
  }

  @Get('getProduct/:_id')
  @HttpCode(HttpStatus.OK)
  async findProductById(@Param('_id') _id: string): Promise<Product> {
    return await this.findProductByIdService.execute(_id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async addProduct(@Body() data: AddProductDto): Promise<Product> {
    return await this.addProductService.execute(data);
  }

  @Get(':_id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('_id') _id: string): Promise<ProductType> {
    const { name } = await this.findProductByIdService.execute(_id);
    const products = '/products';
    return {
      name,
      links: [
        {
          rel: 'self',
          href: products + `/${_id}`,
        },
        {
          rel: 'delete',
          href: products + `/${_id}`,
        },
      ],
    };
  }

  @Delete(':_id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteProduct(@Param('_id') _id: string): Promise<void> {
    await this.deleteProductService.execute(_id);
  }
}
