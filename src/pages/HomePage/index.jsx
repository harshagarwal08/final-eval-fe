import React, {useEffect} from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import './HomePage.css';
import Builder from '../../components/Builder';
// import CollectionType from '../../components/CollectionType';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);
  return (
    <div className="homepage-container">
      <Sidebar onPage="builder"/>
      <div className="right-side-container">
        <Header />
        <Builder/>
      </div>
    </div>
  );
}
