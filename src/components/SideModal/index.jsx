import React from 'react';
import './SideModal.css';
import PropTypes from 'prop-types';

export default function SideModal({
  setIsOpen,
  fieldsList,
  handleFormSubmit,
  handleUpdateEntry,
  update,
  content,
  entryId
}) {
  const newContentEntry = {};
  if(update) {
    fieldsList.forEach((field) => {
      newContentEntry[field] = content[field];
    });
  }
  const handleInputChange = (field, value) => {
    newContentEntry[field] = value;
  };
  return (
    <>
      <div className="dark-bg" />
      <div className="right">
        <div className="side-modal">
          <div className="modal-header">
            <h5 className="heading">{fieldsList.length===0? 'No fields available' :'Add a new entry'}</h5>
          </div>
          {fieldsList?.map((field) => {
            return (
              <>
                <div className="modal-content" key={field}>
                  {field}
                </div>
                <input
                  type="text"
                  className="modal-input"
                  defaultValue={newContentEntry[field]}
                  onChange={(e) => handleInputChange(field, e.target.value)}
                />
              </>
            );
          })}
          <div className="modal-actions-sidebar">
            <div className="actions-container">
              <button className="cancel-btn" onClick={() => setIsOpen(false)}>
                Cancel
              </button>
              <button
                className="create-btn"
                onClick={() => {
                  update
                    ? handleUpdateEntry(entryId, newContentEntry)
                    : handleFormSubmit(newContentEntry);
                  setIsOpen(false);
                }}
              >
                {update ? 'Update' : 'Add'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SideModal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  fieldsList: PropTypes.array.isRequired,
  handleFormSubmit: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  content: PropTypes.object.isRequired,
  handleUpdateEntry: PropTypes.func.isRequired,
  update: PropTypes.bool.isRequired,
  entryId: PropTypes.number.isRequired
};
