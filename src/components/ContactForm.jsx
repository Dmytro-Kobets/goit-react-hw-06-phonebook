import { Input, Form, Button } from './App.styled';
import PropTypes from 'prop-types';

export const ContactForm = ({
  name,
  number,
  handleChangeName,
  handleChangeNumber,
  handleSubmit,
}) => {
  return (
    <Form onSubmit={handleSubmit}>
      <label>Name</label>
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChangeName}
        value={name}
      />
      <label>Phone</label>
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChangeNumber}
        value={number}
      />
      <Button type="submit">Add Contact</Button>
    </Form>
  );
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleChangeName: PropTypes.func.isRequired,
  handleChangeNumber: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};
