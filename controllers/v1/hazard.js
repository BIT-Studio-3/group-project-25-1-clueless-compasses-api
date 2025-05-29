/**
 * @file Manages all operations related to hazards
 * @author Clueless Compassess Studio 3 Group
 */

import GenericRepository from '../../repositories/generic.js';

const hazardRepository = new GenericRepository('hazard');

const returnData = {
    id: true,
    agency: true,
    address: true,
    severity: true,
    status: true,
    contactInfo: true,
    source: true,
    relevantDetails: true,
    createdAt: true,
    updatedAt: true
}
const createHazard = async (req, res) => {
    // Try/catch blocks are used to handle exceptions
    try {
        await hazardRepository.create(req.body);
        const newHazards = await hazardRepository.findAll(returnData);

        // Send a JSON response
        return res.status(201).json({
            message: "Hazard successfully created",
            data: newHazards,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const getHazards = async (req, res) => {
    try {
        // Extract filters from the query parameters
        const filters = {
            agency: req.query.agency || undefined,
            address: req.query.address || undefined,
            severity: req.query.severity || undefined,
            status: req.query.status || undefined,
            contactInfo: req.query.contactInfo || undefined,
            source: req.query.source || undefined,
            relevantDetails: req.query.relevantDetails || undefined,
        };

        // Extract the sortBy and sortOrder parameters from the query
        const sortBy = req.query.sortBy || "id";
        const sortOrder = req.query.sortOrder === "desc" ? "desc" : "asc";

        // Retrieve hazards based on the filters, sorted by the specified column and order
        const hazards = await hazardRepository.findAll(returnData, filters, sortBy, sortOrder);

        if (!hazards) {
            return res.status(404).json({ message: "No hazards found" });
        }

        return res.status(200).json({
            //Shows "no data" when database is empty
            msg: hazards.length === 0 ? "No data" : ",",
            data: hazards,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const getHazard = async (req, res) => {
    try {
        const hazard = await hazardRepository.findById(req.params.id);

        // Check if there is no hazard
        if (!hazard) {
            return res.status(404).json({
                message: `No hazard with the id: ${req.params.id} found`,
            });
        }

        return res.status(200).json({
            data: hazard,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const updateHazard = async (req, res) => {
    try {
        // Find the hazard by id
        let hazard = await hazardRepository.findById(req.params.id);

        // Check if there is no hazard
        if (!hazard) {
            return res.status(404).json({
                message: `No hazard with the id: ${req.params.id} found`,
            });
        }

        hazards = await hazardRepository.update(req.params.id, req.body);

        return res.status(200).json({
            message: `Hazard with the id: ${req.params.id} successfully updated`,
            data: hazard,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

const deleteHazard = async (req, res) => {
    try {
        const hazard = await hazardRepository.findById(req.params.id);
        if (!hazard) {
            return res.status(404).json({
                message: `No hazard with the id: ${req.params.id} found`,
            });
        }
        await hazardRepository.delete(req.params.id);
        return res.json({
            message: `Hazard with the id: ${req.params.id} successfully deleted`,
        });
    } catch (err) {
        return res.status(500).json({
            message: err.message,
        });
    }
};

export {
    createHazard,
    getHazards,
    getHazard,
    updateHazard,
    deleteHazard,
};