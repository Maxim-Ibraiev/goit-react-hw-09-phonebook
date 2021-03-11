import { useEffect } from 'react';
import { connect } from 'react-redux';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Logo from '../../components/Logo';
import s from './PhonebookPage.module.scss';
import * as actions from '../../redux/contacts/contactsOperations';
import { getItems } from '../../redux/contacts/contacts-selectors';
import { TIMEOUT_LONGER } from '../../const';

function PhonebookPage({ contacts, fetchContacts }) {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className={s.container}>
      <Logo appear timeout={TIMEOUT_LONGER} />

      <ContactForm />

      <h2>Contacts</h2>
      {contacts.length > 0 && <Filter isShow={contacts.length > 1} />}

      <ContactList />
    </div>
  );
}

const mapStateToProps = state => ({
  contacts: getItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(actions.items()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPage);
