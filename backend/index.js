// Create Express server
import express from "express";
import authRouter from "./routers/auth.js";
import sessions from "express-session";
import cookieParser from "cookie-parser";

// Create Express app
const app = express();

// use the sessions middleware
app.use(
  sessions({
    secret: "potatoman",
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }, // 1 week
    resave: false,
  })
);

// use cookie parser middleware to parse cookies
app.use(cookieParser());

// use the auth router
app.use("/auth", authRouter);

// Start the Express server
app.listen(3000, () => console.log("Server running on port 3000!"));
