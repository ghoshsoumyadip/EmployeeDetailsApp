import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Loginpage from './Mainapp/Loginpage';
import Homepage from './Mainapp/Homepage';
import EmployeeList from './Mainapp/EmployeeList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginpage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/employee-List" element={<EmployeeList/>}/>
      </Routes>
    </Router>
  );
}

export default App;
