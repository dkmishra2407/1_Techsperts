import React, { useState } from 'react';
import axios from 'axios';

const AppForm = () => {
    // State to hold form data
    const [formData, setFormData] = useState({
        no_of_dependents: 0,
        education: '',
        self_employed: '',
        income_annum: 0,
        loan_amount: 0,
        loan_term: 0,
        cibil_score: 300,
        residential_assets_value: 0,
        commercial_assets_value: 0,
        luxury_assets_value: 0,
        bank_asset_value: 0
    });

    // Handle form input changes
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await axios.post('http://localhost:5000/predict', formData, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            alert(`Loan Status: ${response.data.loan_status}`);
        } catch (error) {
            console.error('Error submitting form data:', error);
            alert('An error occurred while submitting the form.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
            <form className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6" onSubmit={handleSubmit}>
                <section className="space-y-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800">Loan Application</h1>

                    {/* No of Dependents */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Number of Dependents</label>
                        <input
                            type="number"
                            name="no_of_dependents"
                            value={formData.no_of_dependents}
                            onChange={handleChange}
                            min="0"
                            placeholder="Enter number of dependents"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Education */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Education</label>
                        <input
                            type="text"
                            name="education"
                            value={formData.education}
                            onChange={handleChange}
                            placeholder="Enter highest education level"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Self Employed */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Self-Employed</label>
                        <select
                            name="self_employed"
                            value={formData.self_employed}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select</option>
                            <option value="1">Yes</option>
                            <option value="0">No</option>
                        </select>
                    </div>

                    {/* Income Annum */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Annual Income (in Lakhs)</label>
                        <input
                            type="number"
                            name="income_annum"
                            value={formData.income_annum}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            placeholder="Enter income in lakhs"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Loan Amount */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Loan Amount (in Lakhs)</label>
                        <input
                            type="number"
                            name="loan_amount"
                            value={formData.loan_amount}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            placeholder="Enter loan amount in lakhs"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Loan Term */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Loan Term (in Years)</label>
                        <input
                            type="number"
                            name="loan_term"
                            value={formData.loan_term}
                            onChange={handleChange}
                            min="0"
                            placeholder="Enter loan term"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* CIBIL Score */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">CIBIL Score</label>
                        <input
                            type="number"
                            name="cibil_score"
                            value={formData.cibil_score}
                            onChange={handleChange}
                            min="300"
                            max="900"
                            placeholder="Enter CIBIL score"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Residential Assets Value */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Residential Assets Value (in Lakhs)</label>
                        <input
                            type="number"
                            name="residential_assets_value"
                            value={formData.residential_assets_value}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            placeholder="Enter residential asset value"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Commercial Assets Value */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Commercial Assets Value (in Lakhs)</label>
                        <input
                            type="number"
                            name="commercial_assets_value"
                            value={formData.commercial_assets_value}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            placeholder="Enter commercial asset value"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Luxury Assets Value */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Luxury Assets Value (in Lakhs)</label>
                        <input
                            type="number"
                            name="luxury_assets_value"
                            value={formData.luxury_assets_value}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            placeholder="Enter luxury asset value"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Bank Asset Value */}
                    <div className="space-y-2">
                        <label className="block text-gray-700">Bank Asset Value (in Lakhs)</label>
                        <input
                            type="number"
                            name="bank_asset_value"
                            value={formData.bank_asset_value}
                            onChange={handleChange}
                            min="0"
                            step="0.01"
                            placeholder="Enter bank asset value"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                </section>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AppForm;