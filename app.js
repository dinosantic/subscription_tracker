import express from "express";
import { PORT } from "./config/env.js";
import router from "./routes/index.js";
import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", router);

app.use(errorMiddleware);

app.get("/", (req, res) => {
  res.send("Welcome to the app");
});

app.listen(PORT, async () => {
  console.log("Server running on port", PORT);

  await connectToDatabase();
});

export default app;
