// App.js
import React from 'react';          // Ensure React is imported (especially for older React versions)
import ConsultancyPage from './Components/form';  // Correct import path for ConsultancyPage component
import './App.css';                 // Ensure the CSS file exists

function App() {
  return (
      <div className="App">         {/* Add a wrapper div with a class for styling */}
          <ConsultancyPage />       {/* Make sure the component is imported and used correctly */}
      </div>
  );
}

export default App;
