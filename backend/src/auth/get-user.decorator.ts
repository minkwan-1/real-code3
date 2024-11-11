import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

// @GetUser 데코레이터를 정의하여 HTTP 요청에서 인증된 사용자 정보를 가져옴
export const GetUser = createParamDecorator(
  // 데코레이터 함수, 실행 시 데이터와 컨텍스트를 매개변수로 받음
  (data, ctx: ExecutionContext): User => {
    // 요청 객체를 가져오기 위해 ExecutionContext에서 HTTP 요청을 추출
    const req = ctx.switchToHttp().getRequest();

    // 요청 객체의 'user' 속성에 저장된 인증된 사용자 정보를 반환
    return req.user;
  },
);
