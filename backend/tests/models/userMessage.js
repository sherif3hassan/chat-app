import Room from "../../models/room.js";
import { connect } from "../../database.js";
import { randomRoomName } from "../utils.js";
import mongoose from "mongoose";

// Create a room and add a message to it
async function test() {
  const roomName = randomRoomName();

  console.log(`Creating room ${roomName}...`);

  const room = await Room.create({ name: roomName });

  console.log(`Created room ${roomName}`);
  console.log(room);

  console.log(`Adding message to room ${roomName}...`);

  // Add a message to the room
  room.messages.push({
    text: "Hello",
    senderId: new mongoose.Types.ObjectId(),
  });

  console.log(`Added message to room ${roomName}`);
  console.log(room);

  console.log(`Saving room ${roomName}...`);
  // Save the room
  await room.save();
  console.log(`Saved room ${roomName}`);
}

connect().then(() => {
  test().then(() => {
    console.log("Done");
    process.exit(0);
  });
});
