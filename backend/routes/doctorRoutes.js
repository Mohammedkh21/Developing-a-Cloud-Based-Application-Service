const express = require("express");
const { addDoctor, getAllDoctors } = require("../controllers/doctorController");
const router = express.Router();

router.post("/add", addDoctor);
router.get("/", getAllDoctors);

module.exports = router;