// import mongoose
import User from "./user.js";
import mongoose from "mongoose";

// User model and schema
const messageSchema = new mongoose.Schema({
    senderId: mongoose.Schema.Types.ObjectId,
    text: String,
  });

const roomSchema = new mongoose.Schema({
  usersId: [mongoose.Schema.Types.ObjectId],
  messagesId: [messageSchema],
        validate: {
          validator: async (value) => {
            const exists = await User.findById(value);
            return exists !== null;
          },
        },
        senderId: {
          type: mongoose.Schema.Types.ObjectId,
          validate: {
            validator: async (value) => {
              const exists = await User.findById(value);
              return exists !== null;
            },
          },
        },
});

// create the model for users and expose it to our app
export default mongoose.model("Room", roomSchema);
