export const BACKEND_URL = 'http://localhost:8080';
export const AUTH_URL = 'http://localhost:4000';

export const LOGIN_URL = {
  url: '/login',
  method: 'post'
};

export const REGISTER_URL = {
  url: '/register',
  method: 'post'
};

export const CREATE_CONTENT_TYPE_URL = {
  url: '/content_types',
  method: 'post'
};

export const GET_CONTENT_TYPES_URL = {
  url: '/content_types',
  method: 'get'
};

export const GET_CONTENT_TYPE_BY_ID_URL = (id) => {
  return {
    url: `/content_types/${id}`,
    method: 'get'
  };
};

export const UPDATE_CONTENT_TYPE_NAME_URL = (id) => {
  return {
    url: `/content_types/${id}`,
    method: 'patch'
  };
};

export const ADD_FIELD_URL = (id) => {
  return {
    url: `/content_types/${id}`,
    method: 'post'
  };
};

export const DELETE_FIELD_URL = (id) => {
  return {
    url: `/content_types/${id}`,
    method: 'delete'
  };
};

export const GET_ALL_COLLECTIONS_URL = {
  url: '/collections',
  method: 'get'
};

export const GET_COLLECTION_BY_ID_URL = (id) => {
  return {
    url: `/collections/${id}`,
    method: 'get'
  };
};

export const CREATE_ENTRY_URL = (id) => {
  return {
    url: `/collections/${id}/entries`,
    method: 'post'
  };
};

export const GET_ALL_ENTRIES_BY_COLLECTION_URL = (id) => {
  return {
    url: `/collections/${id}/entries`,
    method: 'get'
  };
};

export const UPDATE_ENTRY_URL = (collectionId, entryId) => {
  return {
    url: `/collections/${collectionId}/entries/${entryId}`,
    method: 'put'
  };
};

export const DELETE_ENTRY_URL = (collectionId, entryId) => {
  return {
    url: `/collections/${collectionId}/entries/${entryId}`,
    method: 'delete'
  };
};






