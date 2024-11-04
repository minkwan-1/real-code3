import { registerAs } from '@nestjs/config';

export const MongoConfig = registerAs('mongo', () => ({
  uri: process.env.MONGODB_URI,
  options: {
    dbName: process.env.MONGODB_DB_NAME || 'guestbook',
    connectTimeoutMS: 5000,
    // URI에 없는 추가 옵션만 설정함 아래 설정은 MONGODB_URI 있음
    // retryWrites=true
    // w=majority
    // appName=Cluster0
  },
}));
