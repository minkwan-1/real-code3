import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigService) => {
        const { uri, options } = configService.get('mongo');
        return { uri, ...options };
      },
      inject: [ConfigService],
    }),
    AuthModule,
  ],
})
export class AppModule {}
