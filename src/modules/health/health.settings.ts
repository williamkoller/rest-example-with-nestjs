import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './controllers/health.controller';

export const imports = [TerminusModule];

export const controllers = [HealthController];
