import { configDotenv } from "dotenv";
configDotenv();

const env = {
  port: process.env.PORT,
  mongoUrl: process.env.MONGO_URL,
  node_env: process.env.NODE_ENV,
};

export default env;
