const express = require('express');
const { gettouchour , contactme } = require('../Controller/Contactme');
const router = express.Router(); // Create a new router instance

router.post('/contact',gettouchour); // Define the route for handling contact form submissions
router.post('/contactme',contactme); // Define the route for handling contact form submissions

exports.router = router; // Export the router for use in other files