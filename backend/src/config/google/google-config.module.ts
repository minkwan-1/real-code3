import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import googleConfig from 'src/auth-google/config/google.config';
import { GoogleConfigService } from './google-config.service';
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [googleConfig],
    }),
  ],
  providers: [GoogleConfigService],
  exports: [GoogleConfigService],
})
export class GoogleConfigModule {}
