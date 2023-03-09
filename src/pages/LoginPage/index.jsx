import React, { useState, useEffect } from 'react';
import { makeAuthRequest } from '../../utils/makeRequest';
import { LOGIN_URL } from '../../constants/apiEndPoints';
import { useNavigate} from 'react-router-dom';
import '../RegisterPage/RegisterPage.css';
import heroImage from '../../assets/hero-image.png';

export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('token') !== null) navigate('/');
  }, []);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    const response = await makeAuthRequest(LOGIN_URL, navigate, {
      data: {
        email: email,
        password: password,
      },
    });
    localStorage.setItem('token', response.data.token);
    navigate('/');
  };
  return (
    <div className="register-container">
      <div className="hero-image">
        <img src={heroImage} alt="" />
      </div>
      <div className="register-screen">
        <div className="screen-heading">Login to your CMS+ account</div>
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
          <button className="register-button" onClick={handleLogin}>
            Login
          </button>
          <p style={{
            textAlign: 'center',
            marginTop: '10px',
            color: 'grey',
            textDecoration: 'underline',
            fontSize: '14px',
          }}>Forgot Password?</p>
        </div>
      </div>
    </div>
  );
}
