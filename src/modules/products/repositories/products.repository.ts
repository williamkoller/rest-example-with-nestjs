import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  Product,
  ProductDocument,
} from '@/modules/products/schemas/product.schema';
import {
  AddProductRepository,
  FindNameProductRepository,
  FindAllProductsRepository,
  DeleteProductRepository,
  FindProductByIdRepository,
} from '@/data/protocols/db/products';
import { AddProductDto } from '@/modules/products/dtos/add-product/add-product.dto';
import { propertyMongodbFalse } from '@/utils/property-mongodb-false';

export class ProductsRepository
  implements
    AddProductRepository,
    FindNameProductRepository,
    FindAllProductsRepository,
    DeleteProductRepository,
    FindProductByIdRepository
{
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<ProductDocument>,
  ) {}

  async add(data: AddProductDto): Promise<Product> {
    const productCreated = new this.productModel(data, propertyMongodbFalse);
    return productCreated.save();
  }

  async findName(name: string): Promise<Product> {
    return await this.productModel.findOne(
      { name: { $eq: name } },
      propertyMongodbFalse,
    );
  }

  async findAll(): Promise<Product[]> {
    return await this.productModel.find({}, propertyMongodbFalse);
  }

  async delete(_id: string): Promise<void> {
    await this.productModel.deleteOne({ _id: { $eq: _id } });
  }

  async findById(_id: string): Promise<Product> {
    return await this.productModel.findOne(
      {
        _id: { $eq: _id },
      },
      propertyMongodbFalse,
    );
  }
}
