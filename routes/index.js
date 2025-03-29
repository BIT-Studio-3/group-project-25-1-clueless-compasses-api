/**
 * @file Defines all the routes related to the test /Josh query
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
 * /Josh:
 *   get:
 *     summary: Get the response for Josh query
 *     tags:
 *       - Josh Query
 *     responses:
 *       '200':
 *         description: Success
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
router.get('/Josh', getIndex);

// Export the router
export default router;
