import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { AuthModule } from './auth/auth.module';

import { AppConfigModule } from './config/app/app-config.module';
import { GoogleConfigModule } from './config/google';
import { KakaoConfigModule } from './config/kakao';
import { NaverConfigModule } from './config/naver';
import { JwtConfigModule } from './config/jwt';

const configModules = [
  AppConfigModule,
  GoogleConfigModule,
  KakaoConfigModule,
  NaverConfigModule,
  JwtConfigModule,
];

@Module({
  imports: [...configModules, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
