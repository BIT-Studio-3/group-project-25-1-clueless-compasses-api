/**
 * @swagger
 * components:
 *   schemas:
 *     Hazard:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *           example: "cba13bb1-dff5-46d0-bfd7-779a0b9db34e"
 *         agency:
 *           type: string
 *           example: "Civil Defence"
 *         address:
 *           type: string
 *           example: "123 Emergency Lane, Wellington"
 *         severity:
 *           type: string
 *           example: "High"
 *         status:
 *           type: string
 *           example: "Active"
 *         contactInfo:
 *           type: string
 *           example: "0800 DEFENCE"
 *         source:
 *           type: string
 *           example: "ODT"
 *         relevantDetails:
 *           type: string
 *           example: "Flooding in residential area"
 *         createdAt:
 *           type: string
 *           format: date-time
 *           example: "2025-05-07T12:00:00Z"
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           example: "2025-05-07T12:00:00Z"
 */

/**
/**
 * @swagger
 * /api/v1/hazards:
 *   post:
 *     summary: Create a new hazard
 *     tags:
 *       - Hazard
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - agency
 *               - address
 *               - severity
 *               - status
 *               - contactInfo
 *               - relevantDetails
 *             properties:
 *               agency:
 *                 type: string
 *               address:
 *                 type: string
 *               severity:
 *                 type: string
 *               status:
 *                 type: string
 *               contactInfo:
 *                 type: string
 *               relevantDetails:
 *                 type: string
 *             example:
 *               agency: "Civil Defence"
 *               address: "123 Emergency Lane, Wellington"
 *               severity: "High"
 *               status: "Active"
 *               contactInfo: "0800 DEFENCE"
 *               source: "ODT"
 *               relevantDetails: "Flooding in residential area, water levels rising rapidly"
 *     responses:
 *       '201':
 *         description: Hazard successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Hazard'
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/hazards:
 *   get:
 *     summary: Get all hazards
 *     tags:
 *       - Hazard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: query
 *         name: agency
 *         schema:
 *           type: string
 *       - in: query
 *         name: address
 *         schema:
 *           type: string
 *       - in: query
 *         name: severity
 *         schema:
 *           type: string
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *       - in: query
 *         name: contactInfo
 *         schema:
 *           type: string
 *       - in: query
 *         name: source
 *         schema:
 *           type: string
 *       - in: query
 *         name: relevantDetails
 *         schema:
 *           type: string
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: "id"
 *           enum: [id, agency, severity, status]
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           default: "asc"
 *           enum: [asc, desc]
 *     responses:
 *       '200':
 *         description: A list of hazards
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: ","
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Hazard'
 *       '404':
 *         description: No hazards found
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/hazards/{id}:
 *   get:
 *     summary: Get a hazard by ID
 *     tags:
 *       - Hazard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The hazard ID
 *     responses:
 *       '200':
 *         description: Hazard data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Hazard'
 *       '404':
 *         description: No hazard found with the provided ID
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/hazards/{id}:
 *   put:
 *     summary: Update a hazard by ID
 *     tags:
 *       - Hazard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The hazard ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Hazard'
 *     responses:
 *       '200':
 *         description: Hazard successfully updated
 *       '404':
 *         description: No hazard found with the provided ID
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * /api/v1/hazards/{id}:
 *   delete:
 *     summary: Delete a hazard by ID
 *     tags:
 *       - Hazard
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The hazard ID
 *     responses:
 *       '200':
 *         description: Hazard successfully deleted
 *       '404':
 *         description: No hazard found with the provided ID
 *       '500':
 *         description: Internal server error
 */