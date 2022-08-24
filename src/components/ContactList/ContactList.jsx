import { Box } from 'components/Box';
import ContactItem from 'components/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactOperations';
import {
  getContacts,
  // getLoadingStatus,
  // getFilter,
} from 'redux/contactSelectors';

const ContactList = () => {
  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);
  // const loading = useSelector(getLoadingStatus);
  // const filter = useSelector(getFilter);

  const filteredContacts = contacts;

  const deleteContact = id => {
    dispatch(removeContact(id));
  };

  return (
    <Box display="flex" flexDirection="column" p="0px" as="ul">
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          phone={phone}
          deleteContact={deleteContact}
        />
      ))}
    </Box>
  );
};

export default ContactList;
