import React, { useState } from 'react';
import employeesData from '../Mainapp/data.json';
import photo1 from '../asset/Group 46.png'
import photo2 from '../asset/moptro logo.png'
import './EmployeeList.css';
import homeicon from '../asset/homeicon.png'
import dashicon from '../asset/dashboardicon.png'
import { Link } from 'react-router-dom';



function EmployeeList() {
  const [searchQuery, setSearchQuery] = useState('');
  
  const filteredEmployees = employeesData.filter(employee =>
    employee.employeeName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mcontain">
    <div className="elcontainer">
           <div className="fp">
                <img src={photo1} alt="photo1" className="photo1" />
            </div>
            <div className="num">
                <img src={photo2} alt="photo2" className="photo2" />
                <h4>4</h4>
            </div>
            <div className="sc">
            <input
             type="text"
             placeholder="Search with name"
             value={searchQuery}
             onChange={handleSearchChange}
             className="search-input"
            
            />
            <ul className="employee-list" style={{margin: "0.8rem"}}>
             {filteredEmployees.map((employee) => (
             <li key={employee.employeeId} className="employee-item">
              {/* <span className='number'>{employee.employeeId}</span><br></br> */}
            <strong>EMP ID :</strong> {employee.employeeId}<span className='number' id='number'>{employee.employeeId}</span> <br /> 
            <strong>Name :</strong> {employee.employeeName} <br />
            <strong>DOB :</strong> <span id='dob'>{employee.dateOfBirth}</span> <br />
            <strong>Role :</strong> <span id='role'>{employee.role} </span>
                 </li>
                ))}
            </ul>
            </div>
            <div className="tc">
            <div className="home">
                <Link to="/Homepage">
                    <img src={homeicon} alt="" className="homeicon" />
                </Link>
                </div>
                <div className="dashboard">
                <Link to="/employee-list">
                    <img src={dashicon} alt="" className="dashicon"/>
                </Link>
                </div>
            </div>
    </div>
    </div>

    
  );
}

export default EmployeeList;
