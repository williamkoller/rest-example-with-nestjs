import { Module } from '@nestjs/common';
import { imports } from './application.settings';

@Module({
  imports,
})
export class ApplicationModule {}
