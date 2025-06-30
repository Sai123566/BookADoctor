const express = require("express");
const multer = require("multer");

const {
  registerController,
  loginController,
  authController,
  docController,
  deleteallnotificationController,
  getallnotificationController,
  getAllDoctorsControllers,
  appointmentController,
  getAllUserAppointments,
  getDocsController,
} = require("../controllers/userC");

const authMiddleware = require("../middlewares/authMiddleware");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

// Auth routes
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/getuserdata", authMiddleware, authController);

// Doctor-related
router.post("/registerdoc", authMiddleware, docController);
router.get("/getalldoctorsu", authMiddleware, getAllDoctorsControllers);

// Appointment-related
router.post("/getappointment", authMiddleware, appointmentController);
router.get("/getuserappointments", authMiddleware, getAllUserAppointments);

// Notifications
router.post("/getallnotification", authMiddleware, getallnotificationController);
router.post("/deleteallnotification", authMiddleware, deleteallnotificationController);

// Documents
router.get("/getDocsforuser", authMiddleware, getDocsController);

module.exports = router;
