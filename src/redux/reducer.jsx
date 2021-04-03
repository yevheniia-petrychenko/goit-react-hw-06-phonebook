import { combineReducers } from 'redux';
import { addContact, deleteContact, filter } from './actions';
import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
};

const items = createReducer(initialState.items, {
  [addContact]: (state, { payload }) => [...state, payload],
  [deleteContact]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

// const items = (state = [], { type, payload }) => {
//   switch (type) {
//     case types.ADD:
//       return [...state, payload];
//     case types.DELETE:
//       return state.filter(({ id }) => id !== payload);
//     default:
//       return state;
//   }
// };

const contactFilter = createReducer('', {
  [filter]: (_, { payload }) => payload,
});

// const contactFilter = (state = '', { type, payload }) => {
//   switch (type) {
//     case [filter]:
//       return payload;
//     default:
//       return state;
//   }
// };

export default combineReducers({
  items,
  contactFilter,
});
