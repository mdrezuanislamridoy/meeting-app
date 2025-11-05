import app from "./app.js";
import env from "./config/dotenv.js";
import db from "./config/db.js";

db();
app.listen(env.port, () => console.log(`Server running on port ${env.port}`));
