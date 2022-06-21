import { Module } from '@nestjs/common';
import { JwtModule as JWT, JwtModuleOptions } from '@nestjs/jwt';
import { EnvironmentModule } from '@shared/infrastructure/environment/environment.module';
import { EnvironmentConfigService } from '@shared/infrastructure/environment/environment.service';
import { JwtTokenService } from './jwt.service';

export const JwtModuleConfig = (
  config: EnvironmentConfigService,
): JwtModuleOptions => ({
  secret: config.getJwtSecret(),
  signOptions: {
    expiresIn: config.getJwtExpirationTime(),
  },
});

@Module({
  imports: [
    JWT.registerAsync({
      imports: [EnvironmentModule],
      inject: [EnvironmentConfigService],
      useFactory: JwtModuleConfig,
    }),
  ],
  providers: [JwtTokenService],
  exports: [JwtTokenService],
})
export class JwtModule {}
