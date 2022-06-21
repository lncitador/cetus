import { Module } from '@nestjs/common';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { BullModule } from './bull/bull.module';
import { JwtModule } from './jwt/jwt.module';
import { LoggerModule } from './logger/logger.module';

@Module({
  imports: [LoggerModule, BullModule, JwtModule, BcryptModule],
  exports: [LoggerModule, BullModule, JwtModule, BcryptModule],
})
export class ServicesModule {}
