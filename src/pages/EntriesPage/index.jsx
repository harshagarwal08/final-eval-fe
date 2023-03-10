import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import CollectionType from '../../components/CollectionType';
import '../HomePage/HomePage.css';

export default function EntriesPage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="homepage-container">
      <Sidebar />
      <div className="right-side-container">
        <Header />
        <CollectionType/>
      </div>
    </div>
  );
}
