import { useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuIdv4 } from 'uuid';
import Input from '../Input';
import Notification from '../../components/Notification';
import ButtonSubmit from '../../components/Buttons/ButtonSubmit';
import s from './ContactForm.module.scss';
import { useForm } from 'react-hook-form';
import { addItem } from '../../redux/contacts/contactsOperations';
import { getItems } from '../../redux/contacts/contacts-selectors';
import { TIMEOUT } from '../../const';

export default function ContactForm() {
  const { register, handleSubmit, errors } = useForm();
  const form = useRef();
  const [isShowNotification, setIsShowNotification] = useState(false);

  const contacts = useSelector(getItems);
  const dispatch = useDispatch();

  const onSubmit = ({ name, number }) => {
    if (
      errors.name ||
      errors.number ||
      contacts.find(contact => contact.name === name)
    ) {
      setIsShowNotification(true);

      return setTimeout(() => {
        setIsShowNotification(false);
      }, 2000);
    }

    dispatch(addItem({ id: uuIdv4(), name, number }));
    form.current.reset();
  };

  const notificationText =
    form.current?.name.value && form.current?.number.value
      ? `${form.current.name.value} is already in contacts.`
      : 'Please enter the contact.';

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.container} ref={form}>
      <Notification
        in={isShowNotification}
        text={notificationText}
        rightTransition={true}
        timeout={TIMEOUT}
      />

      <Input label={'Name'} ref={register({ minLength: 1, required: true })} />
      <Input
        label={'Number'}
        ref={register({ minLength: 1, required: true })}
      />

      <ButtonSubmit>Add contact</ButtonSubmit>
    </form>
  );
}
