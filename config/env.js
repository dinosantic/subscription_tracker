import { config } from "dotenv";
import process from "process";

// Set the default value for NODE_ENV if it's not already set
process.env.NODE_ENV = process.env.NODE_ENV || "development";

// Load the environment variables from the appropriate .env file
config({ path: `.env.${process.env.NODE_ENV}.local` });

export const {
  PORT,
  NODE_ENV,
  DB_URI,
  JWT_SECRET,
  JWT_EXPIRES_IN,
  ARCJET_ENV,
  ARCJET_KEY,
} = process.env;
