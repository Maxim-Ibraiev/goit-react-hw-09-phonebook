import React, { Component } from 'react';
import { TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../redux/contacts/contactsOperations';
import { getFilteredItems } from '../../redux/contacts/contacts-selectors';
import ContactItem from './ContactItem';
import s from './ContactList.module.scss';

class ContactList extends Component {
  static propTypes = {
    contacts: PropTypes.array,
    onDeleteContacts: PropTypes.func,
  };

  state = {
    isShow: false,
  };

  componentDidMount() {
    this.handleShow();
  }

  componentDidUpdate() {
    this.handleShow();
  }

  handleShow = () => {
    const { contacts } = this.props;
    const { isShow } = this.state;

    if (contacts[0] && !isShow) {
      this.setState({ isShow: true });
    }
  };

  render() {
    const { contacts, onDeleteContacts } = this.props;
    const { isShow } = this.state;

    return (
      <>
        {isShow && (
          <TransitionGroup component="ul" className={s.container}>
            {contacts.map(contact => (
              <ContactItem
                key={contact.id}
                contact={contact}
                onDeleteContacts={onDeleteContacts}
              />
            ))}
          </TransitionGroup>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  contacts: getFilteredItems(state),
});

const mapDispatchToProps = {
  onDeleteContacts: actions.deleteItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
