/**
 * @file Manages all operations related to incidents
 * @author Clueless Compassess Studio 3 Group
 */

import GenericRepository from '../../repositories/generic.js';

const incidentRepository = new GenericRepository('incident');

const returnData = {
    id: true,
    description: true,
    cause: true,
    suburb: true,
    street: true,
    buildingNumber: true,
    recordedAt: true,
    photoUrl: true,
};

const createIncident = async (req, res) => {
    // Try/catch blocks are used to handle exceptions
    try {
        await incidentRepository.create(req.body);
        const newIncidents = await incidentRepository.findAll(returnData);

        // Send a JSON response
        return res.status(201).json({
            message: "Incident successfully created",
            data: newIncidents,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const getIncidents = async (req, res) => {
    try {
        // Extract filters from the query parameters
        const filters = {
            description: req.query.description || undefined,
            cause: req.query.cause || undefined,
            suburb: req.query.suburb || undefined,
            street: req.query.street || undefined,
            buildingNumber: req.query.buildingNumber || undefined,
        };
        
        // Extract the sortBy and sortOrder parameters from the query
        const sortBy = req.query.sortBy || "id";
        const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";

        // Retrieve incidents based on the filters, sorted by the specified column and order
        const incidents = await incidentRepository.findAll(returnData, filters, sortBy, sortOrder);

        if (!incidents) {
            return res.status(404).json({ message: "No incidents found" });
        }

        return res.status(200).json({
            //Shows "no data" when database is empty
            msg: incidents.length === 0 ? "No data" : ",",
            data: incidents,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const getIncident = async (req, res) => {
    try {
        const incident = await incidentRepository.findById(req.params.id);

        // Check if there is no incident
        if (!incident) {
            return res.status(404).json({
                message: `No incident with the id: ${req.params.id} found`,
            });
        }

        return res.status(200).json({
            data: incident,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const updateIncident = async (req, res) => {
    try {
        // Find the incident by id
        let incident = await incidentRepository.findById(req.params.id);

        // Check if there is no incident
        if (!incident) {
            return res.status(404).json({
                message: `No incident with the id: ${req.params.id} found`,
            });
        }

        incidents = await incidentRepository.update(req.params.id, req.body);

        return res.status(200).json({
            message: `Incident with the id: ${req.params.id} successfully updated`,
            data: incident,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const deleteIncident = async (req, res) => {
    try {
        const incident = await incidentRepository.findById(req.params.id);
        if (!incident) {
            return res.status(404).json({
                message: `No incident with the id: ${req.params.id} found`,
            });
        }
        await incidentRepository.delete(req.params.id);
        return res.json({
            message: `Incident with the id: ${req.params.id} successfully deleted`,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

export {
    createIncident,
    getIncidents,
    getIncident,
    updateIncident,
    deleteIncident,
};