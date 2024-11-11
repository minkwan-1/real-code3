// DTO (Data Transfer Object)는 API 요청과 응답을 위한 데이터를 구조화하는 객체로, 주로 클라이언트와 서버 간의 데이터 교환에 사용됨. DTO는 데이터 검증을 위해 class-validator와 같은 라이브러리를 사용할 수 있으며, 주로 요청 처리 시 사용됨.

// DTO는 서버와 클라이언트 간의 데이터 전송을 위해 설계

// Entity는 데이터베이스와 직접 연결되는 객체. TypeORM 엔티티는 데이터베이스 테이블을 나타내며, CRUD 작업을 처리하는 데 사용됨. 엔티티는 데이터베이스의 구조를 반영하고, ORM을 통해 데이터베이스와 상호작용함.

// Entity는 데이터베이스와의 상호작용을 위해 설계

import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { Board } from 'src/boards/board.entity';

@Entity()
@Unique(['username']) // username에 유니크 제약을 추가하여 중복된 사용자명을 허용하지 않음
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number; // 사용자 고유 ID, 자동 증가

  @Column()
  username: string; // 사용자 이름

  @Column()
  password: string; // 사용자 비밀번호

  // User와 Board 간의 일대다 관계 설정 (한 사용자는 여러 게시글을 작성할 수 있음)
  @OneToMany(() => Board, (board) => board.user, { eager: true })
  boards: Board[]; // 사용자가 작성한 게시글을 가져오는 관계 설정. eager: true로 설정하면 사용자 정보를 불러올 때 게시글도 함께 조회됨.
}
