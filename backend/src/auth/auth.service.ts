import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    // UserRepository를 주입하여 사용자 데이터베이스 관련 작업을 처리
    private userRepository: UserRepository,
    // JwtService를 주입하여 JWT 토큰 발급을 처리
    private jwtService: JwtService,
  ) {}

  // 회원가입 처리 메서드
  async signUp(authCredentialDto: AuthCredentialDto): Promise<void> {
    // 전달된 인증 정보로 사용자를 생성하는 메서드 호출
    return this.userRepository.createUser(authCredentialDto);
  }

  // 로그인 처리 메서드
  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { username, password } = authCredentialDto;

    // 사용자명으로 사용자를 DB에서 찾음
    const user = await this.userRepository.findOneBy({ username });

    // 사용자 존재 여부와 비밀번호 확인
    if (user && (await bcrypt.compare(password, user.password))) {
      // 사용자 인증 성공 시, 페이로드(payload) 생성 (여기서는 사용자명만 포함)
      const payload = { username };

      // JWT 토큰 생성
      const accessToken = await this.jwtService.sign(payload);

      // JWT 토큰 반환
      return { accessToken };
    } else {
      // 로그인 실패 시 UnauthorizedException 예외 발생
      throw new UnauthorizedException('login failed');
    }
  }
}
