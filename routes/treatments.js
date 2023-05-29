import { Router } from "express";
import { authenticateToken } from "../models/User.js";
import {
  createTreatment,
  getTreatment,
  getTreatments,
  getPatientTreatments,
  deleteTreatment,
} from "../controllers/treatments.controller.js";

const router = Router();

//Routes
//Create treatment
router.post("/", createTreatment); //Check

//Get treatment
router.get("/:id", getTreatment); //Check
router.get("/:patient", getPatientTreatments); //Check
router.get("/", getTreatments); //Check

//Delete treatment
router.delete("/:id", deleteTreatment); //Check

export default router;
