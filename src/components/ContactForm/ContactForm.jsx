import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { fetchContacts } from 'redux/contactOperations';
import { addContact } from 'redux/contactOperations';
import { getContacts } from 'redux/contactSelectors';
// import { addContact, getContacts } from 'redux/contactsSlice';
import { nanoid } from 'nanoid';
import { Box } from 'components/Box';
import { Input, Title } from './ContactForm.styled';
import Button from 'components/Button';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();

  const contacts = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };

  const allContactNames = contacts.map(contact => contact.name);

  const checkDuplicates = name => {
    if (allContactNames.includes(name)) {
      alert(`${name} is already in contacts.`);
      return true;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (checkDuplicates(name)) {
      return;
    }

    const contact = { id: nanoid(), name, phone };

    dispatch(addContact(contact));
    // addContactApi(contact).then(res => console.log('res :>>', res));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <Box
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      alignItems="center"
      as="form"
    >
      <label>
        <Title>Name</Title>
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        <Title>Number</Title>
        <Input
          type="tel"
          name="phone"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <Button type="submit">Add contact</Button>
    </Box>
  );
};

export default ContactForm;
