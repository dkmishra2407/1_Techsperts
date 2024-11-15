const LoanHistory = require('../models/LoanHistory'); // Adjust the path based on your directory structure

// Create a new loan history entry
const createLoanHistory = async (req, res) => {
  try {
    const newLoanHistory = new LoanHistory({
      LoanId: req.body.LoanId,
      LoanStatus: req.body.LoanStatus,
      LoanDescribtion: req.body.LoanDescribtion,
    });

    const savedLoanHistory = await newLoanHistory.save();
    res.status(201).json(savedLoanHistory);
  } catch (error) {
    res.status(500).json({ message: 'Error creating loan history', error });
  }
};

// Get all loan history entries
const getAllLoanHistory = async (req, res) => {
  try {
    const loanHistories = await LoanHistory.find();
    res.status(200).json(loanHistories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loan history', error });
  }
};

// Get a specific loan history entry by LoanId
const getLoanHistoryById = async (req, res) => {
  try {
    const loanHistory = await LoanHistory.findOne({ LoanId: req.params.loanId });
    if (!loanHistory) {
      return res.status(404).json({ message: 'Loan history not found' });
    }
    res.status(200).json(loanHistory);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching loan history by ID', error });
  }
};

// Update loan history by LoanId
const updateLoanHistory = async (req, res) => {
  try {
    const updatedLoanHistory = await LoanHistory.findOneAndUpdate(
      { LoanId: req.params.loanId },
      {
        LoanStatus: req.body.LoanStatus,
        LoanDescribtion: req.body.LoanDescribtion,
      },
      { new: true }
    );

    if (!updatedLoanHistory) {
      return res.status(404).json({ message: 'Loan history not found' });
    }

    res.status(200).json(updatedLoanHistory);
  } catch (error) {
    res.status(500).json({ message: 'Error updating loan history', error });
  }
};

// Delete loan history by LoanId
const deleteLoanHistory = async (req, res) => {
  try {
    const deletedLoanHistory = await LoanHistory.findOneAndDelete({ LoanId: req.params.loanId });

    if (!deletedLoanHistory) {
      return res.status(404).json({ message: 'Loan history not found' });
    }

    res.status(200).json({ message: 'Loan history deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting loan history', error });
  }
};

module.exports = {
  createLoanHistory,
  getAllLoanHistory,
  getLoanHistoryById,
  updateLoanHistory,
  deleteLoanHistory,
};
