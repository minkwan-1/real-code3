import { ConfigService } from '@nestjs/config'; // 설정 값을 가져오기 위한 NestJS ConfigService
import { NestFactory } from '@nestjs/core'; // Nest 애플리케이션을 생성하기 위한 NestFactory
import * as cookieParser from 'cookie-parser'; // 쿠키 데이터를 처리하기 위한 cookie-parser

import { AppModule } from './app.module'; // 애플리케이션의 루트 모듈인 AppModule
import { AllConfigType } from './config/config.type'; // 설정한 config type

async function bootstrap() {
  // NestJS 애플리케이션 인스턴스를 생성
  const app = await NestFactory.create(AppModule);

  // ConfigService를 DI방식으로 가져옴
  const configService = app.get(ConfigService<AllConfigType>);

  // 애플리케이션의 전역 URL Prefix(기본 경로)를 설정
  app.setGlobalPrefix(
    configService.getOrThrow('app.apiPrefix', { infer: true }),
    {
      exclude: ['/'],
    },
  );

  // CORS(Cross-Origin Resource Sharing)를 활성화
  app.enableCors({
    origin: [configService.getOrThrow('app.frontendDomain', { infer: true })], // 프론트엔드 도메인만 허용
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'], // 허용할 HTTP 메서드를 정의
    allowedHeaders: ['Content-Type', 'Accept', 'Authorization'], // 허용할 헤더를 정의
    credentials: true, // 쿠키와 같은 자격 증명을 포함한 요청을 허용
  });

  // 쿠키 파서를 미들웨어로 추가, 이를 통해 HTTP 요청에서 쿠키 데이터를 읽을 수 있음
  app.use(cookieParser());

  // 애플리케이션이 특정 포트에서 시작되도록 설정
  await app.listen(configService.getOrThrow('app.port', { infer: true }));
  // 서버가 성공적으로 실행되었음을 로그로 출력
  console.log('server is running');
}

bootstrap();
