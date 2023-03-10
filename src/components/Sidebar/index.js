import React, {useEffect, useState} from 'react';
import './Sidebar.css';
import {AiOutlineSearch} from 'react-icons/ai';
import {BsCircleFill} from 'react-icons/bs';
import {makeRequest} from '../../utils/makeRequest';
import { GET_ALL_COLLECTIONS_URL } from '../../constants/apiEndPoints';
import { useNavigate, NavLink} from 'react-router-dom';

export default function Sidebar() {
  const [collections, setCollections] = useState([]);
  // const [entries, setEntries] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    makeRequest(
      GET_ALL_COLLECTIONS_URL, navigate
    ).then((data)=> setCollections(data));
  }, []);
  return (
    <div className='sidebar-container'>
      <div className='sidebar-header'>CMS+</div>
      <div className="collections-container">
        <div className="collection-header">
          <p style={{fontSize: '0.9rem'}}>COLLECTION TYPES</p>
          <AiOutlineSearch />
        </div>
        <div className='collection-list'>
          {collections.map((collection) => {
            return (<div className='list-item' key={collection.id}>
              <BsCircleFill size={8}/>
              {collection.name}
            </div>);
          }
          )}
        </div>
        <NavLink to='/' className={({ isActive }) => (isActive ? 'active builder' : 'inactive builder link')}>
          <div>CONTENT TYPE BUILDER</div>
        </NavLink>
      </div>
    </div>
  );
}
