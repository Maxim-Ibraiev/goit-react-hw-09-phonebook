import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken, getError } from '../../redux/user/userSelectors';
import r from '../routes';
import UserMenu from '../UserMenu';
import s from './Header.module.scss';

export default function Header({ location }) {
  const token = useSelector(state => getToken(state));
  const error = useSelector(state => getError(state));

  return (
    <nav className={s.container}>
      <ul className={s.list}>
        {token && !error ? (
          <li>
            <Link to={r.contacts}>Contacts</Link>
          </li>
        ) : (
          <>
            <li>
              <Link
                to={r.register}
                className={
                  location.pathname === r.register ? s.active : undefined
                }
              >
                Register
              </Link>
            </li>
            <li>
              <Link
                className={location.pathname === r.login ? s.active : undefined}
                to={r.login}
              >
                Login
              </Link>
            </li>
          </>
        )}
      </ul>

      {token && !error && <UserMenu className={s.menu} />}
    </nav>
  );
}
