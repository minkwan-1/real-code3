import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

import { AuthService } from 'src/auth/auth.service';
import { CookieSettingHelper } from '../helpers/cookie-setting.helper';

import { SocialProfileDto } from '../auth/dto/social-profile.dto';
import { SocialProfile } from '../users/decorators/user.decorator';

@Controller('auth/google')
export class AuthGoogleController {
  constructor(
    private readonly authService: AuthService,
    private readonly cookieSettingHelper: CookieSettingHelper,
  ) {}

  @Get('login')
  @UseGuards(AuthGuard('google'))
  async googleAuthorize(): Promise<void> {}

  @Get('callback')
  @UseGuards(AuthGuard('google'))
  async googleCallback(
    @SocialProfile() socialProfileDto: SocialProfileDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<void> {
    const loginAuthDto =
      await this.authService.validateSocialLogin(socialProfileDto);
    this.cookieSettingHelper.setCookies(response, loginAuthDto);
    response.redirect(
      `http://localhost:5173/?token=${loginAuthDto.accessToken}`,
    );
  }
}
