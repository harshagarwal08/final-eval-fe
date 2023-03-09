import React, { useState, useEffect } from 'react';
import './Builder.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiEdit2 } from 'react-icons/fi';
import ContentType from '../ContentType';
import Field from '../Field';
import Modal from '../Modal';
import { useNavigate } from 'react-router-dom';

export default function Builder() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem('token') === null) navigate('/login');
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [modalOptions, setModalOptions] = useState({});
  const showAddNewContentModal = () => {
    modalOptions.heading = 'Add New Content Type';
    modalOptions.inputHeading = 'Name of the content type';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };
  const showAddNewFieldModal = () => {
    modalOptions.heading = 'Add New Field';
    modalOptions.inputHeading = 'Name of the field';
    modalOptions.typeHeading = 'Type of the field';
    setModalOptions(modalOptions);
    setIsOpen(true);
  };
  return (
    <div className="content-builder">
      <div className="content-type-container">
        <div className="types-header">
          <p style={{ fontSize: '0.9rem' }}>7 Types</p>
          <AiOutlineSearch />
        </div>
        <button className="add-new" onClick={showAddNewContentModal}>
          + New Type
        </button>
        <ContentType />
      </div>
      <div className="content-type-field-container">
        <div className="content-type-name-header">
          <p
            style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: 'rgb(79, 79, 79)',
            }}
          >
            Company_Profile
          </p>
          <FiEdit2 size={12} />
        </div>
        <p style={{ fontSize: '0.9rem', color: 'rgb(79, 79, 79)' }}>8 Fields</p>
        <div className="content-type-field">
          <button
            className="add-new"
            style={{ width: '90%' }}
            onClick={showAddNewFieldModal}
          >
            Add another field
          </button>
          <Field />
          <Field />
          <Field />
        </div>
      </div>
      {isOpen && (
        <Modal
          setIsOpen={setIsOpen}
          modalOptions={modalOptions}
          setModalOptions={setModalOptions}
        />
      )}
    </div>
  );
}
