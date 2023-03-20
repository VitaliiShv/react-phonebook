import PropTypes from "prop-types";
// import css from "./ContactList.module.css";
// import Contact from "components/Contact/Contact";
import { useDispatch } from "react-redux";
import { deleteContact } from "redux/contacts/contacts-operations";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

const ContactList = ({ contacts }) => {
  const dispatch = useDispatch();

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

  const elements = contacts.map(({ id, name, number }) => (
    <ListItem
      key={id}
      secondaryAction={
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={() => onDeleteContact(id)}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemIcon sx={{ color: "#000000" }}>
        <LocalPhoneIcon />
      </ListItemIcon>

      <ListItemText primary={name} secondary={`tel: ${number}`} />
    </ListItem>
  ));

  return <List>{elements}</List>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
