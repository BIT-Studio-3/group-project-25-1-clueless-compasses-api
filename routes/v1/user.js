/**
 * @file This file exports the router for the user routes.
 * @author Clueless Compassess Studio 3 Group
 */

import createRouter from "./base.js";

import {
  getUser,
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from '../../controllers/v1/user.js';

import {
  validatePostUser,
  validatePutUser,
} from "../../middleware/validation/user.js";

const userController = {
  get: getUsers,
  getById: getUser,
  create: createUser,
  update: updateUser,
  delete: deleteUser,
};

const userRouter = createRouter(
  userController,
  validatePostUser,
  validatePutUser,
);

export default userRouter;