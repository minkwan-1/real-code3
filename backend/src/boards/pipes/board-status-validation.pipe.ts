import { BadRequestException, PipeTransform } from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  // BoardStatus 열거형 값 중에서 허용되는 상태값들을 배열로 정의
  readonly StatusOptions = [BoardStatus.PUBLIC, BoardStatus.PRIVATE];

  // 파이프의 transform 메서드는 입력 값을 유효성 검사를 진행하고, 값이 유효하지 않으면 예외를 던짐
  transform(value: any) {
    // 입력된 값을 대문자로 변환하여 일관성을 유지
    value = value.toUpperCase();

    // 유효한 상태인지 검사
    if (!this.isStatusValid(value)) {
      // 유효하지 않으면 BadRequestException을 던져 400 상태 코드로 반환
      throw new BadRequestException(`${value} isn't in the status`);
    }

    // 유효한 값일 경우 그대로 반환
    return value;
  }

  // 주어진 상태가 허용된 상태인지 확인하는 메서드
  private isStatusValid(status: any) {
    // StatusOptions 배열에서 주어진 상태값이 있는지 확인
    const index = this.StatusOptions.indexOf(status);
    return index !== -1; // 상태가 존재하면 true, 아니면 false 반환
  }
}
