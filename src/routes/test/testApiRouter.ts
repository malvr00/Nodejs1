import { Router, Request, Response } from 'express';

const testApiRouter: Router = Router();

testApiRouter.get('/', async (req: Request, res: Response) => {
  return res.status(200).json({
    status: 200,
    message: '테스트',
  });
});

export default testApiRouter;
