import User from "../../models/user.js";
import { connect } from "../../database.js";
import { randomUsername } from "../utils.js";

async function test() {
  const username = randomUsername();

  console.log(`Creating user ${username}...`);
  const user = await User({ username: username, password: "123" });
  console.log(`Created user ${username}`);

  console.log(user);

  console.log(`Saving user ${username}...`);
  await user.save();
  console.log(`Saved user ${username}`);
}

connect().then(() => {
  test().then(() => {
    console.log("Done");
    process.exit(0);
  });
});
