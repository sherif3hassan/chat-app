// import mongoose
import mongoose from "mongoose";

// User model and schema
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

// create the model for users and expose it to our app
export default mongoose.model("User", userSchema);
