import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

export const getContacts = () => {
  return contactsInstance.get('/contacts');
};

export const addContact = data => {
  return contactsInstance.post('/contacts', data);
};

export const deleteContact = id => {
  return contactsInstance.delete(`/contacts/${id}`);
};
