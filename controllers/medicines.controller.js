import { Medicine } from "../models/Medicine.js";

export async function createMedicine(req, res) {
  const createdMedicine = await new Medicine(req.body).save();
  return res.status(201).send({ message: "Medicine created successfully" });
}

export async function getMedicine(req, res) {
  const medicine = await Medicine.find(req.params.id);
  return res.send(medicine);
}

export async function getMedicines(req, res) {
  const medicines = await Medicine.find();
  return res.send(medicines);
}

export async function deleteMedicines(req, res) {
  const medicine = await Medicine.deleteOne(req.params.id);
  return res.status(201).send({ message: "Medicine deleted successfully" });
}
