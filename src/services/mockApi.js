import axios from 'axios';

axios.defaults.baseURL = 'https://6303e1de0de3cd918b3fab7c.mockapi.io';

export const fetchContactsApi = () => {
  return axios
    .get('/contacts')
    .then(resp =>
      resp.data.map(({ id, name, phone }) => ({ id, name, phone }))
    );
};

export const addContactApi = contact => {
  return axios
    .post('/contacts', contact)
    .then(resp => ({ ...contact, id: resp.data.id }));
};

export const removeContactApi = id => {
  return axios.delete(`/contacts/${id}`);
};
