import React from 'react';
import Entry from '../Entry';
import './CollectionType.css';

export default function CollectionType() {
  return (
    <div className="collection-type-container">
      <div className="collection-type-header">
        <div className="entries-number">13 Entries Found</div>
        <button className="add-entry">Add a new entry</button>
      </div>
      <div className="table-heading">
        <div className="id-entry">ID</div>
        <div className="name-entry">Name</div>
        <div className="entry">Field 1</div>
        <div className="entry">Field 2</div>
        <div className="entry-options">Actions</div>
      </div>
      <Entry />
      <Entry />
      <Entry />
    </div>
  );
}
