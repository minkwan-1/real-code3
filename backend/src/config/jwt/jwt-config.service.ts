import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtConfigService {
  constructor(private readonly configService: ConfigService) {}

  get accessTokenLifeTime(): string {
    return this.configService.get<string>('app.accessTokenLifeTime');
  }

  get refreshTokenLifeTime(): string {
    return this.configService.get<string>('app.refreshTokenLifeTime');
  }

  get accessSecret(): string {
    return this.configService.get<string>('app.accessSecret');
  }

  get refreshSecret(): string {
    return this.configService.get<string>('app.refreshSecret');
  }
}
