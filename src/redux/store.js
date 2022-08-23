import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactsSlice';
// import {
//   persistStore,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import { persistedReducer } from './contactsSlice';

// const thunk = store => next => action => {
//   if (typeof action === 'function') {
//     action(store.dispatch, store.getState);
//     return;
//   }
//   next(action);
// };

export const store = configureStore({
  reducer: { contacts: contactsReducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(),
});

// export const persistor = persistStore(store);
