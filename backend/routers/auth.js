// Create the auth router
import { Router } from "express";

const router = Router();

// Get the current logged in user
router.get("/me", (req, res) => {
  res.send("Me");
});

router.post("/login", (req, res) => {
  res.send("Login");
});

router.post("/register", (req, res) => {
  res.send("Register");
});

router.post("/logout", (req, res) => {
  res.send("Logout");

router.post("/logout", async (req, res) => {
  req.session.destroy();
  res.send("Logged out");
});

export default router;
