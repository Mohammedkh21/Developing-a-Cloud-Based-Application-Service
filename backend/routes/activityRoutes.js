const express = require("express");
const { trackActivity } = require("../controllers/activityController");
const router = express.Router();

router.post("/track", trackActivity);

module.exports = router;