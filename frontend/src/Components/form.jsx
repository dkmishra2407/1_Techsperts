// // // import React, { useState } from 'react';
// // // import axios from 'axios';

// // // const AppForm = () => {
// // //     // State to hold form data
// // //     const [formData, setFormData] = useState({
// // //         loan_id:'',
// // //         no_of_dependents: 0,
// // //         education: '',
// // //         self_employed: '',
// // //         income_annum: 0,
// // //         loan_amount: 0,
// // //         loan_term: 0,
// // //         cibil_score: 300,
// // //         residential_assets_value: 0,
// // //         commercial_assets_value: 0,
// // //         luxury_assets_value: 0,
// // //         bank_asset_value: 0
// // //     });

// // //     // Handle form input changes
// // //     const handleChange = (e) => {
// // //         setFormData({
// // //             ...formData,
// // //             [e.target.name]: e.target.value
// // //         });
// // //     };

// // //     // Handle form submission
// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
        
// // //         try {
// // //             const response = await axios.post('http://localhost:5000/predict', formData, {
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                 }
// // //             });
// // //             console.log(response.data);
// // //             alert(Loan Status: ${response.data.loan_status});
// // //         } catch (error) {
// // //             console.error('Error submitting form data:', error);
// // //             alert('An error occurred while submitting the form.');
// // //         }
// // //     };

// // //     return (
// // //         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
// // //             <form className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6" onSubmit={handleSubmit}>
                

// // //                 {/* Submit Button */}
// // //                 <div className="text-center">
// // //                     <button
// // //                         type="submit"
// // //                         className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
// // //                     >
// // //                         Submit
// // //                     </button>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     );
// // // };

// // // export default AppForm;


// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import { Pie } from 'react-chartjs-2';
// // import 'chart.js/auto';
// // const AppForm = () => {
// //         const [formData, setFormData] = useState({
// //             loan_id: '',
// //             no_of_dependents: 0,
// //             education: '',
// //             self_employed: '',
// //             income_annum: 0,
// //             loan_amount: 0,
// //             loan_term: 0,
// //             cibil_score: 300,
// //             residential_assets_value: 0,
// //             commercial_assets_value: 0,
// //             luxury_assets_value: 0,
// //             bank_asset_value: 0,
// //         });
    
// //         const [loanData, setLoanData] = useState(null); // Store the API response
    
// //         // Handle form input changes
// //         const handleChange = (e) => {
// //             setFormData({
// //                 ...formData,
// //                 [e.target.name]: e.target.value,
// //             });
// //         };
    
// //         // Handle form submission
// //         const handleSubmit = async (e) => {
// //             e.preventDefault();
        
// //             try {
// //                 // First API request to '/predict'
// //                 const predictResponse = await axios.post('http://localhost:5000/predict', formData, {
// //                     headers: {
// //                         'Content-Type': 'application/json',
// //                     },
// //                 });
        
// //                 // Set the API response (loan data) to state
// //                 setLoanData(predictResponse.data);
// //                 console.log(formData.loan_id);
// //                 console.log(predictResponse.data)
// //                 // Use the predictResponse directly for the second API request
// //                 // await axios.post("http://localhost:3001/api/loanHistory", {
// //                 //     LoanId: formData.loan_id,  // Use formData to get loan_id
// //                 //     LoanStatus: loanData.loan_status, // Use the response directly
// //                 //     LoanDescription: loanData.reasons_summary.bank_asset_value    // Use the response directly
// //                 // });
        
// //                 alert('Form submitted successfully and loan history saved!');
// //             } catch (error) {
// //                 console.error('Error submitting form data:', error);
// //                 alert('An error occurred while submitting the form.');
// //             }
// //         };
        
    
// //         // Utility function to safely extract numeric values from feature descriptions
// //         const extractValue = (featureDescription) => {
// //             if (featureDescription && featureDescription.match(/-?\d+\.?\d*/)) {
// //                 return parseFloat(featureDescription.match(/-?\d+\.?\d*/)[0]);
// //             }
// //             return 0; // Default to 0 if the value is missing or invalid
// //         };
    
// //         // Prepare data for Pie chart
// //         const getChartData = () => {
// //             if (!loanData) return null;
    
// //             const labels = [
// //                 'Bank Asset Value',
// //                 'CIBIL Score',
// //                 'Commercial Assets Value',
// //                 'Education',
// //                 'Income Annum',
// //                 'Loan Amount',
// //                 'Loan Term',
// //                 'Luxury Assets Value',
// //                 'No of Dependents',
// //                 'Residential Assets Value',
// //                 'Self Employed',
// //             ];
    
