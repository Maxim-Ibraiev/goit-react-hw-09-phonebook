import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuIdv4 } from 'uuid';
import Input from '../Input';
import Notification from '../../components/Notification';
import ButtonSubmit from '../../components/Buttons/ButtonSubmit';
import s from './ContactForm.module.scss';
import { useFormInput } from '../../hooks/customHooks';
import { addItem } from '../../redux/contacts/contactsOperations';
import { getItems } from '../../redux/contacts/contacts-selectors';

const INITIAL_STATE = {
  name: '',
  number: '',
  isShowNotification: false,
};

export default function ContactForm() {
  const name = useFormInput('');
  const number = useFormInput('');
  const [isShowNotification, setIsShowNotification] = useState(false);
  const contacts = useSelector(state => getItems(state));
  const dispatch = useDispatch();
  const onSetContacts = item => dispatch(addItem(item));

  const reset = () => {
    name.onChange(INITIAL_STATE.name);
    number.onChange(INITIAL_STATE.number);
    setIsShowNotification(INITIAL_STATE.isShowNotification);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (!name.value || contacts.find(contact => contact.name === name.value)) {
      setIsShowNotification(true);

      return setTimeout(() => {
        setIsShowNotification(false);
      }, 2000);
    }

    onSetContacts({ id: uuIdv4(), name: name.value, number: number.value });
    reset();
  };

  const notificationText =
    name.value && number.value
      ? `${name.value} is already in contacts.`
      : 'Please enter the contact.';

  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <Notification
        in={isShowNotification}
        text={notificationText}
        rightTransition={true}
      />

      <Input label={'Name'} {...name} />
      <Input label={'Number'} {...number} />

      <ButtonSubmit>Add contact</ButtonSubmit>
    </form>
  );
}
