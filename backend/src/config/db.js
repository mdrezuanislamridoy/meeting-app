import mongoose from "mongoose";
import env from "./dotenv.js";
const db = async () => {
  try {
    await mongoose.connect(env.mongoUrl);
    console.log("Db Connected");
  } catch (error) {
    console.log("Db conection failed");
  }
};

export default db;
