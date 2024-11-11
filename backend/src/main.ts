import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const serverConfig = config.get('server');
  const port = serverConfig.port;
  await app.listen(3000);
  logger.log(`Application running on ${port}`);
}
bootstrap();
