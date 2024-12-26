import React from 'react'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Codeant from './components/Codeant';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        {/* Default route points to Login */}
        <Route path="/" element={<Login />} />
        {/* Route for Codeant */}
        <Route path="/codeant" element={<Codeant />} />
      </Routes>
    </Router>
  );
}

export default App;
