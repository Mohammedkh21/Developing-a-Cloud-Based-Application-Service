const admin = require("firebase-admin");
const db = admin.firestore();

exports.addAppointment = async (req, res) => {
  try {
    const { patientId, doctorId, date, time } = req.body;
    const existingAppointments = await db
      .collection("appointments")
      .where("doctorId", "==", doctorId)
      .where("date", "==", date)
      .where("time", "==", time)
      .get();

    if (!existingAppointments.empty) {
      return res.status(400).send({ message: "Time slot already booked." });
    }

    const docRef = await db.collection("appointments").add({
      patientId,
      doctorId,
      date,
      time,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).send({ id: docRef.id, message: "Appointment added successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getAppointmentsByDoctor = async (req, res) => {
  try {
    const { doctorId } = req.params;
    const snapshot = await db
      .collection("appointments")
      .where("doctorId", "==", doctorId)
      .get();

    const appointments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(appointments);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};