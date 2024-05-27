import PropTypes from 'prop-types'; 
import css from './ContactList.module.css'

export const ContactList = ({ contacts, onDeleteClick }) => {

    return (
        <div className={css.div}>
            {contacts.length > 0 ?
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
                            {contacts.map((contact) => (
                                <tr key={contact.id}>
                                    <td>{contact.name}</td>
                                    <td>{contact.number}</td>
                                    <td><button className={css.button} onClick={() => onDeleteClick(contact.id)}>Delete</button></td>
                                </tr>
                            ))
                            }
                        </tbody>
                    </table>
                ) : (
                    <p className={css.message}>Your list is empty. Add your first contact!</p>
                )}
        </div>
    )    
}

ContactList.propTypes = {
    contacts: PropTypes.array,
    onDeleteClick: PropTypes.func,
}
