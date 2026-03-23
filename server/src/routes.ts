import { Router } from "express";
import { findUserByCredentials } from "./database";

export const router = Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required." });
  }

  if (!email.includes("@")) {
    return res.status(400).json({ error: 'Email must contain "@".' });
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json({ error: "Password must be at least 8 characters." });
  }

  const user = findUserByCredentials(email, password);

  if (!user) {
    return res.status(401).json({ error: "Invalid email or password." });
  }

  return res.json({ message: `Welcome, ${user.email}!` });
});
