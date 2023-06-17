// import mongoose
import User from "./user.js";
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  members: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        validate: {
          validator: async (value) => {
            const exists = await User.findById(value);
            return exists !== null;
          },
        },
      },
    ],
    default: [],
  },
  messages: {
    type: [
      {
        text: String,
        senderId: {
          type: mongoose.Schema.Types.ObjectId,
          validate: {
            validator: async (value) => {
              const exists = await User.findById(value);
              return exists !== null;
            },
          },
        },
      },
    ],
    default: [],
  },
});

// create the model for users and expose it to our app
export default mongoose.model("Room", roomSchema);
