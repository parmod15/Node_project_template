const express = require("express");
const router = express.Router();

const { InfoController } = require("../../controllers/index");

router.get("/info", InfoController.infov2);

module.exports = router;
