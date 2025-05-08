/**
 * @file This file exports the router for the incident routes.
 * @author Clueless Compassess Studio 3 Group
 */

import createRouter from "./base.js";

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
  validatePutIncident,
);

export default incidentRouter;