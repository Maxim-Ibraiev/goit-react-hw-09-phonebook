import React, { useState, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import { Facebook } from 'react-spinners-css';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/contacts/contactsOperations';
import {
  getFilteredItems,
  getLoading,
} from '../../redux/contacts/contacts-selectors';
import ContactItem from './ContactItem';
import s from './ContactList.module.scss';

export default function ContactList() {
  const contacts = useSelector(state => getFilteredItems(state));
  const loading = useSelector(state => getLoading(state));
  const dispatch = useDispatch();
  const onDeleteContacts = id => dispatch(actions.deleteItem(id));
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    setIsShow(contacts[0]);
  }, [contacts]);

  return (
    <>
      {loading && (
        <div className={s.loading}>
          <Facebook size={50} />
        </div>
      )}
      {isShow && (
        <>
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
