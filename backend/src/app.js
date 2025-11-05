import express from "express";
import path from "path";
import env from "./config/dotenv.js";

const app = express();

const __dirname = path.resolve();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (env.node_env === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get("/{*any}", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", "index.html"));
  });
}

export default app;
