import React from 'react';

const ConsultancyPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 p-8">
            <form className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full space-y-6 animate-fade-in-down">
                {/* Consultancy Section */}
                <section className="space-y-8">
                    <h1 className="text-3xl font-bold text-center text-gray-800">Consultancy</h1>

                    {/* Paid Consultancy */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-blue-800">Paid Consultancy</h2>
                        <label className="text-sm text-gray-600">Points will be distributed equally amongst all the CO-PIs</label>
                        <div className="space-y-2">
                            <label className="block text-gray-700">Amount (in Lakhs)</label>
                            <input
                                type="number"
                                min="0"
                                step="0.01"
                                placeholder="Amount in Lakhs"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Unpaid Consultancy */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-blue-800">Unpaid Consultancy</h2>
                        <label className="text-sm text-gray-600">Points per project/work</label>
                        <div className="space-y-2">
                            <label className="block text-gray-700">Number of Projects/Works</label>
                            <input
                                type="number"
                                min="0"
                                placeholder="Number of Projects/Works"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    {/* Product Development */}
                    <div className="space-y-4">
                        <h2 className="text-xl font-semibold text-blue-800">Product Development</h2>
                        <label className="text-sm text-gray-600">Points equally amongst all the CO-PIs</label>
                        <div className="space-y-2">
                            <label className="block text-gray-700">Number of Products (Deployed and Functional)</label>
                            <input
                                type="number"
                                min="0"
                                placeholder="Number of Products"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                </section>

                {/* File Upload */}
                <div className="space-y-2">
                    <label htmlFor="pdf-upload" className="block text-gray-700">Upload PDF with supporting documents</label>
                    <input
                        type="file"
                        id="pdf-upload"
                        name="pdf-upload"
                        accept=".pdf"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

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

export default ConsultancyPage;
