// Create the auth router
import { Router } from "express";
import { User } from "../models";
import bcrypt from "bcrypt";
import { body, validationResult } from "express-validator";

const router = Router();

router.post(
  "/login",
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Username must be at least 3 characters long"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .escape()
    .withMessage("Password must be at least 8 characters long"),
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { username, password } = req.body;

      const user = await User.findOne({ username });
      if (!user) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res
          .status(400)
          .json({ message: "Invalid username or password" });
      }

      // Perform additional authentication logic if necessary

      res.json({ user, message: "Login successful" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post(
  "/register",
  // Validate and sanitize the username and password fields
  body("username")
    .trim()
    .notEmpty()
    .isLength({ min: 3 })
    .escape()
    .withMessage("Username must be at least 3 characters long"),
  body("password")
    .trim()
    .notEmpty()
    .isLength({ min: 8 })
    .escape()
    .withMessage("Password must be at least 8 characters long"),
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      // Check if the username already exists in the database
      const exists = await User.exists({ username: req.body.username });
      if (exists) {
        return res.status(400).send("Username already exists");
      }

      // Create the user in the database
      const user = await User.create({
        username: req.body.username,
        password: req.body.password,
      });
      // save the user in the database
      await user.save();

      // Return the newly created user or a success message
      res.json({ user, message: "Registration successful" });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
);

router.post("/create-session", (req, res) => {
  req.session.user = req.body;
  res.send({
    message: "Session created",
  });
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
