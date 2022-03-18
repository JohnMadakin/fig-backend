const express = require('express');
const createEvents = require('../../controllers/events/create');
const fetchEvents = require('../../controllers/events/search');

const router = express.Router();

router.post('/events', createEvents);
router.get('/events', fetchEvents);

module.exports = router;
