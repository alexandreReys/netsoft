const express = require("express");
const { Router } = require("express");
const cors = require("cors");
const morgan = require("morgan");

const adminAuthentication = require('../middlewares/adminAuth');

const settingsRouter = require("./settingsRouter");

const router = Router();

router.use(cors());
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(morgan("dev"));

router.get("/", (req, res) => {
  try {
    return res.status(200).send({
      title: "NetSoft API OK",
      version: "1.0.0",
    });
  } catch (e) {
    return res.status(400).send(e);
  }
});

router.post("/auth", adminAuthentication);
router.use("/settings", settingsRouter);

module.exports = router;
