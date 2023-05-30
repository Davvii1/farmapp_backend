import { Schema, model } from "mongoose";

const FarmacySchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  opentime: { type: String, required: true },
  closetime: { type: String, required: true },
  assistance: { type: Boolean, default: true },
  user: { type: Schema.Types.ObjectId, required: true, ref: 'user' },
});

export const Farmacy = model("farmacy", FarmacySchema);
