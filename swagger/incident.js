/**
 * @swagger
 * components:
 *   schemas:
 *     Incident:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           format: uuid
 *         description:
 *           type: string
 *           example: Smoke detected in electrical cabinet
 *         cause:
 *           type: string
 *           example: Short circuit in power relay
 *         source:
 *           type: string
 *           example: BMS (Building Management System)
 *         address:
 *           type: string
 *           example: 77 Queen Street, Auckland CBD, Auckland 1010, New Zealand
 *         recordedAt:
 *           type: string
 *           format: date-time
 *           example: 2025-05-23T14:30:00Z
 *         photoUrl:
 *           type: string
 *           format: uri
 *           example: /uploads/incidents/electrical-fire-0523.jpg
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     IncidentInput:
 *       type: object
 *       required:
 *         - description
 *         - cause
 *         - address
 *         - recordedAt
 *         - source
 *       properties:
 *         description:
 *           type: string
 *           example: Smoke detected in server room
 *         cause:
 *           type: string
 *           example: HVAC system overheating
 *         source:
 *           type: string
 *           example: Fire Alarm Panel
 *         address:
 *           type: string
 *           example: 456 Industrial Avenue, Christchurch 8011
 *         recordedAt:
 *           type: string
 *           format: date-time
 *           example: 2025-05-23T14:30:00Z
 *
 * tags:
 *   - name: Incidents
 */

/**
 * @swagger
 * /api/v1/incidents:
 *   post:
 *     summary: Create a new incident report
 *     tags: [Incidents]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             required:
 *               - description
 *               - cause
 *               - address
 *               - recordedAt
 *               - source
 *             properties:
 *               description:
 *                 type: string
 *               cause:
 *                 type: string
 *               source:
 *                 type: string
 *               address:
 *                 type: string
 *               recordedAt:
 *                 type: string
 *                 format: date-time
 *               photo:
 *                 type: string
 *                 format: binary
 *     responses:
 *       201:
 *         description: Incident successfully created
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Incident successfully created
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Incident'
 *       409:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Missing required fields
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/incidents:
 *   get:
 *     summary: Get all incidents
 *     tags: [Incidents]
 *     parameters:
 *       - in: query
 *         name: description
 *         schema:
 *           type: string
 *       - in: query
 *         name: cause
 *         schema:
 *           type: string
 *       - in: query
 *         name: source
 *         schema:
 *           type: string
 *         description: Filter incidents by source
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
 *           enum: [id, description, cause, source, address, recordedAt]
 *         description: Field to sort the incidents by (default is 'id')
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *           enum: [asc, desc]
 *     responses:
 *       200:
 *         description: A list of incidents
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   example: Data retrieved successfully
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Incident'
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/incidents/{id}:
 *   get:
 *     summary: Get a specific incident by ID
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           format: uuid
 *     responses:
 *       200:
 *         description: The incident data
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 data:
 *                   $ref: '#/components/schemas/Incident'
 *       404:
 *         description: Incident not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/incidents/{id}:
 *   put:
 *     summary: Update an incident by ID
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/IncidentInput'
 *     responses:
 *       200:
 *         description: Incident successfully updated
 *       404:
 *         description: Incident not found
 *       500:
 *         description: Server error
 */

/**
 * @swagger
 * /api/v1/incidents/{id}:
 *   delete:
 *     summary: Delete an incident by ID
 *     tags: [Incidents]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Incident successfully deleted
 *       404:
 *         description: Incident not found
 *       500:
 *         description: Server error
 */