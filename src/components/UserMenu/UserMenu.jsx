import { Facebook } from 'react-spinners-css';
import ButtonDelete from '../Buttons/ButtonDelete';
import { logout } from '../../redux/user/userOperations';
import { getEmail } from '../../redux/user/userSelectors';
import { useSelector, useDispatch } from 'react-redux';

export default function UserMenu() {
  const email = useSelector(state => getEmail(state));
  const dispatch = useDispatch();
  const onLogout = () => dispatch(logout());

  return (
    <>
      {email ? (
        <b style={{ marginRight: '20px' }}>{email}</b>
      ) : (
        <Facebook size={30} />
      )}
      <ButtonDelete onClick={onLogout}>Выйти</ButtonDelete>
    </>
  );
}
