import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy as JwtStrategy } from 'passport-jwt';

import { AllConfigType } from '../../config/config.type';
import { TokenValidationHelper } from '../../helpers/token-validation.helper';
import { RefreshTokenPayload } from '../../token/interfaces/refresh-token-payload.interface';
import { extractJwtFromCookie } from '../../utils/cookie-extractor.util';

@Injectable()
export class RefreshStrategy extends PassportStrategy(JwtStrategy, 'refresh') {
  constructor(
    private readonly tokenValidationHelper: TokenValidationHelper,
    configService: ConfigService<AllConfigType>,
  ) {
    super({
      jwtFromRequest: extractJwtFromCookie('refresh_token'),
      secretOrKey: configService.get('token.refreshSecret', { infer: true }),
    });
  }

  // TODO: Replace return type any with User type later
  async validate(payload: RefreshTokenPayload): Promise<any | never> {
    return this.tokenValidationHelper.validatePayload(payload);
  }
}
