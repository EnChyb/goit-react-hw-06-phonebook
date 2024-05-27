import PropTypes from 'prop-types'; 
import { nanoid } from 'nanoid';
import { useState } from 'react';
import css from './ContactForm.module.css'


export const ContactForm = ({ userData, addContact }) => {

    const [nameValue, setNameValue] = useState('');
    const [numberValue, setNumberValue] = useState('');

    //add new contact after submit
    const onSubmit = (e) => {
        e.preventDefault();

        // Do not add duplicated contact
        const duplicatedContact = userData.some(
        contact => contact.name.toLowerCase() === nameValue.toLowerCase()
        );

        if (duplicatedContact) {
        alert(`${nameValue} is already in contacts.`);
        return;
        }

        //Add new contact 
        const newContact = { id: nanoid(), name: nameValue, number: numberValue };
        addContact(newContact);

        document.getElementById("nameId").value = '';
        document.getElementById("numberId").value = '';
 
    };
    
    return (
        <form onSubmit={onSubmit} className={css.form}>
            <label className={css.label}>Name:
                <input className={css.input}
                    id='nameId'
                    value={userData.name}
                    type="text"
                    name="name"
                    onChange={e => setNameValue(e.target.value)} // Przekazanie funkcji obsługującej zmiany w inputach
                    /*pattern="^^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"*/
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </label>
            <label className={css.label}>Number:
                <input className={css.input}
                    id='numberId'
                    value={userData.number}
                    type="tel"
                    name="number"
                    onChange={e => setNumberValue(e.target.value)} // Przekazanie funkcji obsługującej zmiany w inputach
                    /*pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"*/
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />
            </label>
            <button className={css.button}>Add contact</button>
        </form>
    )
}

    ContactForm.propTypes = {
        userData: PropTypes.array,
        addContact: PropTypes.func,
    };