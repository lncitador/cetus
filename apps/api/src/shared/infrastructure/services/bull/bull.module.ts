import { Module } from '@nestjs/common';
import { BullModule as Bull } from '@nestjs/bull';
import { EnvironmentConfigService } from '@shared/infrastructure/environment/environment.service';
import { EnvironmentModule } from '@shared/infrastructure/environment/environment.module';

export const BullModuleConfig = (config: EnvironmentConfigService) => ({
  redis: {
    host: config.getRedisHost(),
    port: config.getRedisPort(),
  },
});

@Module({
  imports: [
    Bull.forRootAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentConfigService],
      useFactory: BullModuleConfig,
    }),
  ],
})
export class BullModule {}
