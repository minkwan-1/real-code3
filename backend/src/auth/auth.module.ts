import { Module } from '@nestjs/common'; // NestJS의 모듈 데코레이터

import { AuthController } from './auth.controller'; // 인증 관련 요청을 처리하는 AuthController
import { AuthService } from './auth.service'; // 인증 비즈니스 로직을 처리하는 AuthService
import { CookieSettingHelper } from '../helpers/cookie-setting.helper'; // 쿠키 설정을 돕는 헬퍼 클래스
import { UserTokenService } from '../userToken/userToken.service'; // 사용자 토큰 관련 로직을 처리하는 서비스
import { UsersService } from '../users/users.module'; // 사용자 정보를 처리하는 서비스

import { AuthStrategy } from './strategies/auth.strategy'; // 인증 전략을 정의한 AuthStrategy
import { RefreshStrategy } from './strategies/refresh.strategy'; // 리프레시 토큰 전략을 정의한 RefreshStrategy

import { TokenValidationHelper } from '../helpers/token-validation.helper'; // 토큰 유효성 검사를 돕는 헬퍼 클래스
import { TokenModule } from '../token/token.module'; // 토큰 관련 모듈

@Module({
  imports: [TokenModule], // 이 모듈에서 사용할 TokenModule
  controllers: [AuthController], // 인증 요청을 처리할 컨트롤러
  providers: [
    UsersService,
    AuthService,
    UserTokenService, // 사용자 토큰 관리 로직
    CookieSettingHelper, // 쿠키 설정 관련 헬퍼 클래스
    TokenValidationHelper, // 토큰 유효성 검사 관련 헬퍼 클래스
    AuthStrategy, // 기본 인증 전략
    RefreshStrategy, // 리프레시 토큰 전략
  ],
  exports: [AuthService, CookieSettingHelper], // AuthService와 CookieSettingHelper를 다른 모듈에서 사용할 수 있도록 export
})
export class AuthModule {}
