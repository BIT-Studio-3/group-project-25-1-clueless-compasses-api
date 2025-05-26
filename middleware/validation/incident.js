import Joi from 'joi';
const validatePostIncident = (req, res, next) => {
  // ✅ Coerce recordedAt into a Date object if it's a string (common with FormData)
  if (req.body.recordedAt && typeof req.body.recordedAt === 'string') {
    req.body.recordedAt = new Date(req.body.recordedAt);
  }

  const incidentSchema = Joi.object({
    description: Joi.string().min(3).max(500).required().messages({
      'string.base': 'description should be a string',
      'string.empty': 'description cannot be empty',
      'string.min': 'description should have a minimum length of {#limit}',
      'string.max': 'description should have a maximum length of {#limit}',
      'any.required': 'description is required',
    }),
    cause: Joi.string().min(3).max(200).required().messages({
      'string.base': 'cause should be a string',
      'string.empty': 'cause cannot be empty',
      'string.min': 'cause should have a minimum length of {#limit}',
      'string.max': 'cause should have a maximum length of {#limit}',
      'any.required': 'cause is required',
    }),
    address: Joi.string().min(5).max(255).required().messages({
      'string.base': 'address should be a string',
      'string.empty': 'address cannot be empty',
      'string.min': 'address should have a minimum length of {#limit}',
      'string.max': 'address should have a maximum length of {#limit}',
      'any.required': 'address is required',
    }),
    recordedAt: Joi.date().required().messages({
      'date.base': 'recordedAt should be a valid date',
      'any.required': 'recordedAt is required',
    }),
    photoUrl: Joi.string().uri().optional().allow(null, '').messages({
      'string.base': 'photoUrl should be a string',
      'string.uri': 'photoUrl should be a valid URL',
    }),
  });

  const { error } = incidentSchema.validate(req.body);
  console.log('req.body:', req.body);
  console.log('req.file:', req.file);

  if (error) {
    return res.status(409).json({
      message: error.details[0].message,
    });
  }

  next();
};

const validatePutIncident = (req, res, next) => {
  const incidentSchema = Joi.object({
    description: Joi.string().min(3).max(500).optional().messages({
      'string.base': 'description should be a string',
      'string.empty': 'description cannot be empty',
      'string.min': 'description should have a minimum length of {#limit}',
      'string.max': 'description should have a maximum length of {#limit}',
    }),
    cause: Joi.string().min(3).max(200).optional().messages({
      'string.base': 'cause should be a string',
      'string.empty': 'cause cannot be empty',
      'string.min': 'cause should have a minimum length of {#limit}',
      'string.max': 'cause should have a maximum length of {#limit}',
    }),
    address: Joi.string().min(3).max(100).optional().messages({
      'string.base': 'address should be a string',
      'string.empty': 'address cannot be empty',
      'string.min': 'address should have a minimum length of {#limit}',
      'string.max': 'address should have a maximum length of {#limit}',
    }),
    recordedAt: Joi.date().optional().messages({
      'date.base': 'recordedAt should be a valid date',
    }),
    photoUrl: Joi.string().uri().optional().allow(null, '').messages({
      'string.base': 'photoUrl should be a string',
      'string.uri': 'photoUrl should be a valid URL',
    }),
  }).min(1);

  const { error } = incidentSchema.validate(req.body);

  if (error) {
    return res.status(409).json({
      message: error.details[0].message,
    });
  }

  next();
};

export { validatePostIncident, validatePutIncident };
