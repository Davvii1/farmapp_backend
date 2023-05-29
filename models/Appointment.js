import { Schema, model } from "mongoose";

const AppointmentSchema = new Schema({
  date: { type: String, required: true },
  patient: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  doctor: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
});

export const Appointment = model("appointment", AppointmentSchema);
