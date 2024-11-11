import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { InjectRepository } from '@nestjs/typeorm';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserRepository } from './user.repository';
import { User } from './user.entity';

@Injectable()
// PassportStrategy를 확장하여 JWT 인증 전략을 구현하는 클래스
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    // UserRepository를 주입하여 JWT 검증 시 사용자 데이터를 DB에서 확인
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {
    // PassportStrategy의 super()를 호출하여 JWT 인증 전략 설정
    super({
      secretOrKey: 'Secret1234', // JWT 서명에 사용할 비밀 키
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // 요청 헤더에서 Bearer 토큰을 추출
    });
  }

  // JWT payload를 검증하고 사용자 데이터를 반환하는 메서드
  async validate(payload) {
    const { username } = payload; // payload에서 username 추출
    // username을 기반으로 사용자 정보를 DB에서 조회
    const user: User = await this.userRepository.findOneBy({ username });

    // 사용자 정보가 없으면 UnauthorizedException 예외를 발생시킴
    if (!user) {
      throw new UnauthorizedException();
    }

    // 사용자 정보를 반환하여, 이후 요청에서 인증된 사용자로 사용
    return user;
  }
}
