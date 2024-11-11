import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Delete,
  Patch,
  ValidationPipe,
  UsePipes,
  ParseIntPipe,
  UseGuards,
  Logger,
} from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { BoardStatus } from './board-status.enum';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/get-user.decorator';
import { User } from 'src/auth/user.entity';

@Controller('boards') // 'boards' 경로에 대한 라우팅을 처리하는 컨트롤러
@UseGuards(AuthGuard()) // 요청에 대해 인증된 사용자만 접근 가능하도록 보호
export class BoardsController {
  private logger = new Logger('BoardsController'); // 로깅을 위한 Logger 객체 생성

  constructor(private boardsService: BoardsService) {} // BoardsService 의존성 주입

  // 모든 게시판을 조회하는 GET 요청 핸들러
  @Get()
  getAllTask(@GetUser() user: User): Promise<Board[]> {
    this.logger.verbose(`User ${user.username} trying to get all boards.`); // 로그 출력
    return this.boardsService.getAllBoards(user); // 사용자에 맞는 모든 게시판 반환
  }

  // 게시판을 생성하는 POST 요청 핸들러
  @Post()
  @UsePipes(ValidationPipe) // 입력 데이터에 대한 유효성 검사
  createBoard(
    @Body() createBoardDto: CreateBoardDto, // 요청 본문에서 게시판 생성 데이터 받기
    @GetUser() user: User, // 인증된 사용자 정보 받기
  ): Promise<Board> {
    return this.boardsService.createBoard(createBoardDto, user); // 게시판 생성 서비스 호출
  }

  // 특정 게시판을 ID로 조회하는 GET 요청 핸들러
  @Get('/:id')
  getBoardById(@Param('id') id: number): Promise<Board> {
    return this.boardsService.getBoardById(id); // 특정 ID에 해당하는 게시판 반환
  }

  // 게시판을 삭제하는 DELETE 요청 핸들러
  @Delete('/:id')
  deleteBoard(
    @Param('id', ParseIntPipe) id, // 게시판 ID를 정수로 변환하여 받기
    @GetUser() user: User, // 인증된 사용자 정보 받기
  ): Promise<void> {
    return this.boardsService.deleteBoard(id, user); // 게시판 삭제 서비스 호출
  }

  // 게시판의 상태를 업데이트하는 PATCH 요청 핸들러
  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id', ParseIntPipe) id, // 게시판 ID를 정수로 변환하여 받기
    @Body('status', BoardStatusValidationPipe) status: BoardStatus, // 상태 값에 대한 유효성 검사
  ): Promise<Board> {
    return this.boardsService.updateBoardStatus(id, status); // 게시판 상태 업데이트 서비스 호출
  }
}
