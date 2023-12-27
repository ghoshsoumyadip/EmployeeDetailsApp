import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import photo1 from '../asset/Group 3@2x.png';
import './Loginpage.css';


const Loginpage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (username === '1234@gmail.com' && password === '1234') {
      navigate('Homepage');
    } else {
      setError('Invalid credentials. Please try again.');
    }
  };

  return (
    <div className="container">
        <div className="logo">
            <img src={photo1} alt="grrendine" />
        </div>
        <h3 className="heading">We are Electric</h3>
      <form onSubmit={handleSubmit}>
        <div className="UserName">
          <input
            type="text"
            className="ui"
            placeholder='   E-mail'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id='un'
          />
        </div>
        <div className="PassWord">
          <input
            type="password"
            className="pw"
            placeholder='   Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='pw'
          />
        </div>
        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
      <div className="forgetButton">
        <button>Forget Password?</button>
      </div>
      <div className="error">
        {error && <p>{error}</p>}
      </div>
      
    </div>
  );
};

export default Loginpage;
