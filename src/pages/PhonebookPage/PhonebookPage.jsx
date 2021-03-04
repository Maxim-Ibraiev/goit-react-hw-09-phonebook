import { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contactsOperations';
import * as userActions from '../../redux/user/userOperations';
import { getLoading } from '../../redux/contacts/contacts-selectors';
import { getFilter, getItems } from '../../redux/contacts/contacts-selectors';
import { getIsAuthorized, getToken } from '../../redux/user/userSelectors';
import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import Logo from '../../components/Logo';
import s from './PhonebookPage.module.scss';
import { TIMEOUT_LONGER } from '../../const';

class PhonebookPage extends Component {
  componentDidMount() {
    const { token, isAuthorized, fetchContacts, fetchCurrentUser } = this.props;

    if (token) {
      userActions.userToken.setToken(token);

      fetchCurrentUser();
    }

    fetchContacts();
  }

  render() {
    const { contacts, loading } = this.props;

    return (
      <div className={s.container}>
        <Logo appear timeout={TIMEOUT_LONGER} />

        <ContactForm />

        <h2>Contacts</h2>
        {contacts.length > 0 && <Filter isShow={contacts.length > 1} />}

        {loading ? <p>Loading...</p> : <ContactList />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getItems(state),
  filter: getFilter(state),
  loading: getLoading(state),
  isAuthorized: getIsAuthorized(state),
  token: getToken(state),
});

const mapDispatchToProps = dispatch => ({
  onSetContacts: arr => dispatch(actions.addItem(arr)),
  fetchContacts: () => dispatch(actions.items()),
  fetchCurrentUser: () => dispatch(userActions.currentUser()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhonebookPage);
