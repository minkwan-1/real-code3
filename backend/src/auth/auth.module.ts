import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
@Module({
  imports: [
    // PassportModule을 설정하여 JWT 인증을 기본 전략으로 사용하도록 지정
    PassportModule.register({ defaultStrategy: 'jwt' }),

    // JwtModule을 설정하여 JWT 토큰을 생성하고, 만료 시간을 1시간으로 설정
    JwtModule.register({
      secret: 'Secret1234',
      signOptions: {
        expiresIn: 60 * 60,
      },
    }),

    // TypeOrmModule을 통해 User 엔티티를 사용하여 DB와 연동
    TypeOrmModule.forFeature([User]),
  ],

  // AuthController를 모듈에 등록
  controllers: [AuthController],

  // 인증 관련 로직을 처리하는 AuthService
  // DB 연동을 위한 UserRepository
  // JWT 인증 전략을 정의하는 JwtStrategy
  providers: [AuthService, UserRepository, JwtStrategy],

  // JwtStrategy를 다른 모듈에서도 사용할 수 있도록
  // PassportModule을 다른 모듈에서도 사용할 수 있도록
  exports: [JwtStrategy, PassportModule],
})
export class AuthModule {}
