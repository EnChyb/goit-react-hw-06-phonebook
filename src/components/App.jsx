import { useEffect, useState } from "react";
import css from './App.module.css'
///

import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {

  //State - contacts are stored in local storage, if state is empty (no contacts), get empty array
  const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('contacts'))  || []);
  const [filter, setFilter] = useState('');

  //Set contact to local storage - every changes in state
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(userData))
  }, [userData])

  const addContact = newContact => {
    setUserData(prevContacts => [...prevContacts, newContact]);

    };

  //Take a  contact from userData, make a new Array without contact with contact with ID to delete, update new array
  const deleteContact = (id) => {
    const newArray = userData.filter(contact => contact.id !== id);
    setUserData(newArray);
  }

  // Find using filter
  const filteredUserData = userData.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );



  return (
    <div>
      <h1 className={css.component}>Phonebook</h1>
      <ContactForm userData={userData} addContact={addContact} />
      <h2 className={css.component}>Contacts</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <ContactList contacts={filteredUserData} onDeleteClick={deleteContact}/>
    </div>
  )
};