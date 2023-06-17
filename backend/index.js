// Connect to mongoDB
import mongoose from "mongoose";

try {
  const conn = await mongoose.connect(process.env.MONGODB_URI);

  console.log(`MongoDB connected: ${conn.connection.host}`);
} catch (err) {
  console.error(`MongoDB not connected: ${err.message}`);
  // Exit with failure
  process.exit(1);
}
