import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Buttons/ButtonSubmit';
import s from './Login.module.scss';
import { useFormInput } from '../../hooks/customHooks';
import { login } from '../../redux/user/userOperations';

function Login() {
  const email = useFormInput('');
  const password = useFormInput('');
  const dispatch = useDispatch();
  const onLogin = user => dispatch(login(user));

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    onLogin(user);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Input label={'Email'} type="email" {...email} />
      <Input label={'Password'} type="password" {...password} />

      <Button type="submit">Войти</Button>
    </form>
  );
}

export default Login;
