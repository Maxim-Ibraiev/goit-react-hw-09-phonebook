import React from 'react';
import PropTypes from 'prop-types';
import { logout } from '../../redux/user/userOperations';
import { getEmail } from '../../redux/user/userSelectors';
import { connect } from 'react-redux';

function UserMenu({ email, onLogout }) {
  return (
    <div>
      <b style={{ marginRight: '20px' }}>{email}</b>
      <button onClick={onLogout}>Выйти </button>
    </div>
  );
}

UserMenu.prototype = {
  mail: PropTypes.string,
  onLogout: PropTypes.func,
};

const mapStateToProps = state => ({ email: getEmail(state) });

const mapDispatchToProps = {
  onLogout: logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
