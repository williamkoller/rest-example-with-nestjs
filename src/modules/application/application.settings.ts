import envFolderPath, { envs } from '@/config/env';
import { forwardRef } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthModule } from '@/modules/health/health.module';
import { ProductsModule } from '@/modules/products/products.module';

export const imports = [
  ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: envFolderPath.folderPath,
    load: [envs],
  }),
  MongooseModule.forRootAsync({
    imports: [ConfigModule],
    inject: [ConfigService],
    useFactory: async (config: ConfigService) => ({
      uri: config.get<string>('mongoUri'),
    }),
  }),
  forwardRef(() => HealthModule),
  forwardRef(() => ProductsModule),
];
