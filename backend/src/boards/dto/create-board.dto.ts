import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  // 게시글 제목, 빈 값이 아니어야 함
  @IsNotEmpty()
  title: string;

  // 게시글 설명, 빈 값이 아니어야 함
  @IsNotEmpty()
  description: string;
}
