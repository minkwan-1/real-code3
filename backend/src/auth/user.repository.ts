import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { AuthCredentialDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';

@Injectable()
// UserRepository 클래스는 TypeORM의 Repository를 확장하여 사용자 관련 비즈니스 로직을 처리
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    // User 엔티티를 관리하는 EntityManager를 생성하여 Repository 초기화
    super(User, dataSource.createEntityManager());
  }

  // 새로운 사용자 생성 메서드
  async createUser(authCredentialDto: AuthCredentialDto): Promise<void> {
    const { username, password } = authCredentialDto;

    // bcrypt를 사용하여 비밀번호를 암호화
    const salt = await bcrypt.genSalt(); // salt 생성
    const hashedPassword = await bcrypt.hash(password, salt); // 비밀번호를 해시화

    // User 객체 생성
    const user = this.create({ username, password: hashedPassword });

    try {
      // 생성된 사용자 정보를 데이터베이스에 저장
      await this.save(user);
    } catch (error) {
      // 예외 처리: 사용자명 중복시 ConflictException 발생
      if (error.code === '23505') {
        // 중복 사용자명 오류 (PostgreSQL의 오류 코드)
        throw new ConflictException('Existing username'); // 기존 사용자명이 있을 경우
      } else {
        // 그 외 오류는 내부 서버 오류로 처리
        throw new InternalServerErrorException();
      }
    }
  }
}
