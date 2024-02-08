const { Router } = require("express");
const poolsController = require("../controllers/poolsController");
const router = Router();

router.get("/", poolsController.getAllPools);

router.get("/:poolId", poolsController.getPoolById);

router.post("/", poolsController.createNewPool);

router.patch("/:poolId", poolsController.updateOnePool);

router.delete("/:poolId", poolsController.deleteOnePool);

module.exports = router;