


// import React, { useState } from 'react';
// import axios from 'axios';

// const LoanForm = () => {
//     const [formData, setFormData] = useState({
//         no_of_dependents: 0,
//         education: '', // Will hold 1 or 0 for Graduate or Not Graduate
//         self_employed: '', // Will hold 1 or 0 for Yes or No
//         income_annum: 0,
//         loan_amount: 0,
//         loan_term: 0,
//         cibil_score: 0,
//         residential_assets_value: 0,
//         commercial_assets_value: 0,
//         luxury_assets_value: 0,
//         bank_asset_value: 0,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;

//         // If the field is education or self_employed, convert to binary
//         if (name === 'education') {
//             setFormData({ ...formData, education: value === 'Graduate' ? 1 : 0 });
//         } else if (name === 'self_employed') {
//             setFormData({ ...formData, self_employed: value === 'Yes' ? 1 : 0 });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/predict', formData);
//             alert(`Loan Status: ${response.data.loan_status}`);
//         } catch (error) {
//             console.error('Error fetching prediction:', error);
//             alert('Error fetching prediction');
//         }
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input type="number" name="no_of_dependents" onChange={handleChange} placeholder="No. of Dependents" required />
            
//             <div>
//                 <label>Education:</label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="education"
//                         value="Graduate"
//                         onChange={handleChange}
//                     />
//                     Graduate
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="education"
//                         value="Not Graduate"
//                         onChange={handleChange}
//                     />
//                     Not Graduate
//                 </label>
//             </div>

//             <div>
//                 <label>Self Employed:</label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="self_employed"
//                         value="Yes"
//                         onChange={handleChange}
//                     />
//                     Yes
//                 </label>
//                 <label>
//                     <input
//                         type="radio"
//                         name="self_employed"
//                         value="No"
//                         onChange={handleChange}
//                     />
//                     No
//                 </label>
//             </div>

//             <input type="number" name="income_annum" onChange={handleChange} placeholder="Income (Annum)" required />
//             <input type="number" name="loan_amount" onChange={handleChange} placeholder="Loan Amount" required />
//             <input type="number" name="loan_term" onChange={handleChange} placeholder="Loan Term" required />
//             <input type="number" name="cibil_score" onChange={handleChange} placeholder="CIBIL Score" required />
//             <input type="number" name="residential_assets_value" onChange={handleChange} placeholder="Residential Assets Value" required />
//             <input type="number" name="commercial_assets_value" onChange={handleChange} placeholder="Commercial Assets Value" required />
//             <input type="number" name="luxury_assets_value" onChange={handleChange} placeholder="Luxury Assets Value" required />
//             <input type="number" name="bank_asset_value" onChange={handleChange} placeholder="Bank Asset Value" required />

//             <button type="submit">Predict Loan Status</button>
//         </form>
//     );
// };

// export default LoanForm;



// import React, { useState } from 'react';
// import axios from 'axios';