// //             const dataValues = [
// //                 extractValue(loanData.bank_asset_value),
// //                 extractValue(loanData.cibil_score),
// //                 extractValue(loanData.commercial_assets_value),
// //                 extractValue(loanData.education),
// //                 extractValue(loanData.income_annum),
// //                 extractValue(loanData.loan_amount),
// //                 extractValue(loanData.loan_term),
// //                 extractValue(loanData.luxury_assets_value),
// //                 extractValue(loanData.no_of_dependents),
// //                 extractValue(loanData.residential_assets_value),
// //                 extractValue(loanData.self_employed),
// //             ];
    
// //             return {
// //                 labels,
// //                 datasets: [
// //                     {
// //                         data: dataValues,
// //                         backgroundColor: [
// //                             '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
// //                             '#FF9F40', '#FFCD56', '#C9CBCF', '#4A90E2', '#50E3C2', '#E74C3C',
// //                         ],
// //                     },
// //                 ],
// //             };
// //         };

// //         return (
// //             <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8 relative overflow-hidden">
                
// //                 {/* Background animation */}
// //                 <div className="absolute inset-0 z-0">
// //                     <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
// //                     <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
// //                     <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 absolute bottom-0 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
// //                 </div>
        
              
        
// //                 {loanData && <LoanPieChart loanData={loanData} />}
// //             </div>
// //         );
        
// // };

// // export default AppForm;







// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const AppForm = () => {
// //     // State to hold form data
// //     const [formData, setFormData] = useState({
// //         loan_id:'',
// //         no_of_dependents: 0,
// //         education: '',
// //         self_employed: '',
// //         income_annum: 0,
// //         loan_amount: 0,
// //         loan_term: 0,
// //         cibil_score: 300,
// //         residential_assets_value: 0,
// //         commercial_assets_value: 0,
// //         luxury_assets_value: 0,
// //         bank_asset_value: 0
// //     });

// //     // Handle form input changes
// //     const handleChange = (e) => {
// //         setFormData({
// //             ...formData,
// //             [e.target.name]: e.target.value
// //         });
// //     };

// //     // Handle form submission
// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
        
// //         try {
// //             const response = await axios.post('http://localhost:5000/predict', formData, {
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                 }
// //             });
// //             console.log(response.data);
// //             alert(Loan Status: ${response.data.loan_status});
// //         } catch (error) {
// //             console.error('Error submitting form data:', error);
// //             alert('An error occurred while submitting the form.');
// //         }
// //     };

// //     return (
// //         <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
// //             <form className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6" onSubmit={handleSubmit}>
                

// //                 {/* Submit Button */}
// //                 <div className="text-center">
// //                     <button
// //                         type="submit"
// //                         className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
// //                     >
// //                         Submit
// //                     </button>
// //                 </div>
// //             </form>
// //         </div>
// //     );
// // };

// // export default AppForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import { Bar } from 'react-chartjs-2';
// import 'chart.js/auto';

// const AppForm = () => {
//     const [formData, setFormData] = useState({
//         loan_id: '',
//         no_of_dependents: 0,
//         education: '',
//         self_employed: '',
//         income_annum: 0,
//         loan_amount: 0,
//         loan_term: 0,
//         cibil_score: 300,
//         residential_assets_value: 0,
//         commercial_assets_value: 0,
//         luxury_assets_value: 0,
//         bank_asset_value: 0,
//     });

//     const [loanData, setLoanData] = useState(null); // Store the API response

//     // Handle form input changes
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value,
//         });
//     };

//     // Handle form submission
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // First API request to '/predict'
//             const predictResponse = await axios.post('http://localhost:5000/predict', formData, {
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//             });

//             // Set the API response (loan data) to state
//             setLoanData(predictResponse.data);
//             console.log(formData.loan_id);
//             console.log(predictResponse.data);

//             await axios.post("http://localhost:3001/api/loanHistory", {
//                 LoanId: formData.loan_id,  // Use formData to get loan_id
//                 LoanStatus: loanData.loan_status, // Use the response directly
//                 LoanDescription: loanData.reasons_summary.bank_asset_value    // Use the response directly
//             });

//             alert('Form submitted successfully and loan history saved!');
//         } catch (error) {
//             console.error('Error submitting form data:', error);
//             alert('An error occurred while submitting the form.');
//         }
//     };

//     // Utility function to safely extract numeric values from feature descriptions
//     const extractValue = (featureDescription) => {
//         if (featureDescription && featureDescription.match(/-?\d+\.?\d*/)) {
//             return parseFloat(featureDescription.match(/-?\d+\.?\d*/)[0]);
//         }
//         return 0; // Default to 0 if the value is missing or invalid
//     };

//     // Prepare data for Bar chart
//     const getChartData = () => {
//         if (!loanData) return null;

//         const labels = [
//             'Bank Asset Value',
//             'CIBIL Score',
//             'Commercial Assets Value',
//             'Education',
//             'Income Annum',
//             'Loan Amount',
//             'Loan Term',
//             'Luxury Assets Value',
//             'No of Dependents',
//             'Residential Assets Value',
//             'Self Employed',
//         ];

