const express = require("express");
const { addPatient, getAllPatients } = require("../controllers/patientController");
const router = express.Router();

router.post("/add", addPatient);
router.get("/", getAllPatients);

module.exports = router;