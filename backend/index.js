// Create Express server
import express from "express";
import authRouter from "./routers/auth.js";

// Create Express app
const app = express();

// use the auth router
app.use("/auth", authRouter);

// Start the Express server
app.listen(3000, () => console.log("Server running on port 3000!"));
