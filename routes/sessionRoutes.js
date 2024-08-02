const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");
const authMiddleware = require("../middleware/auth");

router.use(authMiddleware);

router.get("/", sessionController.getSessions);

module.exports = router;
