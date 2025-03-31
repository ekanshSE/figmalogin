import express from "express";
import { register, login } from "../controllers/authController";

const router = express.Router();

// Wrap async route handlers to handle errors properly
router.post("/register", async (req, res, next) => {
  try {
    await register(req, res);
  } catch (error) {
    next(error); // Pass errors to the global error handler
  }
});

router.post("/login", async (req, res, next) => {
  try {
    await login(req, res);
  } catch (error) {
    next(error); // Pass errors to the global error handler
  }
});

export default router;