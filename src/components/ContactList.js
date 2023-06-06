import { useDispatch, useSelector } from 'react-redux';
import { DeleteButton } from './App.styled';
import PropTypes, { objectOf, string } from 'prop-types';
import { getContacts, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleDelete = e => {
    dispatch(deleteContact(e.target.id));
  };
  return (
    <ul>
      {contacts &&
        contacts.map(contact => {
          return !filter === '' ||
            contact.name.toLowerCase().includes(filter.toLowerCase()) ? (
            <li key={contact.id}>
              {contact.name}: {contact.number}
              <DeleteButton onClick={handleDelete} id={contact.id}>
                Delete
              </DeleteButton>
            </li>
          ) : null;
        })}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(objectOf(string)),
  filter: PropTypes.string,
  handleDelete: PropTypes.func,
};
