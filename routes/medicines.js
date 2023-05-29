import { Router } from "express";
import { authenticateToken } from "../models/User.js";
import {
  createMedicine,
  getMedicine,
  getMedicines,
  deleteMedicines,
} from "../controllers/medicines.controller.js";

const router = Router();

//Routes
//Create medicine
router.post("/", createMedicine); //Check

//Get medicine
router.get("/:id", getMedicine); //Check
router.get("/", getMedicines); //Check

//Delete medicine
router.delete("/:id", deleteMedicines); //Check

export default router;
