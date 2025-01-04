const express = require("express");
const { uploadFile } = require("../controllers/fileController");
const router = express.Router();

const multer = require("multer");
const upload = multer();

router.post("/upload", upload.single("file"), uploadFile);

module.exports = router;