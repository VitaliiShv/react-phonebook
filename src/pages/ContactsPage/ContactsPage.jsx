import { Container, Box, Backdrop, CircularProgress } from "@mui/material";
import ContactForm from "components/ContactForm/ContactForm";
import Filter from "components/Filter/Filter";
import ContactList from "components/ContactList/ContactList";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchContacts } from "redux/contacts/contacts-operations";
import {
  getAllContacts,
  getError,
  getFilteredContacts,
  getIsLoading,
} from "redux/contacts/contacts-selectors";
import { addContact } from "redux/contacts/contacts-operations";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const isDuplicate = name => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contact list`);
      return true;
    }
  };

  const onAddContact = ({ name, number }) => {
    if (isDuplicate(name)) {
      return;
    }
    const action = addContact({ name, number });
    dispatch(action);
  };

  return (
    <Box sx={{ backgroundColor: "#edebe6", height: "100vh" }}>
      <Container
        sx={{
          backgroundColor: "#5b9fff",
          backgroundSize: "100% auto",
          maxWidth: "600px",
          height: "100vh",
          paddingTop: "20px",
        }}
      >
        <ContactForm onSubmit={onAddContact} />
        <Filter />
        {isLoading && !error && (
          <Backdrop sx={{ color: "#fff", zIndex: 999 }} open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        )}
        {filteredContacts.length > 0 && (
          <ContactList contacts={filteredContacts} />
        )}
        {filteredContacts.length <= 0 && contacts.length > 0 && (
          <p>nothing matches</p>
        )}
        {contacts.length <= 0 && <p>Your contact list is empty</p>}
      </Container>
    </Box>
  );
};

export default ContactsPage;
