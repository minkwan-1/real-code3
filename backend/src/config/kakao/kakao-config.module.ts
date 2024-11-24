import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import kakaoConfig from 'src/auth-kakao/config/kakao.config';
import { KakaoConfigService } from './kakao-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [kakaoConfig],
    }),
  ],
  providers: [KakaoConfigService],
  exports: [KakaoConfigService],
})
export class KakaoConfigModule {}
