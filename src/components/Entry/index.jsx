import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';
import SideModal from '../SideModal';
import './Entry.css';
import PropTypes from 'prop-types';


export default function Entry({ index, entry, fieldsList, handleDeleteEntry, handleUpdateEntry }) {
  const [content] = useState(entry?.content_type_entries);
  const displayContent = {};
  fieldsList.forEach((field) => {
    displayContent[field] = content[field];
  });
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="entry-container">
      <div className="id-entry">{index+1}</div>
      {Object.keys(displayContent).map((key) => {
        return (
          <div className="entry" key={key}>
            {displayContent[key]}
          </div>
        );
      })}
      <div className="entry-options">
        <MdContentCopy />
        <FaRegEdit onClick={() => setIsOpen(true)} />
        <RiDeleteBin6Line onClick={() => handleDeleteEntry(entry.id)}/>
      </div>
      {isOpen && <SideModal setIsOpen={setIsOpen} fieldsList = {Object.keys(content)} handleFormSubmit={handleUpdateEntry}/>}
    </div>
  );
}

Entry.propTypes = {
  entry: PropTypes.object.isRequired,
  fieldsList: PropTypes.array.isRequired,
  handleDeleteEntry: PropTypes.func.isRequired,
  handleUpdateEntry: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
