/**
 * @swagger
 * components:
 *   schemas:
 *     Incident:
 *       type: object
 *       properties:
 *         id:
 *         description:
 *           type: string
 *           example: "Fire at the old warehouse"
 *         cause:
 *           type: string
 *           example: "Electrical malfunction"
 *         address:
 *           type: string
 *           example: "420 Castle street"  
 *         recordedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-04-25T14:00:00Z"
 *         photoUrl:
 *           type: string
 *           example: "https://example.com/photo.jpg"
 *   securitySchemes:
 *     BearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 *   security:
 *     - BearerAuth: []
 */

/**
 * @swagger
 * /api/v1/incidents:
 *   post:
 *     summary: Create a new incident
 *     tags:
 *       - Incident
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Incident'
 *     responses:
 *       '201':
 *         description: Incident successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Incident successfully created"
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Incident'
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/incidents:
 *   get:
 *     summary: Get all incidents
 *     tags:
 *       - Incident
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *         description: Filter incidents by description
 *       - in: query
 *         name: cause
 *         schema:
 *           type: string
 *         description: Filter incidents by cause
 *       - in: query
 *         name: address
 *         schema:
 *           type: string
 *         description: Filter incidents by address
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: "id"
 *           enum: [id, description, cause, address, recordedAt]
 *         description: Field to sort the incidents by (default is 'id')
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           default: "asc"
 *           enum: [asc, desc]
 *         description: Order to sort the incidents by (default is 'asc')
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Incident'
 *       '404':
 *         description: No incidents found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/incidents/{id}:
 *   get:
 *     summary: Get an incident by ID
 *     tags:
 *       - Incident
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The incident ID
 *     responses:
 *       '200':
 *         description: Success
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Incident'
 *       '404':
 *         description: No incident found with the provided ID
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/incidents/{id}:
 *   put:
 *     summary: Update an incident by ID
 *     tags:
 *       - Incident
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The incident ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Incident'
 *     responses:
 *       '200':
 *         description: Incident successfully updated
 *       '404':
 *         description: No incident found with the provided ID
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/incidents/{id}:
 *   delete:
 *     summary: Delete an incident by ID
 *     tags:
 *       - Incident
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The incident ID
 *     responses:
 *       '200':
 *         description: Incident successfully deleted
 *       '404':
 *         description: No incident found with the provided ID
 *       '500':
 *         description: Internal server error
 */