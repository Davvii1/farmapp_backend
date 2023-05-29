import { Schema, model } from "mongoose";

const MedicineSchema = new Schema({
  name: { type: String, required: true },
  presentation: { type: String, required: true },
  content: { type: Number, required: true },
  stock: { type: Number, required: true },
});

export const Medicine = model("medicine", MedicineSchema);
