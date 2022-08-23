import { createAction } from '@reduxjs/toolkit';

export const addContactsRequest = createAction('contacts/addRequest');
export const addContactsSuccess = createAction('contacts/addSuccess');
export const addContactsError = createAction('contacts/addError');
