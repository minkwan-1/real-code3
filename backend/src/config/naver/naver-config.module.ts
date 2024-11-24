import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import naverConfig from 'src/auth-naver/config/naver.config';
import { NaverConfigService } from './naver-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [naverConfig],
    }),
  ],
  providers: [NaverConfigService],
  exports: [NaverConfigService],
})
export class NaverConfigModule {}
