
document.getElementById("addDoctorForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("doctorName").value;
  const specialty = document.getElementById("doctorSpecialty").value;
  const email = document.getElementById("doctorEmail").value;

  try {
    const response = await fetch("http://localhost:3000/doctors/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, specialty, email })
    });

    const data = await response.json();
    alert(data.message || "Doctor added successfully!");
  } catch (error) {
    alert("An error occurred: " + error.message);
  }
});

document.getElementById("addAppointmentForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const patientId = document.getElementById("appointmentPatient").value;
  const doctorId = document.getElementById("appointmentDoctor").value;
  const date = document.getElementById("appointmentDate").value;
  const time = document.getElementById("appointmentTime").value;

  try {
    const response = await fetch("http://localhost:3000/appointments/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ patientId, doctorId, date, time })
    });

    const data = await response.json();
    alert(data.message || "Appointment added successfully!");
  } catch (error) {
    alert("An error occurred: " + error.message);
  }
});

document.getElementById("uploadFileForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const fileInput = document.getElementById("fileInput");
  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  try {
    const response = await fetch("http://localhost:3000/files/upload", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    alert(data.message || "File uploaded successfully!");
  } catch (error) {
    alert("An error occurred: " + error.message);
  }
});

document.getElementById("trackActivityForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const userId = document.getElementById("userId").value;
  const activityType = document.getElementById("activityType").value;
  const details = document.getElementById("activityDetails").value;

  try {
    const response = await fetch("http://localhost:3000/activities/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId, activityType, details })
    });

    const data = await response.json();
    alert(data.message || "Activity tracked successfully!");
  } catch (error) {
    alert("An error occurred: " + error.message);
  }
});