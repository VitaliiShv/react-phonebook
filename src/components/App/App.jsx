import Navbar from 'components/Navbar/Navbar';

import css from './App.module.css';
import UserRoutes from 'components/UserRoutes';

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  // const contacts = useSelector(getAllContacts);
  // const filteredContacts = useSelector(getFilteredContacts);

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);



  // const isDuplicate = name => {
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contact list`);
  //     return true;
  //   }
  // };

  // const onAddContact = ({ name, number }) => {
  //   if (isDuplicate(name)) {
  //     return;
  //   }
  //   const action = addContact({ name, number });
  //   dispatch(action);
  // };

  return (
    <div className={css.container}>
      <Navbar></Navbar>
      {/* <ContactForm onSubmit={onAddContact} />
      <Filter />
      {isLoading && !error && <b>Request in progress...</b>}
      {filteredContacts.length > 0 && (
        <ContactList contacts={filteredContacts} />
      )} */}
      <UserRoutes></UserRoutes>
    </div>
  );
};

export default App;
