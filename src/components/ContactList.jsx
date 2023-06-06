import { DeleteButton } from './App.styled';
import PropTypes, { objectOf, string } from 'prop-types';

export const ContactList = ({ contacts, filter, handleDelete }) => {
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
  filter: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
