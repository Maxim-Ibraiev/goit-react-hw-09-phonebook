import React, { useState, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Facebook } from 'react-spinners-css';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contactsOperations';
import {
  getFilteredItems,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
import ContactItem from './ContactItem';
import s from './ContactList.module.scss';

function ContactList({ contacts, onDeleteContacts, loading }) {
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(contacts[0]);
  }, [contacts]);

  return (
    <>
      {isShow && (
        <>
          {loading && (
            <div className={s.loading}>
              <Facebook size={50} />
            </div>
          )}
          <TransitionGroup component="ul" className={s.container}>
            {contacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDeleteContacts={onDeleteContacts}
              />
            ))}
          </TransitionGroup>
        </>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  contacts: getFilteredItems(state),
  loading: getLoading(state),
});

const mapDispatchToProps = {
  onDeleteContacts: actions.deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func,
};
