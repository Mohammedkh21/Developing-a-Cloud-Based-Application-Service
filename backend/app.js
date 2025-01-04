// app.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const admin = require("firebase-admin");

const serviceAccount = require("./healthcareapp-96212-firebase-adminsdk-if7qn-47d4b714fa.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const patientRoutes = require("./routes/patientRoutes");
const doctorRoutes = require("./routes/doctorRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");
const fileRoutes = require("./routes/fileRoutes");
const activityRoutes = require("./routes/activityRoutes");

app.use("/patients", patientRoutes);
app.use("/doctors", doctorRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/files", fileRoutes);
app.use("/activities", activityRoutes);

app.get("/", (req, res) => res.send("Healthcare App API is running!"));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
