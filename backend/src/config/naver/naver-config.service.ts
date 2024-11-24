import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class NaverConfigService {
  constructor(private readonly configService: ConfigService) {}

  get clientId(): string {
    return this.configService.get<string>('naver.clientId');
  }

  get clientSecret(): string {
    return this.configService.get<string>('naver.clientSecret');
  }

  get tokenAPI(): string {
    return this.configService.get<string>('naver.tokenAPI');
  }

  get userInfoAPI(): string {
    return this.configService.get<string>('naver.userInfoAPI');
  }

  get redirectURI(): string {
    return this.configService.get<string>('naver.redirectURI');
  }
}
