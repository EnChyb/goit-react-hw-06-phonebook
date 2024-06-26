import css from './ContactList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter)

    const filteredUserData = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase()));

    return (
        <div className={css.div}>
            {filteredUserData.length > 0 ?
                (
                    <table className={css.table}>
                        <thead className={css.theader}>
                            <tr>
                                <th>Name</th>
                                <th>Number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody className={css.tbody}>
                            {filteredUserData.map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                    <td><button className={css.button} onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <p className={css.message}>There is no contacts. </p>
                )}
        </div>
    )    
}

