import React from 'react';
import Sidebar from '../../components/Sidebar';
import Header from '../../components/Header';
import './HomePage.css';
// import Builder from '../../components/Builder';
import CollectionType from '../../components/CollectionType';

export default function HomePage() {
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
