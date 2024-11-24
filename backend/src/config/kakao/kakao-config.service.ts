import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KakaoConfigService {
  constructor(private readonly configService: ConfigService) {}

  get clientId(): string {
    return this.configService.get<string>('kakao.clientId');
  }

  get clientSecret(): string {
    return this.configService.get<string>('kakao.clientSecret');
  }

  get tokenAPI(): string {
    return this.configService.get<string>('kakao.tokenAPI');
  }

  get userInfoAPI(): string {
    return this.configService.get<string>('kakao.userInfoAPI');
  }

  get redirectURI(): string {
    return this.configService.get<string>('kakao.redirectURI');
  }
}
