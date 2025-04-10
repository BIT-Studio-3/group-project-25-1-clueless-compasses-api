import Joi from "joi";

const validatePostUser = (req, res, next) => {
    const userSchema = Joi.object({
        firstName: Joi.string().min(3).max(100).required().messages({
            "string.base": "firstName should be a string",
            "string.empty": "firstName cannot be empty",
            "string.min": "firstName should have a minimum length of {#limit}",
            "string.max": "firstName should have a maximum length of {#limit}",
            "any.required": "firstName is required",
        }),
        lastName: Joi.string().min(3).max(100).required().messages({
            "string.base": "lastName should be a string",
            "string.empty": "lastName cannot be empty",
            "string.min": "lastName should have a minimum length of {#limit}",
            "string.max": "lastName should have a maximum length of {#limit}",
            "any.required": "lastName is required",
        }),
        emailAddress: Joi.string().min(3).max(100).required().messages({
            "string.base": "emailAddress should be a string",
            "string.empty": "emailAddress cannot be empty",
            "string.min": "emailAddress should have a minimum length of {#limit}",
            "string.max": "emailAddress should have a maximum length of {#limit}",
            "any.required": "emailAddress is required",
        }),
        password: Joi.string().min(3).max(100).required().messages({
            "string.base": "password should be a string",
            "string.empty": "password cannot be empty",
            "string.min": "password should have a minimum length of {#limit}",
            "string.max": "password should have a maximum length of {#limit}",
            "any.required": "password is required",
        }),
    });

    const { error } = userSchema.validate(req.body);

    if (error) {
        return res.status(409).json({
            message: error.details[0].message,
        });
    }

    next();
};

const validatePutUser = (req, res, next) => {
    const userSchema = Joi.object({
        firstName: Joi.string().min(3).max(100).optional().messages({
            "string.base": "firstName should be a string",
            "string.empty": "firstName cannot be empty",
            "string.min": "firstName should have a minimum length of {#limit}",
            "string.max": "firstName should have a maximum length of {#limit}",
        }),
        lastName: Joi.string().min(3).max(100).optional().messages({
            "string.base": "lastName should be a string",
            "string.empty": "lastName cannot be empty",
            "string.min": "lastName should have a minimum length of {#limit}",
            "string.max": "lastName should have a maximum length of {#limit}",
        }),
        emailAddress: Joi.string().min(3).max(100).optional().messages({
            "string.base": "emailAddress should be a string",
            "string.empty": "emailAddress cannot be empty",
            "string.min": "emailAddress should have a minimum length of {#limit}",
            "string.max": "emailAddress should have a maximum length of {#limit}",
        }),
        password: Joi.string().min(3).max(100).optional().messages({
            "string.base": "password should be a string",
            "string.empty": "password cannot be empty",
            "string.min": "password should have a minimum length of {#limit}",
            "string.max": "password should have a maximum length of {#limit}",
        }),
    }).min(1); // Ensure at least one field is being updated

    const { error } = userSchema.validate(req.body);

    if (error) {
        return res.status(409).json({
            message: error.details[0].message,
        });
    }

    next();
};

export { validatePostUser, validatePutUser };