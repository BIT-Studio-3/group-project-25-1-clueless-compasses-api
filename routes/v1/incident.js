import createRouter from "./base.js";
import upload from "../../middleware/uploadMiddleware.js";

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
} from "../../middleware/validation/incident.js";

const incidentController = {
  get: getIncidents,
  getById: getIncident,
  create: createIncident,
  update: updateIncident,
  delete: deleteIncident,
};


const incidentRouter = createRouter(
  incidentController,
  validatePostIncident,
  validatePutIncident
);

// Overrides createIncident
incidentRouter.post(
  '/',
  upload.single('photo'),      // This parses the blob data for the photo
  validatePostIncident,        // Rerun validation
  createIncident               // Then the controller
);

export default incidentRouter;
