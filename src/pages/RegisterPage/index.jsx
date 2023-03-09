import React, { useState } from 'react';
import { makeAuthRequest } from '../../utils/makeRequest';
import { REGISTER_URL } from '../../constants/apiEndPoints';
import { useNavigate } from 'react-router-dom';
import './RegisterPage.css';
import heroImage from '../../assets/hero-image.png';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleRegister = async () => {
    const response = await makeAuthRequest(REGISTER_URL, navigate, {
      data: {
        email: email,
        password: password,
      },
    });
    console.log(response);
    navigate('/login');
  };
  return (
    <div className="register-container">
      <div className="hero-image">
        <img src={heroImage} alt="" />
      </div>
      <div className="register-screen">
        <div className="screen-heading">Create a new CMS+ account</div>
        <div className="form">
          <p className="label">Email</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="label">Password</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="register-button" onClick={handleRegister}>
            Register
          </button>
        </div>
      </div>
    </div>
  );
}
