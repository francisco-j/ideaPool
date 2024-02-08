import {Router} from 'express';
import poolsController from '../controllers/poolsController.js';
const router = Router();

router.get("/", poolsController.getAllPools);
router.get("/:poolId", poolsController.getPoolById);
router.post("/", poolsController.createNewPool);
router.patch("/:poolId", poolsController.updateOnePool);
router.delete("/:poolId", poolsController.deleteOnePool);

export default router;