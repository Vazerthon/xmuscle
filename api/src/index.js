import dotenv from 'dotenv';
import startServer from './graphql/server';

dotenv.config({ path: './.env' });

startServer();
