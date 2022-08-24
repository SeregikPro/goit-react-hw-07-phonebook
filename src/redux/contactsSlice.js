import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  fetchContacts,
  removeContact,
  setFilter,
} from './contactOperations';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const initialState = {
//   items: [],
//   filter: '',
// };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = payload;
    },
    [fetchContacts.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [addContact.pending]: state => {
      state.isLoading = true;
    },
    [addContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.push(payload);
    },
    [addContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [removeContact.pending]: state => {
      state.isLoading = true;
    },
    [removeContact.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.items = state.items.filter(({ id }) => id !== payload);
    },
    [removeContact.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [setFilter.pending]: state => {
      state.isLoading = true;
    },
    [setFilter.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.filter = payload;
    },
    [setFilter.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
  // reducers: {
  //   addContact: (state, { payload }) => {
  //     state.items.push(payload);
  //   },
  //   removeContact: (state, { payload }) => {
  //     state.items = state.items.filter(({ id }) => id !== payload.id);
  //   },
  //   setFilter: (state, { payload }) => {
  //     state.filter = payload;
  //   },
  // },
});

// const persistConfig = {
//   key: 'contacts',
//   storage,
// };

// export const persistedReducer = persistReducer(
//   persistConfig,
//   contactsSlice.reducer
// );

// export const { addContact, removeContact, setFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
