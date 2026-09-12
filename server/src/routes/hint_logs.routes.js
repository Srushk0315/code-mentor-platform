const express = require("express");
const { getHint_logs } = require("../controllers/hint_logs.controller");

const router = express.Router();

router.get("/",getHint_logs);

module.exports = router;