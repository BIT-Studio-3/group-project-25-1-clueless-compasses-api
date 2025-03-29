/**
 * @file Defines all the routes related to the test / query
 * @author Clueless Compassess Studio 3 Group
 */

// Import the Express module
import express from 'express';

// Import the index controllers module
import { getIndex } from '../controllers/index.js';

// Create an Express router
const router = express.Router();

/**
 * @swagger
 * /:
 *   get:
 *     summary: Return a "Hello, World!" message
 *     description: This is the root directory endpoint that returns a simple "Hello, World!" message as a response.
 *     tags:
 *       - Hello World Endpoint
 *     responses:
 *       '200':
 *         description: A simple "Hello, World!" message is returned
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Hello, World!"
 */

// Create a GET route
router.get('/', getIndex);

// Export the router
export default router;
