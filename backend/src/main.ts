import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const logger = new Logger(); // 로거 인스턴스를 생성합니다.

  // NestJS 애플리케이션 인스턴스를 생성합니다.
  const app = await NestFactory.create(AppModule);

  // CORS(Cross-Origin Resource Sharing) 설정을 활성화하여 다른 출처에서의 요청을 허용합니다.
  app.enableCors();

  // config 모듈을 사용해 서버 설정을 가져옵니다.
  const serverConfig = config.get('server');
  const port = serverConfig.port; // 서버 포트를 가져옵니다.

  // 서버를 지정된 포트(현재는 3000번)로 실행합니다.
  await app.listen(3000);

  // 애플리케이션이 실행 중임을 로그에 출력합니다.
  logger.log(`Application running on ${port}`);
}

// 애플리케이션 부트스트랩을 실행합니다.
bootstrap();
