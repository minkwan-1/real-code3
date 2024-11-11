import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

// 사용자 인증 정보에 대한 Data Transfer Object(DTO)
// class-validator를 통해 유효성 검사 진행
export class AuthCredentialDto {
  // username validation
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  // password validation
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: 'Password only accepts English and Number.',
  })
  password: string;
}
