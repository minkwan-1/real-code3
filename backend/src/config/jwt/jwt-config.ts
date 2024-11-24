import { registerAs } from '@nestjs/config';

import { IsOptional, IsString } from 'class-validator';

import validateConfig from '../../utils/validate-config.util';

export type TokenConfig = {
  accessTokenLifeTime: string;
  refreshTokenLifeTime: string;
  accessSecret: string;
  refreshSecret: string;
};

class EnvironmentVariablesValidator {
  @IsString()
  @IsOptional()
  ACCESS_TOKEN_LIFETIME: string;

  @IsString()
  @IsOptional()
  REFRESH_TOKEN_LIFETIME: string;

  @IsString()
  @IsOptional()
  ACCESS_TOKEN_SECRET: string;

  @IsString()
  @IsOptional()
  REFRESH_TOKEN_SECRET: string;
}

export default registerAs<TokenConfig>('jwt', () => {
  validateConfig(process.env, EnvironmentVariablesValidator);

  return {
    accessTokenLifeTime: process.env.ACCESS_TOKEN_LIFETIME,
    refreshTokenLifeTime: process.env.REFRESH_TOKEN_LIFETIME,
    accessSecret: process.env.ACCESS_TOKEN_SECRET,
    refreshSecret: process.env.REFRESH_TOKEN_SECRET,
  };
});
