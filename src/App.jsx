import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import CollectionTypePage from './components/CollectionType';
import HomePage from './pages/HomePage';

// import ProtectedRoute from './pages/ProtectedRoute';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/collections" element={<CollectionTypePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <ProtectedRoute path="/protected" element={<div>Protected</div>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}
