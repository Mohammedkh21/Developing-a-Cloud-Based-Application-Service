const admin = require("firebase-admin");
const db = admin.firestore();

exports.trackActivity = async (req, res) => {
  try {
    const { userId, activityType, details } = req.body;
    await db.collection("activities").add({
      userId,
      activityType,
      details,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });
    res.status(200).send({ message: "Activity tracked successfully!" });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};