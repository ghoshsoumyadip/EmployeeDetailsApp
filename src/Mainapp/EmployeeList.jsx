import React, { useState } from 'react';
import employeesData from '../Mainapp/data.json';
import photo1 from '../asset/Group 46.png'
import photo2 from '../asset/moptro logo.png'
import './EmployeeList.css';
import homeicon from '../asset/homeicon.png'
import dashicon from '../asset/dashboardicon.png'
import searchicon from '../asset/searchicon.png'
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
              <div className="searchBar">
              <input
                 type="text"
                 placeholder="Search with name"
                 value={searchQuery}
                 onChange={handleSearchChange}
                 className="search-input"
                 id='searchInput'
              />
              <img src={searchicon} alt="" className="searchicon" />
              </div>
            <div className="el">
            <div className="employee-list-container">
              <ul className="employee-list">
                {filteredEmployees.map((employee) => (
                  <li key={employee.employeeId} className="employee-item">
                    <span className="firstrow">
                      <p>EMP ID  :</p> <strong className='eid'>{employee.employeeId}</strong>
                      <p className="number" id="number">
                        {employee.employeeId}
                      </p>
                    </span>
                    <span className="name">
                      <p>Name</p>
                      <p id='sign1'>:</p> 
                      <p id='name'>{employee.employeeName}</p></span>
                    <span className="dob">
                      <p>DOB</p>
                      <p id='sign2'>:</p>
                      <span id="dob">{employee.dateOfBirth}</span> 
                    </span>
                    <span className="role">
                      <p>Role</p>
                      <p id='sign3'>:</p>
                      <span id="role">{employee.role} </span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
