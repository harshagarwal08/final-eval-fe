import React from 'react';
import './Sidebar.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsCircleFill} from 'react-icons/bs';


export default function Sidebar() {
  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>CMS+</div>
      <div className="collections-container">
        <div className="collection-header">
          <p style={{fontSize: '0.9rem'}}>COLLECTION TYPES</p>
          <AiOutlineSearch />
        </div>
        <div className='collection-list'>
          <div className='active list-item'>
            <BsCircleFill size={8}/>
            Company_Profile
          </div>
          <div className='list-item'>
            <BsCircleFill size={8}/>
            Company_Profile
          </div>
          <div className='list-item'>
            <BsCircleFill size={8}/>
            Company_Profile
          </div>
          <div className='list-item'>
            <BsCircleFill size={8}/>
            Company_Profile
          </div>
        </div>
        <div className="builder active">CONTENT TYPE BUILDER</div>
      </div>
    </div>
  );
}
