import React from 'react';
import './SideModal.css';
import PropTypes from 'prop-types';

export default function SideModal({ setIsOpen }) {
  return (
    <>
      <div className="dark-bg" onClick={() => setIsOpen(false)} />
      <div className="right">
        <div className="side-modal">
          <div className="modal-header">
            <h5 className='heading'>New Company_Profile</h5>
          </div>
          <div className="modal-content">Name</div>
          <input type="text" className="modal-input" />

          <div className="modal-actions">
            <div className="actions-container">
              <button className="cancel-btn" onClick={()=>setIsOpen(false)}>Cancel</button>
              <button className="create-btn" onClick={()=>setIsOpen(false)}>Add</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SideModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
};
