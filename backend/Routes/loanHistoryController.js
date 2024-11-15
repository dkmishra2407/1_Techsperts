const express = require('express');
const router = express.Router();
const loanHistoryController = require('../controllers/loanHistoryController'); // Adjust path

// Routes
router.post('/loanHistory', loanHistoryController.createLoanHistory);
router.get('/loanHistory', loanHistoryController.getAllLoanHistory);
router.get('/loanHistory/:loanId', loanHistoryController.getLoanHistoryById);

module.exports = router;
