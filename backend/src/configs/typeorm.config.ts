import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from 'src/boards/board.entity';
import { User } from 'src/auth/user.entity';

// TypeORM 설정
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres', // 사용할 데이터베이스 종류: PostgreSQL
  host: 'localhost', // 데이터베이스 호스트 (로컬에서 실행 중)
  port: 5432, // PostgreSQL의 기본 포트 (5432)
  username: 'postgres', // 데이터베이스에 접속할 사용자 이름
  password: 'postgres', // 데이터베이스 접속 비밀번호
  database: 'board-app', // 사용할 데이터베이스 이름

  // 데이터베이스 엔티티 설정: Board와 User 엔티티를 연결하여 해당 테이블을 관리
  entities: [Board, User],

  // 자동으로 데이터베이스 스키마를 엔티티에 맞게 동기화 (개발 환경에서만 사용 권장)
  synchronize: true, // true로 설정하면 애플리케이션 시작 시 자동으로 테이블이 동기화됨
};
