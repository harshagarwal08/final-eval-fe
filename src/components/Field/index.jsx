import React from 'react';
import './Field.css';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';

export default function Field() {
  return (
    <div className="field-container">
      <div className="type-notation">Ab</div>
      <div className="field-name">Name</div>
      <div className="field-type">Text</div>
      <div className="field-options">
        <FaRegEdit />
        <RiDeleteBin6Line />
      </div>
    </div>
  );
}
