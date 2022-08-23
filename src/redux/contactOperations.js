import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContactsRequest,
  addContactsSuccess,
  addContactsError,
} from './contactActions';
import { addContactApi } from 'services/mockApi';

axios.defaults.baseURL = 'https://6303e1de0de3cd918b3fab7c.mockapi.io/contacts';

export const addContact = contact => (dispatch, getState) => {
  dispatch(addContactsRequest());

  addContactApi(contact)
    .then(newContact => dispatch(addContactsSuccess(newContact)))
    .catch(err => dispatch(addContactsError(err.message)));
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
