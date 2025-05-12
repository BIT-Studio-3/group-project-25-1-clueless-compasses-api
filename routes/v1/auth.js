import express from "express";
import { login } from "../../controllers/v1/auth.js"; // Ensure this is the correct path

const router = express.Router();

// Register the route for /api/v1/auth/login
router.post("/login", login);

export default router;