const SuccessResponse = require('../../helpers/successResponse');
const BadRequestResponse = require('../../helpers/badRequestResponse');
const fetchService = require('../../services/events/fetchEvents');

async function events(req, res) {
  try {
    const result = await fetchService(req.query);
    new SuccessResponse('Success', result, 200).send(res);
  } catch (error) {
    new BadRequestResponse(error.message).send(res);
  }
}

module.exports = events;
