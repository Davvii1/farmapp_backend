import { Schema, model } from "mongoose";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  age: { type: Number, required: true },
  phone: { type: String, required: true },
  user_type: { type: String, required: true },
  caretaker: { type: Boolean, default: false },
  caretaker_name: { type: String, default: "ND" },
  caretaker_phone: { type: String, default: "ND" },
  authToken: { type: String, select: false, required: false },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false, required: true },
});

UserSchema.methods.generateAuthToken = function (user) {
  const token = jwt.sign({ user: user.email }, process.env.JWT);
  return token;
};

//Middleware
export const authenticateToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
  });
  next();
};

export const User = model("user", UserSchema);
