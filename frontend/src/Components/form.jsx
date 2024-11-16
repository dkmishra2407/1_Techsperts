import React, { useState } from "react";
import axios from "axios";

const AppForm = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    no_of_dependents: 0,
    education: "",
    self_employed: "",
    income_annum: 0,
    loan_amount: 0,
    loan_term: 0,
    cibil_score: 300,
    residential_assets_value: 0,
    commercial_assets_value: 0,
    luxury_assets_value: 0,
    bank_asset_value: 0,
  });

  const [responseReport, setResponseReport] = useState(null); // To store formatted response
  const [isLoading, setIsLoading] = useState(false); // To handle loading state

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setResponseReport(null);

    try {
      const response = await axios.post("http://localhost:5000/predict", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response.data)
      setResponseReport({
        loanStatus: response.data.loan_status,
        reasonsSummary: response.data.reasons_summary,
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
      setResponseReport({
        error: "An error occurred while processing your request. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }

    console.log(responseReport)
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
      <form
        className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6"
        onSubmit={handleSubmit}
      >
        <section className="space-y-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">Loan Application</h1>

          {/* Number of Dependents */}
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

          {/* Self-Employed */}
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

          {/* Additional Inputs */}
          {[
            { name: "income_annum", label: "Annual Income (in Lakhs)", type: "number" },
            { name: "loan_amount", label: "Loan Amount (in Lakhs)", type: "number" },
            { name: "loan_term", label: "Loan Term (in Years)", type: "number" },
            { name: "cibil_score", label: "CIBIL Score", type: "number", min: 300, max: 900 },
            { name: "residential_assets_value", label: "Residential Assets Value (in Lakhs)", type: "number" },
            { name: "commercial_assets_value", label: "Commercial Assets Value (in Lakhs)", type: "number" },
            { name: "luxury_assets_value", label: "Luxury Assets Value (in Lakhs)", type: "number" },
            { name: "bank_asset_value", label: "Bank Asset Value (in Lakhs)", type: "number" },
          ].map(({ name, label, type, ...rest }) => (
            <div className="space-y-2" key={name}>
              <label className="block text-gray-700">{label}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                placeholder={`Enter ${label.toLowerCase()}`}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...rest}
              />
            </div>
          ))}
        </section>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            disabled={isLoading}
            className={`px-6 py-2 ${
              isLoading ? "bg-blue-300" : "bg-blue-500 hover:bg-blue-600"
            } text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300`}
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>

        {/* Response Report */}
        {responseReport && (
            <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow">
                {responseReport.error ? (
                <p className="text-red-500 font-bold">{responseReport.error}</p>
                ) : (
                <div>
                    <h2 className="text-xl font-bold text-gray-800">Loan Status:</h2>
                    <p className="text-green-600 font-semibold">{responseReport.loanStatus.trim()}</p>

                    <h3 className="text-lg font-bold text-gray-800 mt-4">Reason Summary:</h3>
                    <ul className="list-disc ml-6 text-gray-700">
                    {Object.entries(responseReport.reasonsSummary).map(([key, value]) => (
                        <li key={key}>
                        <span className="font-semibold capitalize">{key}:</span> {value}
                        </li>
                    ))}
                    </ul>
            </div>
            )}
        </div>
        )}

      </form>
    </div>
  );
};

export default AppForm;
