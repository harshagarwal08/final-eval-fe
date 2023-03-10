import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/RegisterPage';
import Login from './pages/LoginPage';
import HomePage from './pages/HomePage';
import EntriesPage from './pages/EntriesPage';
import NotFoundPage from './pages/NotFoundPage';
import ErrorPage from './pages/ErrorPage';
import {
  ENTRIES_ROUTE,
  ERROR_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  NOT_FOUND_ROUTE,
  REGISTER_ROUTE,
} from './constants/routes';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_ROUTE} element={<HomePage />} />
          <Route path={ENTRIES_ROUTE} element={<EntriesPage />} />
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
          <Route path={`${ERROR_ROUTE}/:errorCode?`} element={<ErrorPage />} />
          <Route path={NOT_FOUND_ROUTE} element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
