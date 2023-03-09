import React, { useState } from 'react';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { MdContentCopy } from 'react-icons/md';
import SideModal from '../SideModal';
import './Entry.css';

export default function Entry() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="entry-container">
      <div className="id-entry">1</div>
      <div className="name-entry">Name</div>
      <div className="entry">Text</div>
      <div className="entry">Text</div>
      <div className="entry-options">
        <MdContentCopy />
        <FaRegEdit onClick={() => setIsOpen(true)} />
        <RiDeleteBin6Line />
      </div>
      {isOpen && <SideModal setIsOpen={setIsOpen} />}
    </div>
  );
}
