// import mongoose
import mongoose from "mongoose";

// User model and schema
const messageSchema = new mongoose.Schema({
    senderId: mongoose.Schema.Types.ObjectId,
    text: String,
  });

const roomSchema = new mongoose.Schema({
  usersId: [mongoose.Schema.Types.ObjectId],
  messagesId: [messageSchema],
});

// create the model for users and expose it to our app
export default mongoose.model("Room", roomSchema);
