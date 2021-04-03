import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContact = createAction('contacts/add', ({ name, number }) => ({
  payload: {
    name: name,
    number: number,
    id: uuidv4(),
  },
}));

// const addContact = contacts => ({
//   type: 'contacts/add',
//   payload: {
//     name: contacts.item.name,
//     number: contacts.item.number,
//     id: uuidv4(),
//   },
// });

const deleteContact = createAction('contacts/delete');

// const deleteContact = id => ({
//   type: types.DELETE,
//   payload: id,
// });

const filter = createAction('contacts/contactFilter');

// const filter = value => ({
//   type: 'contacts/filter',
//   payload: value,
// });
export { addContact, deleteContact, filter };
