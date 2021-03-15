import { useDispatch } from 'react-redux';
import Input from '../../components/Input';
import Button from '../../components/Buttons/ButtonSubmit';
import s from './Registe.module.scss';
import { useFormInput } from '../../hooks/customHooks';
import { singUp } from '../../redux/user/userOperations';

function Register() {
  const name = useFormInput('');
  const email = useFormInput('');
  const password = useFormInput('');
  const dispatch = useDispatch();
  const onSingUp = user => dispatch(singUp(user));

  const handleSubmit = e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const user = {
      name: formData.get('name'),
      email: formData.get('email'),
      password: formData.get('password'),
    };
    onSingUp(user);
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <Input label={'Name'} {...name} />
      <Input label={'Email'} type={'email'} {...email} />
      <Input label={'Password'} type={'password'} {...password} />
      <Button>Войти</Button>
    </form>
  );
}

export default Register;
