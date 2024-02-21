import {Router} from 'express';
import poolsRouter from './poolsRouter';
import bodyParser from 'body-parser';

const router = Router();

router.use(bodyParser.json());

router.use("/pools", poolsRouter);
// router.use("/ideas", ideasRouter);
// router.use("/votes", votesRouter);

export default router;