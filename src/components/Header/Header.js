import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getIsAuthorized } from '../../redux/user/userSelectors';
import r from '../routes';
import UserMenu from '../UserMenu';
import s from './Header.module.scss';

function Header({ isAuthorized, location }) {
  return (
    <nav className={s.container}>
      <ul className={s.list}>
        {isAuthorized ? (
          <li>
            <Link to={r.contacts}>Contacts</Link>
          </li>
        ) : (
          <>
            <li>
              <Link
                to={r.register}
                className={location.pathname === '/register' && s.active}
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === '/login' && s.active}
                to={r.login}
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>

      {isAuthorized && <UserMenu className={s.menu} />}
    </nav>
  );
}

const mapStateToProps = state => ({
  isAuthorized: getIsAuthorized(state),
});

export default connect(mapStateToProps)(Header);