// const LoanForm = () => {
//     const [formData, setFormData] = useState({
//         no_of_dependents: 0,
//         education: '',
//         self_employed: '',
//         income_annum: 0,
//         loan_amount: 0,
//         loan_term: 0,
//         cibil_score: 0,
//         residential_assets_value: 0,
//         commercial_assets_value: 0,
//         luxury_assets_value: 0,
//         bank_asset_value: 0,
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         if (name === 'education') {
//             setFormData({ ...formData, education: value === 'Graduate' ? 1 : 0 });
//         } else if (name === 'self_employed') {
//             setFormData({ ...formData, self_employed: value === 'Yes' ? 1 : 0 });
//         } else {
//             setFormData({ ...formData, [name]: value });
//         }
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://127.0.0.1:5000/predict', formData);
//             alert(`Loan Status: ${response.data.loan_status}`);
//         } catch (error) {
//             console.error('Error fetching prediction:', error);
//             alert('Error fetching prediction');
//         }
//     };

//     return (
//         <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
//             <h2 className="text-xl font-bold mb-4 text-center">Loan Prediction Form</h2>
//             <form onSubmit={handleSubmit} className="space-y-4">
//                 <input
//                     type="number"
//                     name="no_of_dependents"
//                     onChange={handleChange}
//                     placeholder="No. of Dependents"
//                     required
//                     className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//                 />

//                 <div>
//                     <label className="block mb-2 font-medium">Education:</label>
//                     <div className="flex items-center space-x-4">
//                         <label className="flex items-center">
//                             <input
//                                 type="radio"
//                                 name="education"
//                                 value="Graduate"
//                                 onChange={handleChange}
//                                 className="mr-2"
//                             />
//                             Graduate
//                         </label>
//                         <label className="flex items-center">
//                             <input
//                                 type="radio"
//                                 name="education"
//                                 value="Not Graduate"
//                                 onChange={handleChange}
//                                 className="mr-2"
//                             />
//                             Not Graduate
//                         </label>
//                     </div>
//                 </div>

//                 <div>
//                     <label className="block mb-2 font-medium">Self Employed:</label>
//                     <div className="flex items-center space-x-4">
//                         <label className="flex items-center">
//                             <input
//                                 type="radio"
//                                 name="self_employed"
//                                 value="Yes"
//                                 onChange={handleChange}
//                                 className="mr-2"
//                             />
//                             Yes
//                         </label>
//                         <label className="flex items-center">
//                             <input
//                                 type="radio"
//                                 name="self_employed"
//                                 value="No"
//                                 onChange={handleChange}
//                                 className="mr-2"
//                             />
//                             No
//                         </label>
//                     </div>
//                 </div>

//                 {[
//                     'income_annum',
//                     'loan_amount',
//                     'loan_term',
//                     'cibil_score',
//                     'residential_assets_value',
//                     'commercial_assets_value',
//                     'luxury_assets_value',
//                     'bank_asset_value',
//                 ].map((field) => (
//                     <input
//                         key={field}
//                         type="number"
//                         name={field}
//                         onChange={handleChange}
//                         placeholder={field.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
//                         required
//                         className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
//                     />
//                 ))}

//                 <button
//                     type="submit"
//                     className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
//                 >
//                     Predict Loan Status
//                 </button>
//             </form>
//         </div>
//     );
// };

// export default LoanForm;


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

    const [result, setResult] = useState(null); // State to hold the prediction result

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'education') {
            setFormData({ ...formData, education: value === 'Graduate' ? 1 : 0 });
        } else if (name === 'self_employed') {
            setFormData({ ...formData, self_employed: value === 'Yes' ? 1 : 0 });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://127.0.0.1:5000/predict', formData);
            setResult(response.data); // Store the entire response
        } catch (error) {
            console.error('Error fetching prediction:', error);
            alert('Error fetching prediction');
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-center">Loan Prediction Form</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="number"
                    name="no_of_dependents"
                    onChange={handleChange}
                    placeholder="No. of Dependents"
                    required
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                />

                <div>
                    <label className="block mb-2 font-medium">Education:</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="education"
                                value="Graduate"
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Graduate
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="education"
                                value="Not Graduate"
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Not Graduate
                        </label>
                    </div>
                </div>

                <div>
                    <label className="block mb-2 font-medium">Self Employed:</label>
                    <div className="flex items-center space-x-4">
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="self_employed"
                                value="Yes"
                                onChange={handleChange}
                                className="mr-2"
                            />
                            Yes
                        </label>
                        <label className="flex items-center">
                            <input
                                type="radio"
                                name="self_employed"
                                value="No"
                                onChange={handleChange}
                                className="mr-2"
                            />
                            No
                        </label>
                    </div>
                </div>

                {[
                    'income_annum',
                    'loan_amount',
                    'loan_term',
                    'cibil_score',
                    'residential_assets_value',
                    'commercial_assets_value',
                    'luxury_assets_value',
                    'bank_asset_value',
                ].map((field) => (
                    <input
                        key={field}
                        type="number"
                        name={field}
                        onChange={handleChange}
                        placeholder={field.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-500"
                    />
                ))}

                <button
                    type="submit"
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200"
                >
                    Predict Loan Status
                </button>
            </form>

            {result && (
                <div className="mt-6 p-4 border border-gray-300 rounded bg-gray-50">
                    <h3 className="text-lg font-bold">Prediction Result:</h3>
                    <p>Loan Status: {result.loan_status}</p>
                    
                    <h4 className="font-semibold mt-2">Reasons for Decision:</h4>
                    {result.reasons_summary && Object.keys(result.reasons_summary).length > 0 ? (
                        <ul>
                            {Object.entries(result.reasons_summary).map(([feature, reason]) => (
                                <li key={feature}>{reason}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>No reasons available.</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default LoanForm;