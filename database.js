import mongoose from "mongoose";

export async function connection() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database is connected");
}
