/**
 * @file This file exports the router for the hazard routes.
 * @author Clueless Compass
 */

import express from "express";
import {
  getHazard,
  getHazards,
  createHazard,
  updateHazard,
  deleteHazard,
} from "../../controllers/v1/hazard.js";

import {
  validatePostHazard,
  validatePutHazard,
} from "../../middleware/validation/hazard.js";

import authMiddleware from "../../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, getHazards);
router.get("/:id", authMiddleware, getHazard);
router.post("/", authMiddleware, validatePostHazard, createHazard);
router.put("/:id", authMiddleware, validatePutHazard, updateHazard);
router.delete("/:id", authMiddleware, deleteHazard);

export default router;
