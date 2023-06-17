// Connect to mongoDB
import mongoose from "mongoose";
import { MONGODB_URI } from "./env.js";

export async function connect() {
  try {
    const conn = await mongoose.connect(MONGODB_URI);

    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`MongoDB not connected: ${err.message}`);
    // Exit with failure
    process.exit(1);
  }
}
