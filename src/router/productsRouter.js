const { Router } = require("express");
const controller = require("../controllers/productsController");
const authorization = require('../middlewares/adminAuthz');
const router = Router();

router.get("/", authorization, controller.get);
router.get("/:codigo", authorization, controller.getByCodigo);

module.exports = router;
