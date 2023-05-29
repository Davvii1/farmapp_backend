import { Router } from "express";
import { authenticateToken } from "../models/User.js";
import {
  createUser,
  updateUser,
  getUser,
  getUsers,
  getUsersByType,
  loginUser,
  logoutUser,
  changePassword,
} from "../controllers/users.controller.js";

const router = Router();

//Routes
//Create patient
router.post("/register", createUser); //Check

//Update patient
router.put("/:email", updateUser); //Check

//Get patient/patients
router.get("/:email", getUser); //Check
router.get("/", getUsers); //Check
router.get("/:type", getUsersByType); //Check

//Auth
router.post("/login", loginUser); //Check
router.delete("/logout", logoutUser); //Check
router.post("/changePassword", changePassword);

export default router;