//         const dataValues = [
//             extractValue(loanData.reasons_summary.bank_asset_value),
//             extractValue(loanData.reasons_summary.cibil_score),
//             extractValue(loanData.reasons_summary.commercial_assets_value),
//             extractValue(loanData.reasons_summary.education),
//             extractValue(loanData.reasons_summary.income_annum),
//             extractValue(loanData.reasons_summary.loan_amount),
//             extractValue(loanData.reasons_summary.loan_term),
//             extractValue(loanData.reasons_summary.luxury_assets_value),
//             extractValue(loanData.reasons_summary.no_of_dependents),
//             extractValue(loanData.reasons_summary.residential_assets_value),
//             extractValue(loanData.reasons_summary.self_employed),
//         ];

//         return {
//             labels,
//             datasets: [
//                 {
//                     label: 'Loan Factors Contribution',
//                     data: dataValues,
//                     backgroundColor: '#36A2EB',
//                     borderColor: '#36A2EB',
//                     borderWidth: 1,
//                 },
//             ],
//         };

//         const generatePDF = async (loanData) => {
//             try {
        
//               const tableBody = [
//                 [
//                   { text: "Id", style: 'tableHeader' },
//                   { text: "Status", style: 'tableHeader' },
//                   { text: "Report", style: 'tableHeader' },
                 
//                 ],
//                 ...await Promise.all(loanData.map(async (item, index) => [
//                   index + 1,
//                   item.loan_status?.toString() || 'N/A',
//                   item.loan_status?.toString() || 'N/A',
//                   {item.entries(loanData.reasons_summary).map(([key, value]) => (
//                     <li key={key} className="text-gray-700">
//                         <strong>{key.replace(/_/g, ' ')}:</strong> {value}
//                     </li>
//                 ))}
//                 ])),
//               ];
        
//               const docDefinition = {
//                 background: {
//                   image: DTSLogoBase64,
//                   width: 300,
//                   opacity: 0.2,
//                   absolutePosition: { x: 150, y: 250 }
//                 },
//                 content: [
                  
//                   { text: '\n' },
//                   {
//                     table: {
//                       headerRows: 1,
//                       body: tableBody
//                     },
//                     layout: 'lightHorizontalLines'
//                   },
//                   { text: '\n' },
                  
//                   { text: '\n' },
//                   {
//                     text: "The Loan PDF is created on a computer and is valid without the signature and stamp.",
//                     fontSize: 10,
//                     alignment: 'center'
//                   }
//                 ],
//                 styles: {
//                   tableHeader: { bold: true, fontSize: 12, color: 'black' }
//                 }
//               };
        
//               pdfMake.createPdf(docDefinition).download(`Quotation_${loanData.loan_id || 'Unknown'}.pdf`);
//             } catch (error) {
//               console.error("Error generating PDF:", error);
//             }
//           };
        
//           const handleDownload = async () => {
//             generatePDF(loanData);
//           };
//     };

//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8 relative overflow-hidden">
//             {/* Background animation */}
//             <div className="absolute inset-0 z-0">
//                 <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 absolute top-0 left-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob"></div>
//                 <div className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-500 absolute top-0 right-0 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-2000"></div>
//                 <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 absolute bottom-0 left-20 w-96 h-96 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-blob animation-delay-4000"></div>
//             </div>

//             <form className="bg-white shadow-lg rounded-lg p-8 max-w-5xl w-4/5 z-10 space-y-6" onSubmit={handleSubmit}>
//                 <section className="space-y-8">
//                     <h1 className="text-3xl font-bold text-center text-gray-800">Loan Application</h1>

//                     {/* Loan ID */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Loan ID</label>
//                         <input
//                             type="number"
//                             name="loan_id"
//                             value={formData.loan_id}
//                             onChange={handleChange}
//                             min="0"
//                             placeholder="Enter Loan Id"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* No of Dependents */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Number of Dependents</label>
//                         <input
//                             type="number"
//                             name="no_of_dependents"
//                             value={formData.no_of_dependents}
//                             onChange={handleChange}
//                             min="0"
//                             placeholder="Enter number of dependents"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Education */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Education</label>
//                         <input
//                             type="text"
//                             name="education"
//                             value={formData.education}
//                             onChange={handleChange}
//                             placeholder="Enter highest education level"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Self Employed */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Self-Employed</label>
//                         <select
//                             name="self_employed"
//                             value={formData.self_employed}
//                             onChange={handleChange}
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="">Select</option>
//                             <option value="1">Yes</option>
//                             <option value="0">No</option>
//                         </select>
//                     </div>

