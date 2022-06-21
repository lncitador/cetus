import { Global, Module } from '@nestjs/common';
import { InfrastructureModule } from './shared/infrastructure/infrastructure.module';

@Global()
@Module({
  imports: [InfrastructureModule],
  exports: [InfrastructureModule],
})
export class AppModule {}
