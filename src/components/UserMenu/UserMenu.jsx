import { Facebook } from 'react-spinners-css';
import ButtonDelete from '../Buttons/ButtonDelete';
import { logout } from '../../redux/user/userOperations';
import { getEmail } from '../../redux/user/userSelectors';
import { useSelector, useDispatch } from 'react-redux';
import s from './UserMenu.module.scss';

export default function UserMenu() {
  const email = useSelector(getEmail);
  const dispatch = useDispatch();

  return (
    <>
      {email ? <b className={s.email}>{email}</b> : <Facebook size={30} />}
      <ButtonDelete onClick={() => dispatch(logout())}>Выйти</ButtonDelete>
    </>
  );
}
