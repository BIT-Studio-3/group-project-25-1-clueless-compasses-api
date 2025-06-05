import express from "express";
import {
  getIncident,
  getIncidents,
  createIncident,
  updateIncident,
  deleteIncident,
} from "../../controllers/v1/incident.js";

import {
  validatePostIncident,
  validatePutIncident,
} from "../../middleware/validation/incident.js";

import authMiddleware from "../../middleware/auth.js";

const router = express.Router();

router.get("/", authMiddleware, getIncidents);
router.get("/:id", authMiddleware, getIncident);
router.post("/", authMiddleware, validatePostIncident, createIncident);
router.put("/:id", authMiddleware, validatePutIncident, updateIncident);
router.delete("/:id", authMiddleware, deleteIncident);

export default router;
