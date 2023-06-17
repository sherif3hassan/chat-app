import Room from "../../models/room.js";
import { connect } from "../../database.js";
import mongoose from "mongoose";
import { randomRoomName } from "../utils.js";

// Create a room and add a message to it
async function test() {
  const roomName = randomRoomName();

  console.log(`Creating room ${roomName}...`);

  const room = await Room.create({ name: roomName });

  console.log(`Created room ${roomName}`);
  console.log(room);

  console.log(`Adding user to room ${roomName}...`);

  // Add a message to the room
  room.members.push(new mongoose.Types.ObjectId());

  console.log(`Added user to room ${roomName}`);
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
