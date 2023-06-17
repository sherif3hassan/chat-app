// Generate a random room name
export function randomRoomName() {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .join("");
}

// Generate a random username
export function randomUsername() {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .sort(() => Math.random() - 0.5)
    .slice(0, 5)
    .join("");
}
