const express = require("express");
const { addAppointment, getAppointmentsByDoctor } = require("../controllers/appointmentController");
const router = express.Router();

router.post("/add", addAppointment);
router.get("/:doctorId", getAppointmentsByDoctor);

module.exports = router;