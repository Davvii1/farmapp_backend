import { User } from "../models/User.js";
import bcrypt from "bcrypt";

export async function createUser(req, res) {
  const emailDB = await User.findOne({ email: req.body.email });

  if (emailDB) {
    return res
      .status(400)
      .json({ msg: `El correo ${req.body.email} ya está registrado.` });
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);
  const createdUser = await new User({
    ...req.body,
    password: hashPassword,
  }).save();

  return res.status(201).send({ message: "User created successfully" });
}

export async function loginUser(req, res) {
  const user = await User.findOne({ email: req.body.email })
    .select("+password")
    .select("+authToken");
  if (!user)
    return res.status(401).send({ message: "Invalid email or password" });

  const validPassword = await bcrypt.compare(req.body.password, user.password);
  if (!validPassword)
    return res.status(401).send({ message: "Invalid email or password" });

  const authtoken = user.generateAuthToken(user);
  user.authToken = authtoken;
  user.save();

  res.status(200).send({
    authToken: authtoken,
    message: "Logged in successfully",
  });
}

export async function logoutUser(req, res) {
  const user = await User.findOne({ authToken: req.body.authToken });
  user.authToken = "";
  user.save();
  return res.status(204).send({ message: "Successfully logout" });
}

export async function getUser(req, res) {
  const user = await User.findOne({ email: req.params.email });
  return res.send(user);
}

export async function getUsers(req, res) {
  const users = await User.find();
  return res.send(users);
}

export async function getUsersByType(req, res) {
  const users = await User.find({ user_type: req.params.type });
  return res.send(users);
}

export async function updateUser(req, res) {
  const user = await User.findOne({ email: req.user.user });
  user.first_name = req.body.first_name;
  user.last_name = req.body.last_name;
  user.age = req.body.age;
  user.phone = req.body.phone;
  user.caretaker_name = req.body.caretaker_name;
  user.caretaker_phone = req.body.caretaker_phone;
  user.email = req.body.email;
  user.save();
  return res.status(204).send({ message: "User updated successfully" });
}

export async function changePassword(req, res) {
  const user = await User.findOne({ email: req.user.user }).select("+password");
  const validPassword = await bcrypt.compare(
    req.body.currentPassword,
    user.password
  );
  if (!validPassword)
    return res.status(401).send({ message: "Invalid password" });
  user.password = req.body.newPassword;
  user.save();
  return res.status(204).send({ message: "Password updated successfully" });
}
