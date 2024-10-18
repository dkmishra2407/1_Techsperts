import React, { useState } from 'react';
import * as XLSX from 'xlsx';

const FileUpload = () => {
    const [fileData, setFileData] = useState([]);

    // Function to handle the file upload and extract data
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        console.log(file)
        if (!file) return; // Ensure file is selected

        const reader = new FileReader();

        reader.onload = (e) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });

            // Assume the data is in the first sheet
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            const jsonData = XLSX.utils.sheet_to_json(firstSheet);
            console.log("Json Data",jsonData)

            axios.post("",jsonData)
            // Extract all rows and map the required fields according to your provided format
            const extractedData = jsonData.map(row => ({
                loan_id: row.loan_id || '',
                no_of_dependents: row.no_of_dependents || 0,
                education: row.education || '',
                self_employed: row.self_employed || '',
                income_annum: row.income_annum || 0,
                loan_amount: row.loan_amount || 0,
                loan_term: row.loan_term || 0,
                cibil_score: row.cibil_score || 0,
                residential_assets_value: row.residential_assets_value || 0,
                commercial_assets_value: row.commercial_assets_value || 0,
                luxury_assets_value: row.luxury_assets_value || 0,
                bank_asset_value: row.bank_asset_value || 0,
                loan_status: row.loan_status || ''
            }));

            setFileData(extractedData);  // Store the array of rows
            console.log(extractedData);  // Log the extracted data to the console
        };

        reader.readAsArrayBuffer(file);
    };

    return (
        <div className="file-upload-container">
            <h1 className="text-2xl font-bold">Upload Excel File</h1>
            <form className="flex flex-col space-y-4">
                <input
                    type="file"
                    accept=".csv"
                    onChange={handleFileUpload}
                    className="file-input"
                />
            </form>
        </div>
    );
};

export default FileUpload;