// routes.js
const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController'); 

// Route to list blog entries
router.get('/blogs', blogController.list);

module.exports = router;
