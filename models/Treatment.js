import { Schema, model } from "mongoose";

const TreatmentSchema = new Schema({
  patient: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
  medicine: { type: Schema.Types.ObjectId, required: true, ref: 'medicine' },
  duration: { type: Number, required: true },
  frequence: { type: Number, required: true },
});

export const Treatment = model("treatment", TreatmentSchema);
