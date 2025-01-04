const admin = require("firebase-admin");
const db = admin.firestore();

exports.addPatient = async (req, res) => {
  try {
    const { name, age, email, documents = [] } = req.body;
    const docRef = await db.collection("patients").add({
      name,
      age,
      email,
      documents,
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
    });
    res
      .status(200)
      .send({ id: docRef.id, message: "Patient added successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

exports.getAllPatients = async (req, res) => {
  try {
    const snapshot = await db.collection("patients").get();
    const patients = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.status(200).send(patients);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
