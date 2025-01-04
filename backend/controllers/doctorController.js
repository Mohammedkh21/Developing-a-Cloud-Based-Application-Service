const admin = require("firebase-admin");
const db = admin.firestore();

exports.addDoctor = async (req, res) => {
  try {
    const { name, specialty, email } = req.body;
    const docRef = await db.collection("doctors").add({
      name,
      specialty,
      email,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).send({ id: docRef.id, message: "Doctor added successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getAllDoctors = async (req, res) => {
  try {
    const snapshot = await db.collection("doctors").get();
    const doctors = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    res.status(200).send(doctors);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};