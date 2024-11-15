import React, { useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const HomePage = () => {
  const [loans, setLoans] = useState([]);

  useEffect(() => {
    // Fetch loan data (replace this with actual API calls)
    const fetchedLoans = [
      { id: 'L001', status: 'approved', shapReport: 'link1' },
      { id: 'L002', status: 'rejected', shapReport: 'link2' },
      { id: 'L003', status: 'approved', shapReport: 'link3' },
      { id: 'L004', status: 'rejected', shapReport: 'link4' },
    ];
    setLoans(fetchedLoans);
    
  }, []);

  const totalLoans = loans.length;
  const approvedLoans = loans.filter((loan) => loan.status === 'approved').length;
  const rejectedLoans = loans.filter((loan) => loan.status === 'rejected').length;

  const approvedPercentage = (approvedLoans / totalLoans) * 100;
  const rejectedPercentage = (rejectedLoans / totalLoans) * 100;

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to FinanceCo</h1>
          <p className="text-lg mb-8">Your trusted partner for financial solutions.</p>
          <button className="bg-white text-teal-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="py-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Approved Loans Progress Circle */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Loans Approved</h3>
              <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                <CircularProgressbar
                  value={approvedPercentage}
                  text={`${approvedLoans} / ${totalLoans}`}
                  styles={buildStyles({
                    pathColor: '#4caf50',
                    textColor: '#4caf50',
                  })}
                />
              </div>
            </div>

            {/* Rejected Loans Progress Circle */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Loans Rejected</h3>
              <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
                <CircularProgressbar
                  value={rejectedPercentage}
                  text={`${rejectedLoans} / ${totalLoans}`}
                  styles={buildStyles({
                    pathColor: '#f44336',
                    textColor: '#f44336',
                  })}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loans List */}
       <section className="py-8">
         <div className="container mx-auto text-center">
           <h2 className="text-3xl font-bold mb-6">Loan Status</h2>
           <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
             <thead>
               <tr className="bg-gray-200">
                 <th className="px-4 py-2">Loan ID</th>
                 <th className="px-4 py-2">Status</th>
                 <th className="px-4 py-2">SHAP Report</th>
               </tr>
             </thead>
             <tbody>
               {loans.map((loan) => (
                 <tr key={loan.id} className="border-b">
                   <td className="px-4 py-2">{loan.id}</td>
                   <td className="px-4 py-2 capitalize">{loan.status}</td>
                   <td className="px-4 py-2">
                     <a href={loan.shapReport} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
                       View SHAP Report
                     </a>
                   </td>
                 </tr>
               ))}
             </tbody>
           </table>
         </div>
       </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white py-4">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 FinanceCo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;






// import React, { useState, useEffect } from 'react';
// import { Doughnut } from 'react-chartjs-2';
// import 'chart.js/auto';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';

// const HomePage = () => {
//   const [loans, setLoans] = useState([]);

//   useEffect(() => {
//     // Fetch loan data (you can replace this with actual API calls)
//     const fetchedLoans = [
//       { id: 'L001', status: 'approved', shapReport: 'link1' },
//       { id: 'L002', status: 'rejected', shapReport: 'link2' },
//       { id: 'L003', status: 'approved', shapReport: 'link3' },
//       { id: 'L004', status: 'rejected', shapReport: 'link4' },
//     ];
//     setLoans(fetchedLoans);
//   }, []);

//   const approvedLoans = loans.filter(loan => loan.status === 'approved').length;
//   const rejectedLoans = loans.filter(loan => loan.status === 'rejected').length;

//   const approvedData = {
//     labels: ['Approved'],
//     datasets: [
//       {
//         data: [approvedLoans],
//         backgroundColor: ['#4caf50'],
//         hoverBackgroundColor: ['#66bb6a'],
//       },
//     ],
//   };

//   const rejectedData = {
//     labels: ['Rejected'],
//     datasets: [
//       {
//         data: [rejectedLoans],
//         backgroundColor: ['#f44336'],
//         hoverBackgroundColor: ['#e57373'],
//       },
//     ],
//   };

//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-teal-500 to-teal-700 text-white py-12">
//         <div className="container mx-auto text-center animate__animated animate__fadeIn">
//           <h1 className="text-4xl font-bold mb-4">Welcome to FinanceCo</h1>
//           <p className="text-lg mb-8">Your trusted partner for financial solutions.</p>
//           <button className="bg-white text-teal-700 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
//             Get Started
//           </button>
//         </div>
//       </section>

//       <section className="py-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-center">
//         <div className="container mx-auto">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Approved Loans Progress Circle */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4">Loans Approved</h3>
//               <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
//                 <CircularProgressbar
//                   value={approvedPercentage}
//                   text={`${approvedLoans} / ${totalLoans}`}
//                   styles={buildStyles({
//                     pathColor: '#4caf50',
//                     textColor: '#4caf50',
//                   })}
//                 />
//               </div>
//             </div>

//             {/* Rejected Loans Progress Circle */}
//             <div className="bg-white p-6 rounded-lg shadow-md">
//               <h3 className="text-xl font-semibold mb-4">Loans Rejected</h3>
//               <div style={{ width: '200px', height: '200px', margin: '0 auto' }}>
//                 <CircularProgressbar
//                   value={rejectedPercentage}
//                   text={`${rejectedLoans} / ${totalLoans}`}
//                   styles={buildStyles({
//                     pathColor: '#f44336',
//                     textColor: '#f44336',
//                   })}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Loans List */}
//       <section className="py-8">
//         <div className="container mx-auto text-center">
//           <h2 className="text-3xl font-bold mb-6">Loan Status</h2>
//           <table className="min-w-full table-auto bg-white shadow-md rounded-lg">
//             <thead>
//               <tr className="bg-gray-200">
//                 <th className="px-4 py-2">Loan ID</th>
//                 <th className="px-4 py-2">Status</th>
//                 <th className="px-4 py-2">SHAP Report</th>
//               </tr>
//             </thead>
//             <tbody>
//               {loans.map((loan) => (
//                 <tr key={loan.id} className="border-b">
//                   <td className="px-4 py-2">{loan.id}</td>
//                   <td className="px-4 py-2 capitalize">{loan.status}</td>
//                   <td className="px-4 py-2">
//                     <a href={loan.shapReport} target="_blank" rel="noopener noreferrer" className="text-teal-600 hover:underline">
//                       View SHAP Report
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>

//       {/* Footer Section */}
//       <footer className="bg-gray-800 text-white py-4">
//         <div className="container mx-auto text-center">
//           <p>&copy; 2024 FinanceCo. All rights reserved.</p>
//         </div>
//       </footer>

//       {/* Add CSS for animated gradient */}
//       <style jsx>{`
//         .bg-animated-gradient {
//           background: linear-gradient(270deg, #ff0080, #ff8c00, #40e0d0);
//           background-size: 600% 600%;
//           animation: GradientBackground 8s ease infinite;
//         }

//         @keyframes GradientBackground {
//           0% { background-position: 0% 50%; }
//           50% { background-position: 100% 50%; }
//           100% { background-position: 0% 50%; }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default HomePage;
