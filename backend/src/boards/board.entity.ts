import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/auth/user.entity';

@Entity()
export class Board extends BaseEntity {
  // 게시판 고유 ID
  @PrimaryGeneratedColumn()
  id: number;

  // 게시판 제목
  @Column()
  title: string;

  // 게시판 설명
  @Column()
  description: string;

  // 게시판 상태 (공개/비공개 등)
  @Column()
  status: BoardStatus;

  // 게시판 작성자 (유저와 다대일 관계, 한 명의 유저가 여러 게시판을 작성할 수 있음)
  @ManyToOne(() => User, (user) => user.boards, { eager: false })
  user: User;
}
