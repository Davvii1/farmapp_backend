import { Router } from "express";
import { authenticateToken } from "../models/User.js";
import {
  createAppointment,
  getAppointment,
  getAppointments,
  deleteAppointment,
} from "../controllers/appointments.controller.js";

const router = Router();

//Routes
//Create appointments
router.post("/", createAppointment); //Check

//Get appointments
router.get("/:id", getAppointment); //Check
router.get("/", getAppointments); //Check

//Delete appointment
router.delete("/:id", deleteAppointment); //Check

export default router;
