import { Module } from '@nestjs/common';
import { imports, providers, controllers } from './products.settings';

@Module({
  imports,
  providers,
  controllers,
})
export class ProductsModule {}
