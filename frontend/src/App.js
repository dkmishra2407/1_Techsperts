// App.js
import React from 'react';          // Ensure React is imported (especially for older React versions)
import './App.css';                 // Ensure the CSS file exists
import AppForm from './Components/form';
function App() {
  return (
      <div className="App">         {/* Add a wrapper div with a class for styling */}
          <AppForm />       {/* Make sure the component is imported and used correctly */}
      </div>
  );
}

export default App;
