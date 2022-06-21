import { Module } from '@nestjs/common';
import { EnvironmentModule } from './environment/environment.module';
import { PrismaModule } from './persistence/prisma/prisma.module';
import { ServicesModule } from './services/services.module';

@Module({
  imports: [EnvironmentModule, ServicesModule, PrismaModule],
  exports: [EnvironmentModule, ServicesModule, PrismaModule],
})
export class InfrastructureModule {}
