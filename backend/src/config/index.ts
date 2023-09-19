import 'dotenv-flow/config';

export const MOCKS = process.env.MOCKS === 'true';
export const JWT_SECRET = process.env.JWT_SECRET || '';
export const PORT = parseInt(process.env.PORT || '4000', 10);
export const DB_HOST = process.env.DB_HOST;
export const DB_PORT = process.env.DB_PORT
  ? parseInt(process.env.DB_PORT, 10)
  : undefined;
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_NAME = process.env.DB_NAME;
