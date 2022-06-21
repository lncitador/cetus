import { LoggerService } from '@shared/infrastructure/services/logger/logger.service';
import {
  INestApplication,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { EnvironmentConfigService } from '@shared/infrastructure/environment/environment.service';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor(
    private readonly config: EnvironmentConfigService,
    private readonly loggerService: LoggerService,
  ) {
    super({
      log: [
        {
          emit: 'event',
          level: 'query',
        },
      ],
      datasources: {
        db: { url: config.getDatabaseUrl() },
      },
    });
  }

  public async onModuleInit() {
    await this.$connect();

    this.$on('query' as any, async (e: any) => {
      this.loggerService.debug('PrismaService', `(${e.duration}ms) ${e.query}`);
    });
  }

  public async onModuleDestroy() {
    await this.$disconnect();
  }

  public async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }
}
