import React, { useEffect } from 'react';
import { Box } from './Box';
import ContactList from './ContactList';
import ContactForm from './ContactForm';
import Filter from './Filter';
// import { getContacts } from 'redux/useSelectors';

const App = () => {
  // useEffect(() => {
  //   getContacts();
  // }, []);

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
        {/* <Filter /> */}
        <ContactList />
      </Box>
    </Box>
  );
};

export default App;
