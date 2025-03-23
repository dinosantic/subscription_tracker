import mongoose from "mongoose";
import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("DB_URI is not defined in the .env file");
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to the database", NODE_ENV);
  } catch (error) {
    console.error("Error connecting to the database: ", error.message);
  }
};

export default connectToDatabase;
