import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { MongoConfig } from './mongo.config';

@Module({
  imports: [NestConfigModule.forRoot({ isGlobal: true, load: [MongoConfig] })],
})
export class ConfigModule {}
