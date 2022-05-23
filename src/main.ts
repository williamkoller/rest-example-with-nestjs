import { NestFactory } from '@nestjs/core';
import { ApplicationModule } from '@/modules/application/application.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const logger = new Logger('Main Application');

  const app = await NestFactory.create<NestExpressApplication>(
    ApplicationModule,
  );
  const config = app.get<ConfigService>(ConfigService);

  const port = config.get<string>('port');
  const nodeEnv = config.get<string>('nodeEnv');
  const appUrl = config.get<string>('appUrl');

  await app.listen(port, () => {
    logger.log(`server is running in ${nodeEnv} mode`);
    logger.log(`server accessing at ${appUrl}:${port}`);
  });
}
bootstrap();
