import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Input from '../../components/Input';
import Button from '../../components/Buttons/ButtonSubmit';
import s from './Registe.module.scss';
import { singUp } from '../../redux/user/userOperations';

function Register() {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const onSingUp = user => dispatch(singUp(user));

  return (
    <form onSubmit={handleSubmit(onSingUp)} className={s.form}>
      <Input label={'Name'} ref={register} />
      <Input label={'Email'} type={'email'} ref={register} />
      <Input label={'Password'} type={'password'} ref={register} />
      <Button>Войти</Button>
    </form>
  );
}

export default Register;
