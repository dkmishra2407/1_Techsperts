const mongoose = require('mongoose');

const LoanHistorySchema = new mongoose.Schema({
    LoanId: { type: String, required: true },
    LoanStatus: { type: String, required: true },
    LoanDescribtion: { type: String, required: true },
})

const LoanHistory = mongoose.model("LoanHistory", LoanHistorySchema);

module.exports = LoanHistory;