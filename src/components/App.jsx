import React, { useEffect } from 'react';
import { Box } from './Box';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contactOperations';

const App = () => {
  const dispatch = useDispatch();

  // const isExistContacts = useSelector(state =>
  //   Boolean(state.contacts.items.length)
  // );

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center" p={5}>
      <h1>Phonebook</h1>
      <Box
        width="300px"
        textAlign="center"
        border="normal"
        borderColor="accent"
        borderRadius="normal"
        p={4}
      >
        <ContactForm />
      </Box>
      <Box width="300px">
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Box>
    </Box>
  );
};

export default App;
