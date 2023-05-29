import { Appointment } from "../models/Appointment.js";

export async function createAppointment(req, res) {
  const createdAppointment = await new Appointment(req.body).save();
  return res.status(201).send({ message: "Appointment created successfully" });
}

export async function getAppointment(req, res) {
  const appointment = await Appointment.find(req.params.id).populate('patient').populate('doctor');
  return res.send(appointment);
}

export async function getAppointments(req, res) {
  const appointments = await Appointment.find().populate('patient').populate('doctor');
  return res.send(appointments);
}

export async function deleteAppointment(req, res) {
  const appointment = await Appointment.deleteOne(req.params.id1);
  return res.status(201).send({ message: "Appointment deleted successfully" });
}
