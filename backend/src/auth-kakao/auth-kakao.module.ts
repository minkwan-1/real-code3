import { HttpModule } from '@nestjs/axios'; // HTTP 요청 처리를 위한 HttpModule
import { Module } from '@nestjs/common'; // NestJS 모듈을 정의하기 위한 데코레이터와 클래스

import { ConfigModule } from '@nestjs/config'; // 설정값 관리 및 환경변수 처리를 위한 ConfigModule

import { AuthKakaoController } from './auth-kakao.controller'; // Kakao OAuth 관련 요청을 처리

import { KakaoStrategy } from '../auth-kakao/strategies/kakao.strategy'; // Kakao OAuth 인증 전략을 정의한 KakaoStrategy

import { AuthModule } from '../auth/auth.module'; // 인증 로직이 정의된 AuthModule

@Module({
  imports: [
    HttpModule, // Kakao OAuth API와 통신, HTTP 요청 처리를 위한 HttpModule
    ConfigModule, // Kakao OAuth 설정값을 관리하기 위한 ConfigModule
    AuthModule, // 인증 모듈과 통합하여 인증 관련 기능을 활용
  ],
  controllers: [AuthKakaoController], // Kakao OAuth 관련 요청을 처리할 컨트롤러를 지정
  providers: [KakaoStrategy], // Kakao 인증 전략을 NestJS DI 컨테이너에 등록
})
export class AuthKakaoModule {}
