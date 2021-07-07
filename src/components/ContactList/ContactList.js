import React from 'react';
import styles from './ContactList.module.css';
import PropTypes from 'prop-types';

function ContactList({ contacts, onRemoveTask }) {
  return (
    <ul className={styles.ContactList}>
      {contacts.map(({ id, text, number }) => (
        <li key={id} className={styles.ContactListItem}>
          <div className={styles.Text}>
            <p className={styles.ContactListText}>{text} </p>
            <p className={styles.ContactListText}>{number}</p>
          </div>

          <section className={styles.ContactListActions}>
            <button
              className={styles.ContactListButton}
              onClick={() => onRemoveTask(id)}
            >
              DELETE
            </button>
          </section>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onRemoveTask: PropTypes.func.isRequired,
};

export default ContactList;
