import css from './App.module.css'
import { ContactForm } from "./ContactForm/ContactForm";
import { ContactList } from "./ContactList/ContactList";
import { Filter } from "./Filter/Filter";

export const App = () => {

  return (
    <div>
      <h1 className={css.component}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.component}>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  )
};