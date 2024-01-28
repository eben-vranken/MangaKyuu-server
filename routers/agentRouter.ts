const express = require("express");
const agentController = require('../controllers/agentController');
const router = express.Router();

import catchAsync from '../middleware/errorHandler';

// Enable CORS for this specific route
router.post('', catchAsync((res: any) => {
    // Set CORS headers for this route
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Call the actual controller function
    agentController.getTranslationFromSentence;
}));

module.exports = router;
