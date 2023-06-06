import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList';
import { ContactForm } from './ContactForm';
import { Filter } from './Filter';
import { Wrapper } from './App.styled';

export const App = () => {
  const [contacts, setContacts] = useState(null);
  const [filter, setFilter] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  useEffect(() => {
    const localContacts = localStorage.getItem('contacts');
    const defaultContacts = [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ];
    if (localContacts && JSON.parse(localContacts).length !== 0) {
      setContacts(JSON.parse(localContacts));
    } else {
      setContacts(defaultContacts);
    }
  }, []);

  useEffect(() => {
    if (contacts !== null)
      localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleSubmit = e => {
    e.preventDefault();
    const alreadyInContacts = contacts.find(contact => contact.name === name);

    alreadyInContacts
      ? alert(`${name} is already in contacts`)
      : setContacts(contacts => [...contacts, { id: nanoid(), name, number }]);
    setName('');
    setNumber('');
  };

  const handleChangeFilter = e => {
    setFilter(e.target.value);
  };

  const handleChangeName = e => {
    setName(e.target.value);
  };

  const handleChangeNumber = e => {
    setNumber(e.target.value);
  };

  const handleDelete = e => {
    setContacts(contacts.filter(contact => contact.id !== e.target.id));
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm
        name={name}
        number={number}
        handleChangeName={handleChangeName}
        handleChangeNumber={handleChangeNumber}
        handleSubmit={handleSubmit}
      />
      <h2>Contacts</h2>
      <Filter filter={filter} handleChange={handleChangeFilter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        handleDelete={handleDelete}
      />
    </Wrapper>
  );
};
