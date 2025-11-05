import mongoose from "mongoose";
import env from "./dotenv.js";
const db = async () => {
  await mongoose.connect(env.mongoUrl);
  console.log("Db Connected");
};

export default db;
