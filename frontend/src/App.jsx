import { Routes, Route } from 'react-router-dom';
import './App.css';
import AppForm from './Page/AppForm';  // Ensure path is correct
import Navbar from './Components/Navbar';   // Ensure path is correct
import HomePage from './Page/HomePage';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/application" element={<AppForm />} />
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </>
  );
}

export default App;  // Ensure export is correct
