const Joi = require('joi');
const errorResponse = require('../../helpers/apiError');
const specValidator = require('../../helpers/specValidator');
const EventModel = require('../../models/events');

/**
 * @typedef {Object} ServiceData
 * @property {string} category
 * @property {string} title
 * @property {string} address
 * @property {boolean} isVirtual
 * @property {string} description
 */

const serviceSchema = Joi.object({
  category: Joi.string().trim(),
  title: Joi.string().trim(),
  address: Joi.string().trim(),
  isVirtual: Joi.boolean(),
  description: Joi.string().trim(),
});

/**
 * @param {ServiceData} data
 * @summary creates an event
 */
function service(data) {
  const locals = {
    data,
  };

  async function servicePromiseExecutor(resolve, reject) {
    try {
      const params = specValidator(serviceSchema, locals.data);
      locals.events = await EventModel.create(params);
      resolve(locals.events);
    } catch (e) {
      errorResponse.handleError(reject, e);
    }
  }
  return new Promise(servicePromiseExecutor);
}
module.exports = service;
