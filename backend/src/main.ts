import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();

// app.useGlobalPipes(
//   new ValidationPipe({
//     whitelist: true, // DTO에 정의되지 않은 속성 제거
//     // transform: true,          // 타입 변환 활성화
//     forbidNonWhitelisted: true, // 정의되지 않은 속성이 있으면 에러
//     // transformOptions: {
//     //   enableImplicitConversion: true, // 암시적 타입 변환 활성화
//     // },
//   }),
// );
