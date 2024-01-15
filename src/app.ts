import express from 'express';
import router from '@routes/routerIndex';
import morganMiddleware from '@config/morgan';

export default (app: express.Application) => {
  app.use(express.urlencoded({ extended: true })); // query 받기
  app.use(express.json()); // body 받기

  /**
   * Logger
   */
  app.use(morganMiddleware);

  app.use('/api', router);
};
