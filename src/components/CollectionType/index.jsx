import React, { useState, useEffect } from 'react';
import Entry from '../Entry';
import SideModal from '../SideModal';
import './CollectionType.css';
import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { makeRequest } from '../../utils/makeRequest';
import {
  CREATE_ENTRY_URL,
  DELETE_ENTRY_URL,
  GET_ALL_ENTRIES_BY_COLLECTION_URL,
  GET_COLLECTION_BY_ID_URL,
  GET_CONTENT_TYPE_BY_ID_URL,
} from '../../constants/apiEndPoints';

export default function CollectionType() {
  const [allFields, setAllFields] = useState([]);
  const [fieldsList, setFieldsList] = useState([]);
  const navigate = useNavigate();
  const { collectionId } = useParams();
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    makeRequest(GET_ALL_ENTRIES_BY_COLLECTION_URL(collectionId), navigate).then(
      (data) => setEntries(data)
    );
    makeRequest(GET_COLLECTION_BY_ID_URL(collectionId), navigate).then((data) =>
      makeRequest(
        GET_CONTENT_TYPE_BY_ID_URL(data?.content_type_id),
        navigate
      ).then((data) => {
        const fields = Object.keys(data?.fields);
        setAllFields(fields);
        setFieldsList(fields?.length > 3 ? fields?.slice(0, 3) : fields);
      })
    );
  }, [collectionId]);

  const handleCreateEntry = async (newContentEntry) => {
    const response = await makeRequest(CREATE_ENTRY_URL(collectionId), navigate, {
      data: {
        content_type_entries: newContentEntry,
      },
    });
    setEntries([...entries, response]);
  };

  const handleDeleteEntry = async(entryId) => {
    await makeRequest(DELETE_ENTRY_URL(collectionId, entryId), navigate);
    const newEntries = entries.filter((entry) => entry.id !== entryId);
    setEntries(newEntries);
  };

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="collection-type-container">
      <div className="collection-type-header">
        <div className="entries-number">{entries.length} Entries Found</div>
        <button className="add-entry" onClick={() => setIsOpen(true)}>
          Add a new entry
        </button>
      </div>
      <div className="table-heading">
        <div className="id-entry">Id</div>
        {fieldsList?.map((field) => {
          return (
            <div className="entry" key={field}>
              {field}
            </div>
          );
        })}
        <div className="entry-options">Actions</div>
      </div>
      {entries?.map((entry, index) => {
        return <Entry key={entry.id} index={index} entry={entry} fieldsList={fieldsList} handleDeleteEntry={handleDeleteEntry}/>;
      })}
      {isOpen && (
        <SideModal
          setIsOpen={setIsOpen}
          fieldsList={allFields}
          handleFormSubmit={handleCreateEntry}
        />
      )}
    </div>
  );
}

CollectionType.propTypes = {
  entries: PropTypes.array.isRequired,
};
