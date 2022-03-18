const Joi = require('joi');
const errorResponse = require('../../helpers/apiError');
const specValidator = require('../../helpers/specValidator');
const EventModel = require('../../models/events');

/**
 * @typedef {Object} ServiceData
 * @property {string} category
 * @property {string} title
 */

const serviceSchema = Joi.object({
  category: Joi.string().trim(),
  title: Joi.string().trim(),
});

/**
 * @param {ServiceData} data
 * @summary fetches events
 */
function service(data) {
  const locals = {
    data,
  };

  async function servicePromiseExecutor(resolve, reject) {
    try {
      const { category, title } = specValidator(serviceSchema, locals.data);
      const query = {};

      if(title) {
        query.title = new RegExp(title, "gi");
      }
      if (category) {
        query.category = new RegExp(category, "gi");;
      }

      locals.events = await EventModel.find(query).sort({ createdAt: 'desc' });

      resolve(locals.events);
    } catch (e) {
      errorResponse.handleError(reject, e);
    }
  }
  return new Promise(servicePromiseExecutor);
}
module.exports = service;
