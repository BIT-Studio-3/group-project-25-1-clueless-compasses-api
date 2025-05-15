import Joi from "joi";

const validatePostHazard = (req, res, next) => {
    const hazardSchema = Joi.object({
        agency: Joi.string().min(3).max(100).required().messages({
            "string.base": "agency should be a string",
            "string.empty": "agency cannot be empty",
            "string.min": "agency should have a minimum length of {#limit}",
            "string.max": "agency should have a maximum length of {#limit}",
            "any.required": "agency is required",
        }),
        address: Joi.string().min(3).max(200).required().messages({
            "string.base": "address should be a string",
            "string.empty": "address cannot be empty",
            "string.min": "address should have a minimum length of {#limit}",
            "string.max": "address should have a maximum length of {#limit}",
            "any.required": "address is required",
        }),
        severity: Joi.string().min(3).max(50).required().messages({
            "string.base": "severity should be a string",
            "string.empty": "severity cannot be empty",
            "string.min": "severity should have a minimum length of {#limit}",
            "string.max": "severity should have a maximum length of {#limit}",
            "any.required": "severity is required",
        }),
        status: Joi.string().min(3).max(50).required().messages({
            "string.base": "status should be a string",
            "string.empty": "status cannot be empty",
            "string.min": "status should have a minimum length of {#limit}",
            "string.max": "status should have a maximum length of {#limit}",
            "any.required": "status is required",
        }),
        contactInfo: Joi.string().min(3).max(100).required().messages({
            "string.base": "contactInfo should be a string",
            "string.empty": "contactInfo cannot be empty",
            "string.min": "contactInfo should have a minimum length of {#limit}",
            "string.max": "contactInfo should have a maximum length of {#limit}",
            "any.required": "contactInfo is required",
        }),
        RelevantDetails: Joi.string().min(3).max(500).required().messages({
            "string.base": "RelevantDetails should be a string",
            "string.empty": "RelevantDetails cannot be empty",
            "string.min": "RelevantDetails should have a minimum length of {#limit}",
            "string.max": "RelevantDetails should have a maximum length of {#limit}",
            "any.required": "RelevantDetails is required",
        }),
        Source: Joi.string().min(3).max(500).required().messages({
            "string.base": "source should be a string",
            "string.empty": "source cannot be empty",
            "string.min": "source should have a minimum length of {#limit}",
            "string.max": "source should have a maximum length of {#limit}",
            "any.required": "source is required",
        }),
    });

    const { error } = hazardSchema.validate(req.body);

    if (error) {
        return res.status(409).json({
            message: error.details[0].message,
        });
    }

    next();
};

const validatePutHazard = (req, res, next) => {
    const hazardSchema = Joi.object({
        agency: Joi.string().min(3).max(100).optional().messages({
            "string.base": "agency should be a string",
            "string.empty": "agency cannot be empty",
            "string.min": "agency should have a minimum length of {#limit}",
            "string.max": "agency should have a maximum length of {#limit}",
        }),
        address: Joi.string().min(3).max(200).optional().messages({
            "string.base": "address should be a string",
            "string.empty": "address cannot be empty",
            "string.min": "address should have a minimum length of {#limit}",
            "string.max": "address should have a maximum length of {#limit}",
        }),
        severity: Joi.string().min(3).max(50).optional().messages({
            "string.base": "severity should be a string",
            "string.empty": "severity cannot be empty",
            "string.min": "severity should have a minimum length of {#limit}",
            "string.max": "severity should have a maximum length of {#limit}",
        }),
        status: Joi.string().min(3).max(50).optional().messages({
            "string.base": "status should be a string",
            "string.empty": "status cannot be empty",
            "string.min": "status should have a minimum length of {#limit}",
            "string.max": "status should have a maximum length of {#limit}",
        }),
        contactInfo: Joi.string().min(3).max(100).optional().messages({
            "string.base": "contactInfo should be a string",
            "string.empty": "contactInfo cannot be empty",
            "string.min": "contactInfo should have a minimum length of {#limit}",
            "string.max": "contactInfo should have a maximum length of {#limit}",
        }),
        RelevantDetails: Joi.string().min(3).max(500).optional().messages({
            "string.base": "RelevantDetails should be a string",
            "string.empty": "RelevantDetails cannot be empty",
            "string.min": "RelevantDetails should have a minimum length of {#limit}",
            "string.max": "RelevantDetails should have a maximum length of {#limit}",
        }),
        Source: Joi.string().min(3).max(500).optional().messages({
            "string.base": "source should be a string",
            "string.empty": "source cannot be empty",
            "string.min": "source should have a minimum length of {#limit}",
            "string.max": "source should have a maximum length of {#limit}",
        }),
    }).min(1);

    const { error } = hazardSchema.validate(req.body);

    if (error) {
        return res.status(409).json({
            message: error.details[0].message,
        });
    }

    next();
};

export { validatePostHazard, validatePutHazard };