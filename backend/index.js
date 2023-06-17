// Connect to mongoDB
import mongoose from "mongoose";

// Load env variables
import dotenv from "dotenv";
dotenv.config();

try {
  const conn = await mongoose.connect(process.env.MONGODB_URI);

  console.log(`MongoDB connected: ${conn.connection.host}`);
} catch (err) {
  console.error(`MongoDB not connected: ${err.message}`);
  // Exit with failure
  process.exit(1);
}
