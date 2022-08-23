import { createSlice } from '@reduxjs/toolkit';
import { addContactsRequest, addContactsSuccess } from './contactActions';
import { fetchContacts } from './contactOperations';
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
    filter: 'all',
    isLoading: false,
    error: null,
  },

  extraReducers: {
    [addContactsRequest]: state => {
      state.isLoading = true;
    },
    [addContactsSuccess]: (state, { payload }) => {
      state.isLoading = false;
      state.items = [...state.items, payload];
    },

    [fetchContacts.pending]: state => {
      state.isLoading = true;
    },
    [fetchContacts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },
    [fetchContacts.rejected]: state => {
      state.isLoading = false;
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

export const getContacts = state => state.items;
export const getFilter = state => state.filter;
