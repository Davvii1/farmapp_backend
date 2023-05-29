import { Treatment } from "../models/Treatment.js";

export async function createTreatment(req, res) {
  const createdAppointment = await new Treatment(req.body).save();
  return res.status(201).send({ message: "Treatment created successfully" });
}

export async function getTreatment(req, res) {
  const appointment = await Treatment.find(req.params.id).populate('patient').populate('medicine');
  return res.send(appointment);
}

export async function getPatientTreatments(req, res) {
  const appointments = await Treatment.find({ patient: req.params.patient }).populate('patient').populate('medicine');
  return res.send(appointments);
}

export async function getTreatments(req, res) {
  const appointments = await Treatment.find().populate('patient').populate('medicine');
  return res.send(appointments);
}

export async function deleteTreatment(req, res) {
  const appointment = await Treatment.deleteOne(req.params.id);
  return res.status(201).send({ message: "Treatment deleted successfully" });
}
