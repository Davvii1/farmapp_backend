import app from "./app.js";
import { connection } from "./database.js";
import dotenv from "dotenv";
import cors from "cors";

const corsOptions = {
  origin: "http://127.0.0.1:5173",
};

async function main() {
  dotenv.config();
  await connection();
  app.use(cors(corsOptions));
  app.listen(app.get("port"));
  console.log("Server on port", app.get("port"));
}

main();
