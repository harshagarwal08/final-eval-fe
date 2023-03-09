import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
// import ProtectedRoute from './pages/ProtectedRoute';

const isLoggedIn = localStorage.getItem('token') !== null;

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<div>Home</div>} />
          {!isLoggedIn ? (
            <Route path="/login" element={<Login />} />
          ) : (
            <Route path="/login" element={<div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>Already logged in</div>} />
          )}
          <Route path="/register" element={<Register />} />
          {/* <ProtectedRoute path="/protected" element={<div>Protected</div>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
