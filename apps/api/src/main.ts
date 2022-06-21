import { AllExceptionFilter } from '@shared/infrastructure/common/filter/exception.filter';
import { LoggingInterceptor } from '@shared/infrastructure/common/interceptors/logger.interceptor';
import { PrismaService } from '@shared/infrastructure/persistence/prisma/prisma.service';
import { LoggerService } from '@shared/infrastructure/services/logger/logger.service';
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { useContainer } from 'class-validator';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3333);

  const prismaService: PrismaService = app.get(PrismaService);
  await prismaService.enableShutdownHooks(app);

  useContainer(app.select(AppModule), { fallbackOnErrors: true });

  // pipes
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      errorHttpStatusCode: 422,
      transform: true,
    }),
  );

  app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

  app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
}

bootstrap();
