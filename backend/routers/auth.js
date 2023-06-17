// Create the auth router
import { Router } from "express";

const router = Router();

router.post("/login", (req, res) => {
  res.send("Login");
});

router.post("/register", (req, res) => {
  res.send("Register");
});


// Get the current logged in user
router.get("/me", async (req, res) => {
  const session = req.session;
  if (session && session.user) {
    res.send({
      user: session.user,
    });
  } else {
    res.send({
      user: null,
    });
  }
});

router.post("/logout", async (req, res) => {
  req.session.destroy();
  res.send("Logged out");
});

export default router;
