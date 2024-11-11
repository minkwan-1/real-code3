import { Injectable } from '@nestjs/common';
import { BoardRepository } from './board.repository';
import { Board } from './board.entity';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './board-status.enum';
import { User } from 'src/auth/user.entity';

@Injectable()
export class BoardsService {
  constructor(private boardRepository: BoardRepository) {}

  // 게시판 생성
  async createBoard(
    createBoardDto: CreateBoardDto,
    user: User,
  ): Promise<Board> {
    return this.boardRepository.createBoard(createBoardDto, user);
  }

  // ID로 게시판 조회
  async getBoardById(id: number): Promise<Board> {
    return this.boardRepository.findBoardById(id);
  }

  // 게시판 삭제
  async deleteBoard(id: number, user: User): Promise<void> {
    return this.boardRepository.deleteBoard(id, user);
  }

  // 게시판 상태 업데이트
  async updateBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    return this.boardRepository.updateBoardStatus(id, status);
  }

  // 사용자가 작성한 모든 게시판 조회
  async getAllBoards(user: User): Promise<Board[]> {
    const query = this.boardRepository.createQueryBuilder('board');
    query.where('board.userId = :userId', { userId: user.id }); // userId를 기준으로 게시판 필터링
    const boards = await query.getMany(); // 게시판 목록 조회
    return boards;
  }
}
