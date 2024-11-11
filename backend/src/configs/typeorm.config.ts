import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from 'src/boards/board.entity';
import { User } from 'src/auth/user.entity';
// import * as config from 'config';

// const dbConfig = config.get('db');
// 06:07:09 ~~ 참고

export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'board-app',
  // entities: [__dirname + '/../**/*.entity.{js,ts}'],
  entities: [Board, User],
  synchronize: true,
};
