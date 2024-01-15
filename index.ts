import { env } from '@config/env';
import logger from '@config/logger';
import express from 'express';
import expressLoader from 'src/app';

const app: express.Application = express();
expressLoader(app);

const server = app
  .listen(env.app.port, () => {
    // console.log('test');
    logger.info(`Server listening on port: ${env.app.port}`);
  })
  .on('error', (err) => {
    logger.error(`${env.app.port} server error: ${err}`);
  });

export default { server };
