import axios from 'axios';

export const addContactApi = contact => {
  return axios
    .post('https://6303e1de0de3cd918b3fab7c.mockapi.io/contacts', contact)
    .then(resp => ({ ...contact, id: resp.data.id }));
};
