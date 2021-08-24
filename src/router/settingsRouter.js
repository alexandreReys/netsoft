const { Router } = require("express");
const settingsControler = require("../controllers/settingsController");
const authorization = require('../middlewares/adminAuthz');
const router = Router();

router.get("/", authorization, settingsControler.get);
router.patch("/psw", authorization, settingsControler.changePasswordAdm);

module.exports = router;
