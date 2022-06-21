import { DatabaseConfig } from '@shared/domain/config/database.interface';
import { RedisConfig } from '@shared/domain/config/redis.interface';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JWTConfig } from '@shared/domain/config/jwt.interface';

@Injectable()
export class EnvironmentConfigService
  implements JWTConfig, RedisConfig, DatabaseConfig
{
  constructor(private configService: ConfigService) {}

  public getDatabaseUrl(): string {
    console.log(this.configService.get<string>('DATABASE_URL'));
    return this.configService.get<string>('DATABASE_URL');
  }

  public getRedisHost(): string {
    return this.configService.get<string>('REDIS_HOST');
  }

  public getRedisPort(): number {
    return this.configService.get<number>('REDIS_PORT');
  }

  public getRedisUrl(): string {
    return this.configService.get<string>('REDIS_URL');
  }

  public getJwtSecret(): string {
    return this.configService.get<string>('JWT_SECRET');
  }

  public getJwtExpirationTime(): string {
    return this.configService.get<string>('JWT_EXPIRATION_TIME');
  }

  public getJwtRefreshSecret(): string {
    return this.configService.get<string>('JWT_REFRESH_SECRET');
  }

  public getJwtRefreshExpirationTime(): string {
    return this.configService.get<string>('JWT_REFRESH_EXPIRATION_TIME');
  }
}
