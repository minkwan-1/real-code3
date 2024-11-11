import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { Board } from './board.entity';
import { BoardRepository } from './board.repository';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Board]), // TypeORM을 사용하여 Board 엔티티를 데이터베이스와 연결
    AuthModule, // 인증 모듈을 임포트하여 인증 관련 기능 사용
  ],
  controllers: [BoardsController], // 게시판 관련 API를 처리할 컨트롤러 설정
  providers: [BoardsService, BoardRepository], // 서비스와 리포지토리를 프로바이더로 등록
})
export class BoardsModule {}
