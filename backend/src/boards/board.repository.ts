// board.repository.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  // 게시판 생성 메서드
  async createBoard(
    createBoardDto: CreateBoardDto, // 게시판 생성에 필요한 데이터
    user: User, // 게시판 작성자 (User 객체)
  ): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title, // 게시판 제목
      description, // 게시판 설명
      status: BoardStatus.PUBLIC, // 기본 상태를 PUBLIC으로 설정
      user, // 게시판 작성자
    });

    await this.save(board); // 게시판을 DB에 저장
    return board;
  }

  // 게시판 ID로 특정 게시판을 찾는 메서드
  async findBoardById(id: number): Promise<Board> {
    const found = await this.findOne({ where: { id } });
    if (!found) {
      // 게시판이 존재하지 않으면 예외를 발생시킴
      throw new NotFoundException(`Can't find Board with id: ${id}`);
    }
    return found; // 찾은 게시판 반환
  }

  // 게시판 삭제 메서드
  async deleteBoard(id: number, user: User): Promise<void> {
    const result = await this.delete({ id, user }); // 사용자에 해당하는 게시판 삭제
    if (result.affected === 0) {
      // 삭제된 게시판이 없으면 예외 발생
      throw new NotFoundException(`Can't find Board with id ${id}`);
    }
    console.log('result', result); // 삭제 결과 로그 출력
  }

  // 게시판 상태 변경 메서드
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.findBoardById(id); // 게시판을 ID로 찾아옴
    board.status = status; // 상태를 새로운 상태로 변경
    await this.save(board); // 변경된 상태를 DB에 저장
    return board; // 변경된 게시판 반환
  }

  // 모든 게시판을 가져오는 메서드
  async getAllBoards(): Promise<Board[]> {
    return this.find(); // 모든 게시판을 반환
  }
}
