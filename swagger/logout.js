/**
 * @swagger
 * /api/v1/auth/logout:
 *   post:
 *     summary: Logs out a user by blacklisting their JWT token
 *     description: This route logs out the user by invalidating their JWT token and adds it to the blacklist.
 *     tags:
 *       - Auth
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Successfully logged out
 *       403:
 *         description: Invalid or missing token
 */

  