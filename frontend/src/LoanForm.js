import React, { useState } from 'react';
import axios from 'axios';

const LoanForm = () => {
    const [formData, setFormData] = useState({
        no_of_dependents: 0,
        education: '',
        self_employed: '',
        income_annum: 0,
        loan_amount: 0,
        loan_term: 0,
        cibil_score: 0,
        residential_assets_value: 0,
        commercial_assets_value: 0,
        luxury_assets_value: 0,
        bank_asset_value: 0,
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData);
            alert(`Loan Status: ${response.data.loan_status}`);
        } catch (error) {
            console.error('Error fetching prediction:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* Add form fields for each feature */}
            <input type="number" name="no_of_dependents" onChange={handleChange} placeholder="No. of Dependents" required />
            <input type="text" name="education" onChange={handleChange} placeholder="Education" required />
            <input type="text" name="self_employed" onChange={handleChange} placeholder="Self Employed" required />
            <input type="number" name="income_annum" onChange={handleChange} placeholder="Income (Annum)" required />
            <input type="number" name="loan_amount" onChange={handleChange} placeholder="Loan Amount" required />
            <input type="number" name="loan_term" onChange={handleChange} placeholder="Loan Term" required />
            <input type="number" name="cibil_score" onChange={handleChange} placeholder="CIBIL Score" required />
            <input type="number" name="residential_assets_value" onChange={handleChange} placeholder="Residential Assets Value" required />
            <input type="number" name="commercial_assets_value" onChange={handleChange} placeholder="Commercial Assets Value" required />
            <input type="number" name="luxury_assets_value" onChange={handleChange} placeholder="Luxury Assets Value" required />
            <input type="number" name="bank_asset_value" onChange={handleChange} placeholder="Bank Asset Value" required />
            <button type="submit">Predict Loan Status</button>
        </form>
    );
};

export default LoanForm;
