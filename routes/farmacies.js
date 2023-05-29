import { Router } from "express";
import { authenticateToken } from "../models/User.js";
import {
  getFarmacy,
  getFarmacies,
} from "../controllers/farmacies.controller.js";

const router = Router();

//Routes
//Get farmacies
router.get("/:id", getFarmacy); //Check
router.get("/", getFarmacies); //Check

export default router;
