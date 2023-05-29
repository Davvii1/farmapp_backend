import { Farmacy } from "../models/Farmacy.js";

export async function getFarmacy(req, res) {
  const farmacy = await Farmacy.find(req.params.id);
  return res.send(farmacy);
}

export async function getFarmacies(req, res) {
  const farmacies = await Farmacy.find();
  return res.send(farmacies);
}
