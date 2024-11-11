import { Post, Body, UseGuards } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import { ValidationPipe } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from './get-user.decorator';
import { User } from './user.entity';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  // sign-up을 처리하는 메서드
  // 요청 본문에서 AuthCredentialDto를 받고, ValidationPipe를 통해 validation 수행
  // authService의 세부 로직에서 회원가입을 처리
  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<void> {
    return this.authService.signUp(authCredentialDto);
  }

  // sign-in을 처리하는 메서드
  // 요청 본문에서 AuthCredentialDto를 받고, ValidationPipe를 통해 validation 수행
  // authService의 세부 로직에서 로그인을 처리
  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    return this.authService.signIn(authCredentialDto);
  }

  // 인증된 사용자만 접근할 수 있는 테스트 메서드
  // AuthGuard를 사용하여 인증된 사용자만 접근 허용
  @Post('/authTest')
  @UseGuards(AuthGuard())
  test(@GetUser() user: User) {
    console.log('user', user);
  }
}
