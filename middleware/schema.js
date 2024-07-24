let validateRequestService = require('./validation');
const Joi = require('joi');

module.exports = {
    bookSchema: function (req, res, next) {
        const schema = Joi.object({
            title: Joi.string().required(),
            author: Joi.string().required(),
            year: Joi.number().required()
            });
        validateRequestService.validateRequest(req, next, schema);
    }
};