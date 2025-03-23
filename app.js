import express from "express";
import { PORT } from "./config/env.js";
import router from "./routes/index.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1", router);

app.get("/", (req, res) => {
  res.send("Welcome to the app");
});

app.listen(PORT, async () => {
  console.log("Server running on port", PORT);

  await connectToDatabase();
});

export default app;
