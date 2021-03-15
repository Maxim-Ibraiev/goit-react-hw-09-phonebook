import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Facebook } from 'react-spinners-css';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Logo from '../../components/Logo';
import s from './PhonebookPage.module.scss';
import * as actions from '../../redux/contacts/contactsOperations';
import { getIsAuthorized, getToken } from '../../redux/user/userSelectors';
import { getItems, getLoading } from '../../redux/contacts/contacts-selectors';
import { TIMEOUT_LONGER } from '../../const';
import r from '../../components/routes';

export default function PhonebookPage() {
  const contacts = useSelector(state => getItems(state));
  const token = useSelector(state => getToken(state));
  const loading = useSelector(state => getLoading(state));
  const isAuthorized = useSelector(state => getIsAuthorized(state));
  const dispatch = useDispatch();
  // const fetchContacts = () => dispatch(actions.getItems());

  useEffect(() => {
    if (isAuthorized) dispatch(actions.getItems());
  }, [isAuthorized]);

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
