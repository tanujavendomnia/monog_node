const express = require('express');
const router = express.Router();
const blogController = require('../controllers/BlogController'); 

// Route to list blog entries
router.get('/blogs', blogController.list);
router.post('/blogs', blogController.create);

module.exports = router;