//                     {/* Income Annum */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Annual Income (in Lakhs)</label>
//                         <input
//                             type="number"
//                             name="income_annum"
//                             value={formData.income_annum}
//                             onChange={handleChange}
//                             min="0"
//                             step="0.01"
//                             placeholder="Enter income in lakhs"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Loan Amount */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Loan Amount (in Lakhs)</label>
//                         <input
//                             type="number"
//                             name="loan_amount"
//                             value={formData.loan_amount}
//                             onChange={handleChange}
//                             min="0"
//                             step="0.01"
//                             placeholder="Enter loan amount in lakhs"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Loan Term */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Loan Term (in Years)</label>
//                         <input
//                             type="number"
//                             name="loan_term"
//                             value={formData.loan_term}
//                             onChange={handleChange}
//                             min="0"
//                             placeholder="Enter loan term"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* CIBIL Score */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">CIBIL Score</label>
//                         <input
//                             type="number"
//                             name="cibil_score"
//                             value={formData.cibil_score}
//                             onChange={handleChange}
//                             min="300"
//                             max="900"
//                             placeholder="Enter CIBIL score"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Residential Assets Value */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Residential Assets Value (in Lakhs)</label>
//                         <input
//                             type="number"
//                             name="residential_assets_value"
//                             value={formData.residential_assets_value}
//                             onChange={handleChange}
//                             min="0"
//                             step="0.01"
//                             placeholder="Enter residential asset value"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Commercial Assets Value */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Commercial Assets Value (in Lakhs)</label>
//                         <input
//                             type="number"
//                             name="commercial_assets_value"
//                             value={formData.commercial_assets_value}
//                             onChange={handleChange}
//                             min="0"
//                             step="0.01"
//                             placeholder="Enter commercial asset value"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Luxury Assets Value */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Luxury Assets Value (in Lakhs)</label>
//                         <input
//                             type="number"
//                             name="luxury_assets_value"
//                             value={formData.luxury_assets_value}
//                             onChange={handleChange}
//                             min="0"
//                             step="0.01"
//                             placeholder="Enter luxury asset value"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Bank Asset Value */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Bank Asset Value (in Lakhs)</label>
//                         <input
//                             type="number"
//                             name="bank_asset_value"
//                             value={formData.bank_asset_value}
//                             onChange={handleChange}
//                             min="0"
//                             step="0.01"
//                             placeholder="Enter bank asset value"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                 </section>
//                 <div className="text-center">
//                     <button
//                         type="submit"
//                         className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>

//             {/* Display the Bar Chart if loanData is available */}
//             {loanData && (
                
//                 <div className="mt-8 w-full max-w-5xl">
//                 {/* <h1>{loanData.loan_status} From Our Model</h1> */}
//                     <Bar data={getChartData()} />
//                     <h1 text-center text-xl font-bold mt-6>{loanData.loan_status} From Our Model</h1>
//                     <div className="mt-4">
//                         <h2 className="text-lg font-semibold">Reasons Summary:</h2>
//                         <ul className="list-disc list-inside">
//                             {Object.entries(loanData.reasons_summary).map(([key, value]) => (
//                                 <li key={key} className="text-gray-700">
//                                     <strong>{key.replace(/_/g, ' ')}:</strong> {value}
//                                 </li>
//                             ))}
//                         </ul>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default AppForm;



import React, { useState } from 'react';
import axios from 'axios';

const ExcelUpload = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [predictions, setPredictions] = useState([]);

    // Handle file selection
    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    // Handle form submission (upload file and get predictions)
    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!selectedFile) {
            alert("Please upload an Excel file!");
            return;
        }

        const formData = new FormData();
        formData.append('file', selectedFile);

        setLoading(true);
        try {
            const response = await axios.post('http://localhost:5000/predict_excel', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setPredictions(response.data.predictions);
        } catch (error) {
            console.error('Error uploading the file or getting predictions:', error);
            alert('Error processing the file.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container">
            <h1>Loan Prediction from Excel Upload</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="fileInput">Upload Excel File:</label>
                    <input
                        type="file"
                        id="fileInput"
                        accept=".xlsx, .xls"
                        onChange={handleFileChange}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Uploading...' : 'Upload and Predict'}
                </button>
            </form>

            {predictions.length > 0 && (
                <div>
                    <h2>Prediction Results</h2>
                    <ul>
                        {predictions.map((result, index) => (
                            <li key={index}>
                                <h3>Row {result.row_index} - Status: {result.loan_status}</h3>
                                <h4>Reasons Summary:</h4>
                                <ul>
                                    {result.reasons_summary ? (
                                        Object.entries(result.reasons_summary).map(([feature, reason], idx) => (
                                            <li key={idx}>{feature}: {reason}</li>
                                        ))
                                    ) : (
                                        <p>No reasons available for this row.</p>
                                    )}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ExcelUpload;
