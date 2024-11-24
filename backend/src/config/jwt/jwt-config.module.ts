import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import tokenConfig from 'src/token/config/token.config';
import { JwtConfigService } from './jwt-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [tokenConfig],
    }),
  ],
  providers: [JwtConfigService],
  exports: [JwtConfigService],
})
export class JwtConfigModule {}
