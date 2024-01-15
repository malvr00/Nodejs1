import { Router } from 'express';
import testApiRouter from '@test/routes/testApiRouter';

const router: Router = Router();

router.use('/test', testApiRouter);

export default router;
