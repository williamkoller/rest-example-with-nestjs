import { Module } from '@nestjs/common';
import { imports, controllers } from './health.settings';

@Module({
  imports,
  controllers,
})
export class HealthModule {}
