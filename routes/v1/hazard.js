/**
 * @file This file exports the router for the hazard routes.
 * @author Clueless Compassess Studio 3 Group
 */

import createRouter from "./base.js";

import {
  getHazard,
  getHazards,
  createHazard,
  updateHazard,
  deleteHazard,
} from '../../controllers/v1/hazard.js';

import {
  validatePostHazard,
  validatePutHazard,
} from "../../middleware/validation/hazard.js";

const hazardController = {
  get: getHazards,
  getById: getHazard,
  create: createHazard,
  update: updateHazard,
  delete: deleteHazard,
};

const hazardRouter = createRouter(
  hazardController,
  validatePostHazard,
  validatePutHazard,
);

export default hazardRouter;