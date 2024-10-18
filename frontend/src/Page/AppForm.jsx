// import React from 'react'

// const AppForm = () => {
//   return (
//     <div>
//       <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
//             <form className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6 animate-fade-in-down">
//                 <section className="space-y-8">
//                     <h1 className="text-3xl font-bold text-center text-gray-800">Loan Application</h1>

//                     {/* No of Dependents */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Number of Dependents</label>
//                         <input
//                             type="number"
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
//                             placeholder="Enter highest education level"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>

//                     {/* Self Employed */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Self-Employed</label>
//                         <select
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         >
//                             <option value="">Select</option>
//                             <option value="yes">Yes</option>
//                             <option value="no">No</option>
//                         </select>
//                     </div>

//                     {/* Income Annum */}
//                     <div className="space-y-2">
//                         <label className="block text-gray-700">Annual Income (in Lakhs)</label>
//                         <input
//                             type="number"
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
//                             min="0"
//                             step="0.01"
//                             placeholder="Enter bank asset value"
//                             className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                     </div>
//                 </section>

//                 {/* Submit Button */}
//                 <div className="text-center">
//                     <button
//                         type="submit"
//                         className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
//                     >
//                         Submit
//                     </button>
//                 </div>
//             </form>
//         </div>
//     </div>
//   )
// }

// export default AppForm


import React from 'react'
import FileUpload from '../Components/fileUpload';
import AppForm from '../Components/form';
const Formpage = () => {
  return (
    <div>
        <AppForm/>
        <FileUpload/>
    </div>
  )
}

export default Formpage