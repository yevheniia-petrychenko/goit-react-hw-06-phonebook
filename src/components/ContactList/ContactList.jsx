import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ContactCard from './ContactCard';
import { deleteContact } from '../../redux/actions';
import './contactList.css';

const ContactList = ({ onDeleteContact, contacts }) => {
  return (
    <ul className="contactList">
      {contacts.map(({ name, number, id }) => {
        return (
          <ContactCard
            name={name}
            number={number}
            id={id}
            key={id}
            onDelete={onDeleteContact}
          />
        );
      })}
    </ul>
  );
};

const getVisibleContact = (allContacts, contactsFilter) => {
  const normalizedFilter = contactsFilter.toLowerCase();
  return allContacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter),
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = ({ contacts: { items, contactFilter } }) => ({
  contacts: getVisibleContact(items, contactFilter),
});

// const mapStateToProps = state => ({
//   contacts: state.contacts.items,
// });

const mapDispatchToProps = dispatch => ({
  onDeleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
