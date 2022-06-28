// import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import s from './App.module.css'
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import ContactList from "./ContactList/ContactList";
import { filterChange } from '../redux/ContactsSlice';


export default function App() {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.filter)

  const handleChange = evt => {
    dispatch(filterChange(evt.currentTarget.value));
  };
    
  return (
      <div className={s.container}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />

        <h2 className={s.title}>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList />
      </div>
    );
  };