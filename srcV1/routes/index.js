const {Router} = require("express");
const poolsRouter = require("./poolsRouter");
const bodyParser = require("body-parser");

const router = Router();

router.use(bodyParser.json());

router.use("/pools", poolsRouter);
// router.use("/ideas", ideasRouter);
// router.use("/votes", votesRouter);

module.exports = router;