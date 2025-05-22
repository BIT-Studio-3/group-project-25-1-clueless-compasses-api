import express from 'express';
import upload from '../../middleware/uploadMiddleware.js';

import {
  getIncident,
  getIncidents,
  createIncident,
  updateIncident,
  deleteIncident,
} from '../../controllers/v1/incident.js';

import {
  validatePostIncident,
  validatePutIncident,
} from '../../middleware/validation/incident.js';

const router = express.Router();

// ✅ Custom multipart/form-data route with file upload
router.post(
  '/',
  upload.single('photo'),         // 🟢 parse FormData
  validatePostIncident,           // 🟢 validate body
  createIncident                  // 🟢 save to DB
);

// ✅ Other standard routes
router.get('/', getIncidents);
router.get('/:id', getIncident);
router.put('/:id', validatePutIncident, updateIncident);
router.delete('/:id', deleteIncident);

export default router;
