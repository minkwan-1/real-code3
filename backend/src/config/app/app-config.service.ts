import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get nodeEnv(): string {
    return this.configService.get<string>('app.nodeEnv');
  }

  get name(): string {
    return this.configService.get<string>('app.name');
  }

  get workingDirectory(): string {
    return this.configService.get<string>('app.workingDirectory');
  }

  get frontendDomain(): string {
    return this.configService.get<string>('app.frontendDomain');
  }

  get backendDomain(): string {
    return this.configService.get<string>('app.backendDomain');
  }

  get port(): string {
    return this.configService.get<string>('app.port');
  }

  get apiPrefix(): string {
    return this.configService.get<string>('app.apiPrefix');
  }
}
