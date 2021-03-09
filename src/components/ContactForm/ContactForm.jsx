import { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuIdv4 } from 'uuid';
import { connect } from 'react-redux';
import { addItem } from '../../redux/contacts/contactsOperations';
import { getItems } from '../../redux/contacts/contacts-selectors';
import ButtonSubmit from '../../components/Buttons/ButtonSubmit';
import Input from '../Input';
import Notification from '../../components/Notification';
import s from './ContactForm.module.scss';

const INITIAL_STATE = {
  name: '',
  number: '',
  isShowNotification: false,
};

function ContactForm({ contacts, onSetContacts }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [isShowNotification, setIsShowNotification] = useState(false);

  const reset = () => {
    setName(INITIAL_STATE.name);
    setNumber(INITIAL_STATE.number);
    setIsShowNotification(INITIAL_STATE.isShowNotification);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name || contacts.find(contact => contact.name === name)) {
      setIsShowNotification(true);

      return setTimeout(() => {
        setIsShowNotification(false);
      }, 2000);
    }

    onSetContacts({ id: uuIdv4(), name, number });
    reset();
  };

  const notificationText =
    name && number
      ? `${name} is already in contacts.`
      : 'Please enter the contact.';

  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <Notification
        in={isShowNotification}
        text={notificationText}
        rightTransition={true}
      />

      <Input
        label={'Name'}
        value={name}
        onChange={({ target }) => setName(target.value)}
      />
      <Input
        label={'Number'}
        value={number}
        onChange={({ target }) => setNumber(target.value)}
      />

      <ButtonSubmit text={'Add contact'} />
    </form>
  );
}

const mapStateToProps = state => ({
  contacts: getItems(state),
});

const mapDispatchToProps = {
  onSetContacts: addItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);

ContactForm.propTypes = {
  onSetContacts: PropTypes.func,
};
