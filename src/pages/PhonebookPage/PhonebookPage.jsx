import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Logo from '../../components/Logo';
import s from './PhonebookPage.module.scss';
import * as actions from '../../redux/contacts/contactsOperations';
import { getIsAuthorized, getToken } from '../../redux/user/userSelectors';
import { getItems } from '../../redux/contacts/contacts-selectors';
import { TIMEOUT_LONGER } from '../../const';
import r from '../../components/routes';

export default function PhonebookPage() {
  const contacts = useSelector(getItems);
  const token = useSelector(getToken);
  const isAuthorized = useSelector(getIsAuthorized);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuthorized) dispatch(actions.getItems());
  }, [dispatch, isAuthorized]);

  return (
    <div className={s.container}>
      {!token && <Redirect to={r.login} />}
      <Logo appear timeout={TIMEOUT_LONGER} />

      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter isShow={contacts.length > 1} />}

      <ContactList />
    </div>
  );
}
