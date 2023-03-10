import React, { useState } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';

export default function Modal({
  setIsOpen,
  modalOptions,
  setModalOptions,
  addContentTypesHandler,
  addFieldHandler,
  updateContentTypeNameHandler,
}) {
  const [inputHeading, setInputHeading] = useState(
    modalOptions.inputData ? modalOptions.inputData : ''
  );
  const [typeHeading, setTypeHeading] = useState('');

  return (
    <>
      <div className="dark-bg" onClick={() => setIsOpen(false)} />
      <div className="centered">
        <div
          className={`modal ${modalOptions.typeHeading ? 'modal-height' : ''}`}
        >
          <div className="modal-header">
            <h5 className="heading">{modalOptions.heading}</h5>
          </div>
          <div className="modal-content">{modalOptions.inputHeading}</div>
          <input
            type="text"
            className="modal-input"
            value={inputHeading}
            onChange={(e) => setInputHeading(e.target.value)}
          />
          {modalOptions.typeHeading && (
            <>
              <div className="modal-content">{modalOptions.typeHeading}</div>
              <input
                type="text"
                className="modal-input"
                value={typeHeading}
                onChange={(e) => setTypeHeading(e.target.value)}
              />
            </>
          )}
          <div className="modal-actions">
            <div className="actions-container">
              <button
                className="cancel-btn"
                onClick={() => {
                  setIsOpen(false);
                  setModalOptions({});
                }}
              >
                Cancel
              </button>
              <button
                className="create-btn"
                onClick={
                  !typeHeading
                    ? () => {
                      modalOptions.inputData
                        ? updateContentTypeNameHandler(inputHeading)
                        : addContentTypesHandler(inputHeading);
                      setIsOpen(false);
                      setModalOptions({});
                    }
                    : () => {
                      addFieldHandler(inputHeading, typeHeading);
                      setIsOpen(false);
                      setModalOptions({});
                    }
                }
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.propTypes = {
  setIsOpen: PropTypes.func.isRequired,
  modalOptions: PropTypes.shape({
    heading: PropTypes.string.isRequired,
    inputHeading: PropTypes.string.isRequired,
    typeHeading: PropTypes.string,
    inputData: PropTypes.string,
  }).isRequired,
  setModalOptions: PropTypes.func.isRequired,
  addContentTypesHandler: PropTypes.func.isRequired,
  addFieldHandler: PropTypes.func.isRequired,
  updateContentTypeNameHandler: PropTypes.func.isRequired,
};
