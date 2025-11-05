import { configDotenv } from "dotenv";
configDotenv();

const env = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
};

export default env;
