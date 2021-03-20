import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Buttons/ButtonSubmit';
import s from './Login.module.scss';
import { login } from '../../redux/user/userOperations';

function Login() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();

  return (
    <form
      onSubmit={handleSubmit(user => dispatch(login(user)))}
      className={s.form}
    >
      <Input label={'Email'} type="email" ref={register} />
      <Input label={'Password'} type="password" ref={register} />

      <Button type="submit">Войти</Button>
    </form>
  );
}

export default Login;
